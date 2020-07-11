import React from "react";
import style from "./AddMessage.module.sass";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import {CustomTextarea} from "../../../common/FormsControls/FormsControls";


const AddMessageForm = (props) => {
   return (
      <>
         <Formik initialValues={{
            message: ''
         }}
                 validationSchema={Yup.object({
                    message: Yup.string()
                       .max(300, 'Must be 300 characters or less'),
                 })
                 }
                 onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                       props.onSubmit(values)
                       resetForm();
                       // setSubmitting(false);
                    }, 300)
                 }}
         >
            {props => (
               <Form className={style.newPost}>
                  <CustomTextarea name="message"
                                  placeholder="new message..."
                                  className={style.newMessage}
                  />
                  <button type="submit"
                          disabled={props.isSubmitting}
                          className={style.buttonSend}
                  >
                     {props.isSubmitting ? 'Sending...' : 'Send'}
                  </button>
               </Form>
            )}
         </Formik>
      </>
   )
}

const AddMessageFormik = (props) => {
   let onSubmit = (values) => {
      // alert(JSON.stringify(values, null, 2));
      props.addMessage(values.message);
   }
   return (
      <AddMessageForm onSubmit={onSubmit}/>
   );
}

export default AddMessageFormik;