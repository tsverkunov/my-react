import React from "react";
import style from './Dialogs.module.sass';
import DialogItem from "./Dialogitem/DialogItem";
import Chat from "./Chat/Chat";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>);
    let chatsElements = props.state.chats.map(c => <Chat message={c.message}/>);


    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    }

    return (
        <div className={style.wrapperContent}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.chat}>
                {chatsElements}
                <div className={style.newPost}>
                    <textarea ref={newMessage} className={style.newMessage} placeholder='New message...'>
                    </textarea>
                    <div onClick={addMessage} className={style.buttonSend}>
                        Send
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;