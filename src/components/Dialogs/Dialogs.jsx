import React from "react";
import style from './Dialogs.module.sass';
import DialogItem from "./Dialogitem/DialogItem";
import Chat from "./Dialogitem/Chat";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Victoria'},
        {id: 3, name: 'Valeria'},
        {id: 4, name: 'Donald'},
        {id: 5, name: 'Kate'},
        {id: 6, name: 'Bill'}
    ]
    let chats = [
        {id: 1, message: 'In half a year I will be a programmer!'},
        {id: 2, message: 'I learn Javascript!'},
        {id: 3, message: 'I will live in my house'},
        {id: 4, message: 'I will live in my house'},
        {id: 5, message: 'I will live in my house'}
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let chatsElements = chats.map(c => <Chat message={c.message}/>)

    return (
        <div className={style.wrapperContent}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.chats}>
                {chatsElements}
            </div>
        </div>
    );
}

export default Dialogs;