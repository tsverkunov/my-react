import React from "react";
import style from "./AddMessage.module.sass";
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.newPost}>
            <Field component="textarea"
                   name="newMessageBody"
                   placeholder="new message..."
                   className={style.newMessage}
            />
            <button className={style.buttonSend} disabled={props.submitting}>
               Send
            </button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'newMessageBody'})(AddMessageForm)

const AddMessage = (props) => {
    let addNewMessage = (values) => {
          props.addMessage(values.newMessageBody);
    }
    return (
        <AddMessageReduxForm onSubmit={addNewMessage}/>
    );
}

export default AddMessage;