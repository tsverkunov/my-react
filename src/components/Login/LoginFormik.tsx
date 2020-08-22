import React, {FC, useEffect} from "react";
import style from "./Login.module.sass";
import {connect} from "react-redux";
import {login, actions} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {required} from "../../utilities/validators/validators";
import {CustomCheckbox, CustomInput} from "../../common/FormsControls/FormsControls";
import {AppStateType} from "../../redux/redux-store";

type LoginFormValues = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}
type FormPropsTypes = {
  captchaUrl: string | null
  onSubmit: (values: LoginFormValues) => void
  errorMessage: string | null
}
const LoginForm: FC<FormPropsTypes> = ({captchaUrl, onSubmit, errorMessage}) => {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: ''
  };
  return (
   <div className={style.login}>
     <h1>Sign in</h1>
     <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
          setTimeout(() => {
            onSubmit(values)
            // alert(JSON.stringify(values, null, 2));
            resetForm();
          }, 300)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
          password: Yup.string()
             .required('Required')
             .min(3, 'Must be at least 3 characters'),
          // rememberMe: Yup.boolean()
          //    .oneOf([true], 'You must Checked')
        })}
     >
       {(props) => {
         const {isSubmitting} = props
         return (
            <Form>
              <div>
                <Field
                   name="email"
                   placeholder="email"
                   component={CustomInput}
                />
              </div>
              <div>
                <Field
                   name="password"
                   placeholder="password"
                   component={CustomInput}
                   type="password"
                />
              </div>
              <div className={style.checkboxItem}>
                <CustomCheckbox name="rememberMe"
                                label="Remember Me"
                                id="i3"
                />
              </div>
              {captchaUrl && <img src={captchaUrl} alt=""/>}
              {captchaUrl && <div>
                <Field
                   name="captcha"
                   placeholder="Captcha"
                   component={CustomInput}
                   validate={required}
                />
              </div>}
              {
                errorMessage && <div className={style.formCommonError}>
                  <span>{errorMessage}</span>
                </div>
              }
              <div className={style.buttonItem}>
                <button type="submit"
                        disabled={isSubmitting}
                >
                  {isSubmitting ? 'Loading...' : 'Log In'}
                </button>
              </div>
            </Form>
         )
       }}
     </Formik>
   </div>
  )}


type StatePropsType = {
  isAuth: boolean
  captchaUrl: string | null
  errorMessage: string | null
}
type StateDispatchType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
  resetError: () => void
}
type OwnPropsType = {}
const Login: FC<StatePropsType & StateDispatchType> = ({login, isAuth, captchaUrl, errorMessage, resetError}) => {

  useEffect(() => {
    resetError();
  }, [resetError, isAuth])

  const onSubmit = (values: LoginFormValues) => {
    login(
       values.email,
       values.password,
       values.rememberMe,
       values.captcha
    )
  }

  if (isAuth) {
    return <Redirect to={"/profile"}/>
  }
  return <div className={style.login}>
    <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} errorMessage={errorMessage}/>
  </div>
}

const mapStateToProps = (state: AppStateType): StatePropsType => ({
  isAuth: state.authReducer.isAuth,
  captchaUrl: state.authReducer.captchaUrl,
  errorMessage: state.authReducer.errorMessage,
})


export default connect<StatePropsType, StateDispatchType, OwnPropsType, AppStateType>(
  mapStateToProps, {login, resetError: actions.resetError}
  )(Login);