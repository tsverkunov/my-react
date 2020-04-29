import React from 'react';
import style from './MyPosts.module.sass';
import Post from './Post/Post';
import AddNewPost from "./AddNewPost/AddNewPost";


const MyPosts = (props) => {
    let postElement =
        props.post.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    return (
        <div className={style.posts}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddNewPost newPostText={props.newPostText}
                        addPost={props.onAddPost}
                        updateNewPostText={props.onPostChange}/>
            {postElement}
        </div>
    )
}

export default MyPosts;
