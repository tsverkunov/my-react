import React from 'react';
import './MyPosts.sass';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className="posts">
            <div>
                <h2>My posts</h2>
            </div>
            <div className="newPost">
                <textarea className="news" placeholder="your news...">

                </textarea>
                <div className="buttonSend">
                    <a href="#">Send</a>
                </div>
            </div>
            <Post name='Ivan' message='Hi, how are you?' likesCount='10'/>
            <Post name='Valeria' message="It's my first post!" likesCount='25'/>
        </div>
    )
}

export default MyPosts;