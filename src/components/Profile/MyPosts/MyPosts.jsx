import React from 'react';
import style from './MyPosts.module.sass';
import Post from './Post/Post';
import AddNewPost from "./AddNewPost/AddNewPost";


const MyPosts = (props) => {
    let postElement =
        props.state.profilePage.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={style.posts}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddNewPost state={props.state} dispatch={props.dispatch}/>
            {postElement}
        </div>
    )
}

export default MyPosts;
