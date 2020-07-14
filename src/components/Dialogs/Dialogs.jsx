import React from "react";
import style from "./Dialogs.module.sass";
import DialogItem from "./Dialogitem/DialogItem";
import Chat from "./Chat/Chat";
import AddMessageFormik from "./AddMessage/AddMessageFormik";


const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d =>
       <DialogItem ava={d.ava}
                   name={d.name}
                   id={d.id}
                   key={d.id}
       />);
    let chatsElements = props.chats.map(c =>
       <Chat message={c.message}
             key={c.id}
             avatar={props.avatar}
       />);
    return (
        <div className={style.wrapperContent}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.chat}>
                {chatsElements}
                <AddMessageFormik addMessage={props.addMessage}/>
            </div>
        </div>
    );
}


export default Dialogs;