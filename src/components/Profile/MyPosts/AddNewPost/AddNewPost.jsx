import React from "react";
import style from "./AddNewPost.module.sass";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {CustomTextarea} from "../../../../common/FormsControls/FormsControls";


const AddNewPostForm = (props) => (
   <>
      <Formik initialValues={{
         post: ''
      }}
              validationSchema={Yup.object({
                 post: Yup.string()
                    .max(150, 'Must be 150 characters or less'),
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
               <CustomTextarea name="post"
                               placeholder="new post..."
                               className={style.news}
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


const AddNewPost = (props) => {
   let addNewPost = (values) => {
      props.addPost(values.post);
   }
   return (
      <AddNewPostForm onSubmit={addNewPost}/>
   )
}

export default AddNewPost;


// let newPostElement = React.createRef();       // создаём React-ссылку
// let text = newPostElement.current.value;
/*  ref={newPostElement} назначаем React-ссылку елементу "textarea"*/