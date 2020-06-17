import React from "react";
import style from "./Login.module.sass";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {email, maxLength35, minLength2, minLength4, required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


const LoginForm = ({captchaUrl, handleSubmit, error, ...props}) => {
   return (
      <form onSubmit={handleSubmit}>
         <div>
            <Field type="email" placeholder='email' label="email" name={"email"}
                   component={Input} validate={[required, maxLength35, minLength2, email]}/>
         </div>
         <div>
            <Field type="password" placeholder='password' label="password" name={"password"}
                   component={Input} validate={[required, maxLength35, minLength4]}/>
         </div>
         <div className={style.checkboxItem}>
            <Field type="checkbox" name={"rememberMe"} component={"input"}/>Remember Me
         </div>
         {
            error && <div className={style.formCommonError}>
                   <span>
                      {error}
                   </span>
            </div>
         }
         {captchaUrl && <img src={captchaUrl} alt=""/>}
         {
            captchaUrl && <Field type="text"
                                 placeholder='Captcha'
                                 name="captcha"
                                 component={Input}
                                 validate={[required]}/>
         }
         <div className={style.buttonItem}>
            <button type="submit" disabled={props.submitting}>
               {props.submitting ? 'Loading...' : 'Log In'}
            </button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
   const addLogin = (values) => {
      props.login(values.email, values.password, values.rememberMe, values.captcha);
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"}/>
   }
   return <div className={style.login}>
      <LoginReduxForm onSubmit={addLogin} captchaUrl={props.captchaUrl}/>
   </div>
}

const mapStateToProps = (state) => ({
   captchaUrl: state.authReducer.captchaUrl,
   isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login})(Login);