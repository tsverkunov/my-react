import React from 'react';
import MyPosts from "./MyPosts";
import {addLikeAC, addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps= (state) => {
    return{
        post: state.profileReducer.post,
        newPostText: state.profileReducer.newPostText
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        onAddPost: () => {
            dispatch(addPostCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        onAddLike: (postId) => {
            dispatch(addLikeAC(postId));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
