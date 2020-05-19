import React from "react";
import MyPosts from "./MyPosts";
import {addLike, addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToProps= (state) => {
    return{
        post: state.profileReducer.post
    }
}

// const MyPostsContainer = connect(mapStateToProps, {addPost, postChange, addLike})(MyPosts);
// export default MyPostsContainer;

export default compose(
    connect(mapStateToProps, {addPost, addLike})
)(MyPosts);