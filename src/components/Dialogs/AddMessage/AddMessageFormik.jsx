import React from "react";
import style from "./AddMessage.module.sass";
import * as Yup from "yup";
import {Form, Formik, useField} from "formik";


const CustomTextarea = ({label, ...props}) => {
   const [feild, meta] = useField(props);
   return (
      <>
         {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
         <textarea {...feild} {...props}  />
         {meta.touched && meta.error ? (
            <div className={style.error}>{meta.error}</div>
         ) : null}
      </>
   )
}

const AddMessageForm = (props) => {
   return (
      <>
         <Formik initialValues={{
            message: ''
         }}
                 validationSchema={Yup.object({
                    message: Yup.string()
                       .max(150, 'Must be 150 characters or less'),
                 })
                 }
                 onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                       props.onSubmit(values)
                       resetForm();
                       setSubmitting(false);
                    }, 400)
                 }}
         >
            {props => (
               <Form onSubmit={props.handleSubmit}
                     className={style.newPost}>
                  <CustomTextarea name="message"
                                   type="text"
                                   placeholder="new message..."
                                   className={style.newMessage}/>
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