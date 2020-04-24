import React from "react";
import style from './Dialogs.module.sass';
import DialogItem from "./Dialogitem/DialogItem";
import Chat from "./Chat/Chat";


const Dialogs = (props) => {
    let dialogElements = props.state.messagePage.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>);
    let chatsElements = props.state.messagePage.chats.map(c => <Chat message={c.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    let changeMessage = () => {
        let newText = newMessage.current.value;
        props.updateNewMessageText(newText);
    }

    return (
        <div className={style.wrapperContent}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.chat}>
                {chatsElements}
                <div className={style.newPost}>
                    <textarea ref={newMessage}
                              onChange={changeMessage}
                              value={props.state.messagePage.addNewMessage}
                              className={style.newMessage}/>
                    <div onClick={addMessage} className={style.buttonSend}>
                        Send
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;