import React from 'react';
import './MyPosts.sass';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElement = props.post.map(p => <Post message={p.message}
                                                likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (
        <div className="posts">
            <div>
                <h3>My posts</h3>
            </div>
            <div className="newPost">
                <textarea ref={newPostElement}
                          className="news"
                          placeholder="your news...">
                </textarea>
                <div onClick={ addPost } className="buttonSend">
                    Send
                </div>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts;