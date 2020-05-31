import React from "react";
import style from "./Login.module.sass";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {Form, Formik, useField} from "formik";
import * as Yup from "yup";


const CustomTextInput = ({label, ...props}) => {
   const [feild, meta] = useField(props);
   return (
      <>
         {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
         <input className={style.textInput} {...feild} {...props} />
         {meta.touched && meta.error ? (
            <div><span className={style.error}>{meta.error}</span></div>

         ) : null}
      </>
   )
}
const CustomCheckbox = ({children, ...props}) => {
   const [feild, meta] = useField(props, 'checkbox');
   return (
      <>
         <input type="checkbox" {...feild} {...props} />
         {children}
         {meta.touched && meta.error ? (
            <div className={style.error}>{meta.error}</div>
         ) : null}
      </>
   )
}

const LoginForm = (props) => {
   return (
      <div className={style.login}>
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
                       .min(8, 'Must be at least 8 characters'),
                    // rememberMe: Yup.boolean()
                    //    .oneOf([true], 'You must Checked')
                 })
                 }
                 onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                       // alert(JSON.stringify(values, null, 2));
                       props.onSubmit(values)
                       resetForm();
                       setSubmitting(false);
                    }, 1000)
                 }}
         >
            {props => (
               <Form>
                  <div>
                     <CustomTextInput placeholder="email" name="email" type="email"/>
                  </div>
                  <div>
                     <CustomTextInput placeholder="password" name="password" type="password"/>
                  </div>
                  <div className={style.checkboxItem}>
                     <CustomCheckbox name="rememberMe">
                        Remember Me
                     </CustomCheckbox>
                  </div>
                  <div className={style.buttonItem}>
                     <button type="submit"
                             disabled={props.isSubmitting}
                     >
                        {props.isSubmitting ? 'Loading...' : 'Log In'}
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
}

const Login = (props) => {
   const onSubmit = (values) => {
      props.login(values.email, values.password, values.rememberMe)
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"}/>
   }
   return <div className={style.login}>
      <LoginForm onSubmit={onSubmit}/>
   </div>
}

const mapStateToProps = (state) => ({
   isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login})(Login);