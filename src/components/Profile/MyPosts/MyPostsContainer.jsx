import React from 'react';
import MyPosts from "./MyPosts";
import {addLike, addPost, postChange} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToProps= (state) => {
    return{
        post: state.profileReducer.post,
        newPostText: state.profileReducer.newPostText
    }
}

// const MyPostsContainer = connect(mapStateToProps, {addPost, postChange, addLike})(MyPosts);
// export default MyPostsContainer;

export default compose(
    connect(mapStateToProps, {addPost, postChange, addLike})
)(MyPosts);