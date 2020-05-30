import React from "react";
import style from "./Login.module.sass";
import {validate, validate835, validateEmail, validateEmail235,} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {Input} from "../../common/FormsControls/FormsControlsFormik";


const LoginForm = (props) => {
    return (
        <Formik initialValues={{ email: '', password: '', rememberMe: false }} onSubmit={props.onSubmit}>
            {/*{({errors, touched, meta}) => (*/}
                <Form >
                    <div>
                        <Field type="email" placeholder='email' label="email" name={"email"}
                               component={Input} validate={validateEmail235}/>
                        {/*{errors.email && touched.email ? (*/}
                        {/*    <div>{errors.email}</div>*/}
                        {/*             ) : null}*/}
                    </div>
                    <div>
                        <Field type="password" placeholder='password' label="password" name={"password"}
                               component={Input} validate={validate835}/>
                    </div>
                    <div className={style.checkboxItem}>
                        <Field type="checkbox" name={"rememberMe"} component={"input"}/>Remember Me
                    </div>
                    {/*{*/}
                    {/*    meta.errors && <div className={style.formCommonError}>*/}
                    {/*        {meta.errors}*/}
                    {/*    </div>*/}
                    {/*}*/}
                    <div className={style.buttonItem}>
                        <button type="submit" >{props.isSubmitting ? 'Loading...' :  'Log In'}</button>
                    </div>
                </Form>
        </Formik>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        // alert(JSON.stringify(values, null, 2));
        props.login(formData.email, formData.password, formData.rememberMe)
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