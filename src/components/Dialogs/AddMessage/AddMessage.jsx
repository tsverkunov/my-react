import React from "react";
import style from './AddMessage.module.sass';


const AddMessage = (props) => {
    let onAddMessage = () => {
        props.addMessage()
    }
    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={style.newPost}>
            <textarea onChange={onChangeMessage}
                      value={props.addNewMessage}
                      className={style.newMessage}
                      placeholder="new message..."/>
            <button onClick={onAddMessage} className={style.buttonSend}>
                Send
            </button>
        </div>
    );
}

export default AddMessage;