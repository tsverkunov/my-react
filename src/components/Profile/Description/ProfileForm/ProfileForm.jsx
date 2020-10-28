// import React from "react";
// import {Field, Form, Formik} from "formik";
// import {CustomInput, CustomTextInput} from "../../../../common/FormsControls/FormsControls";
// import style from "../../MyPosts/AddNewPost/AddNewPost.module.sass";
//
// const ProfileForm = ({onSubmit}) => {
//   const initialValue = {
//     Name: '',
//     AboutMe: '',
//     MySkills: ''
//   }
//   return(
//      <>
//        <Formik
//           initialValues={initialValue}
//           onSubmit={values => {
//             onSubmit(values)
//           }}
//        >
//          {props => (
//             <Form>
//               <div>
//                 <Field
//                    name="fullName"
//                    placeholder="Full Name"
//                    component={CustomInput}
//                 />
//               </div>
//               <button type="submit"
//                       disabled={props.isSubmitting}
//                       className={style.buttonSend}
//               >
//                 {props.isSubmitting ? 'Sending...' : 'Update'}
//               </button>
//             </Form>
//          )}
//        </Formik>
//        </>
//   )
// }
//
// export default ProfileForm













// import React from "react";
// import {Form, Formik, useField} from "formik";
//
//
// const CustomTextInput = ({label, ...props}) => {
//    const [field, meta] = useField(props);
//    return (
//       <>
//          {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
//          <input  {...field} {...props} />
//          {meta.touched && meta.error ? (
//             <div><span >{meta.error}</span></div>
//
//          ) : null}
//       </>
//    )
// }
// const CustomCheckbox = ({children, ...props}) => {
//    const [field, meta] = useField(props, 'checkbox');
//    return (
//       <>
//          <input type="checkbox" {...field} {...props} />
//          {children}
//          {meta.touched && meta.error ? (
//             <div >{meta.error}</div>
//          ) : null}
//       </>
//    )
// }
// const ProfileForm = (props) => {
//    return (
//       <div>
//          <Formik initialValues={{
//             fullName: 'EXAH',
//             aboutMe: 'Coder',
//             lookingForAJobDescription: 'Junior Frontend Developer',
//             lookingForAJob: false,
//          }}
//                  // validationSchema={Yup.object({
//                  //    email: Yup.string()
//                  //       .email('Invalid email address')
//                  //       .required('Required'),
//                  //    password: Yup.string()
//                  //       .required('Required')
//                  //       .min(8, 'Must be at least 8 characters'),
//                  //    // rememberMe: Yup.boolean()
//                  //    //    .oneOf([true], 'You must Checked')
//                  // })
//                  // }
//                  onSubmit={(values, {setSubmitting}) => {
//                        // alert(JSON.stringify(values, null, 2));
//                        props.onSubmit(values);
//                        setSubmitting(false);
//                  }}
//          >
//             {props => (
//                <Form>
//                   <div>
//                      <CustomTextInput placeholder="fullName" name="fullName" type="text"/>
//                   </div>
//                   <div>
//                      <CustomTextInput placeholder="aboutMe" name="aboutMe" type="text"/>
//                   </div>
//                   <div>
//                      <CustomTextInput placeholder="job" name="lookingForAJobDescription" type="text"/>
//                   </div>
//                   <div >
//                      <CustomCheckbox name="lookingForAJob">
//                         looking for work
//                      </CustomCheckbox>
//                   </div>
//                   <div >
//                      <button type="submit"
//                              disabled={props.isSubmitting}
//                      >
//                         {props.isSubmitting ? 'Loading...' : 'Log In'}
//                      </button>
//                   </div>
//                </Form>
//             )}
//          </Formik>
//       </div>
//    );
// }
//
//
// export default ProfileForm;