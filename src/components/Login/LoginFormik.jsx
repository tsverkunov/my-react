import React, {useEffect} from "react";
import style from "./Login.module.sass";
import {connect} from "react-redux";
import {login, resetError} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {required} from "../../utilities/validators/validators";
import {CustomCheckbox, CustomInput} from "../../common/FormsControls/FormsControls";


const LoginForm = ({captchaUrl, onSubmit, errorMessage, ...props}) => (

   <div className={style.login}>
     <h1>Sign in</h1>
     <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captcha: ''
        }}
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
         const {isSubmitting} = props;
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
)


const Login = ({login, isAuth, captchaUrl, errorMessage, resetError, ...props}) => {

  useEffect(() => {
    resetError();
  }, [isAuth])

  const onSubmit = (values) => {
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

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  captchaUrl: state.authReducer.captchaUrl,
  errorMessage: state.authReducer.errorMessage,
})


export default connect(mapStateToProps, {login, resetError})(Login);