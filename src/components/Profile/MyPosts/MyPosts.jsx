import React from 'react';
import style from './MyPosts.module.sass';
import Post from './Post/Post';
import AddNewPost from "./AddNewPost/AddNewPost";


const MyPosts = (props) => {
    let postElement =
        props.post.map(p => <Post addLike={props.addLike}
                                  message={p.message}
                                  likesCount={p.likesCount}
                                  id={p.id}
                                  key={p.id}/>);

    return (
        <div className={style.posts}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddNewPost newPostText={props.newPostText}
                        addPost={props.addPost}
                        postChange={props.postChange}/>
            {postElement}
        </div>
    )
}

export default MyPosts;
