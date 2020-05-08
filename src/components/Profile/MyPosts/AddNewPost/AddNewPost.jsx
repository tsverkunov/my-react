import React from 'react';
import style from './AddNewPost.module.sass';


const AddNewPost = (props) => {
    let newPostElement = React.createRef();       // создаём React-ссылку

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={style.newPost}>
                <textarea ref={newPostElement} /*назначаем React-ссылку елементу "textarea"*/
                          onChange={onPostChange}
                          value={props.newPostText}
                          className={style.news}
                          placeholder='new post...'/>
            <button onClick={onAddPost} className={style.buttonSend}>
                Send
            </button>
        </div>
    )
}

export default AddNewPost;
