import React from 'react';
import './MyPosts.sass';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className="posts">
            <div>
                <h3>My posts</h3>
            </div>
            <div className="newPost">
                <textarea className="news" placeholder="your news...">

                </textarea>
                <div className="buttonSend">
                    <a href="#">Send</a>
                </div>
            </div>
            <Post message='Hi, how are you?' likesCount='10'/>
            <Post message="It's my first post!" likesCount='25'/>
        </div>
    )
}

export default MyPosts;