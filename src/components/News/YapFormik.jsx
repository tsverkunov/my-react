import React from "react";
import {Form, Formik, useField} from "formik";
import *as Yup from 'yup';
import style from './News.module.sass'



const CustomTextInput = ({ label, ...props}) => {
   const [feild, meta] = useField(props);

   return (
      <>
         <label htmlFor={props.id || props.name}>{label}</label>
         <input className="textInput" {...feild} {...props} />
         {meta.touched && meta.error ? (
            <div className={style.error}>{meta.error}</div>
         ) : null}
      </>
   )
}
const CustomCheckbox = ({ children, ...props}) => {
   const [feild, meta] = useField(props, 'checkbox');

   return (
      <>
         <label className="checkbox">
         <input type="checkbox" {...feild} {...props} />
            {children}
         </label>
         {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
         ) : null}
      </>
   )
}


const YupFormik = () => {
   return (
      <>
         <Formik initialValues={{
            email: '',
            password: '',
            rememberMe: false,
         }}
                 validationSchema={Yup.object({
                    email: Yup.string()
                       .email('Invalid email address')
                       .required('Required'),
                    password: Yup.string()
                       .required('Required')
                       .min(3, 'Must be at least 3 characters'),
                    rememberMe: Yup.boolean()
                       .oneOf([true], 'You must Checked')
                 })
                 }
                 onSubmit={(values, { setSubmitting, resetForm}) =>{
                    setTimeout(() => {
                       alert(JSON.stringify(values, null, 2));
                       resetForm();
                       setSubmitting(false);
                    }, 3000)

                 }}
         >
            {props =>(
            <Form>
               <h1>Sign In</h1>
               <CustomTextInput label="Email" name="email" type="email"/>
               <CustomTextInput label="Password" name="password" type="password"/>
               <CustomCheckbox name="rememberMe">
                  Remember Me
               </CustomCheckbox>
               <button type="submit"
                       disabled={props.isSubmitting}
               >
                  {props.isSubmitting ? 'Loading...' : 'Log In'}
               </button>
            </Form>
            )}
         </Formik>
      </>
   );
}
export default YupFormik;