import React from 'react';
import './MyPosts.sass';
import Post from './Post/Post';

const MyPosts = (props) => {

    let post = [
        { id: 1, message: 'Hi, how are you?', likesCount: 333 },
        { id: 2, message: 'It\'s my first post!', likesCount: 233 }
    ]

    let postElement = post.map(p => <Post message={p.message} likesCount={p.likesCount}/> )

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
            {postElement}
        </div>
    )
}

export default MyPosts;