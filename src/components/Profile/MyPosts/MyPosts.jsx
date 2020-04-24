import React from 'react';
import './MyPosts.sass';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElement = props.state.profilePage.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();       // создаём React-ссылку

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);
    }

    return (
        <div className="posts">
            <div>
                <h3>My posts</h3>
            </div>
            <div className="newPost">
                <textarea ref={newPostElement} /*назначаем React-ссылку елементу "textarea"*/
                          onChange={onPostChange}
                          value={props.state.profilePage.newPostText}
                          className="news"/>
                <div onClick={addPost} className="buttonSend">
                    Send
                </div>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts;