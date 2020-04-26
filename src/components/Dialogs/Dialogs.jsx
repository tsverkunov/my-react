import React from "react";
import style from './Dialogs.module.sass';
import DialogItem from "./Dialogitem/DialogItem";
import Chat from "./Chat/Chat";
import AddMessage from "./AddMessage/AddMessage";



const Dialogs = (props) => {
    let dialogElements = props.state.messagePage.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>);
    let chatsElements = props.state.messagePage.chats.map(c => <Chat message={c.message}/>);

    return (
        <div className={style.wrapperContent}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.chat}>
                {chatsElements}
                <AddMessage state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Dialogs;