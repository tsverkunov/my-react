import React from "react";
import {Form, Formik, useField} from "formik";
import * as Yup from "yup";


const CustomTextInput = ({label, ...props}) => {
   const [feild, meta] = useField(props);
   return (
      <>
         {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
         <input  {...feild} {...props} />
         {meta.touched && meta.error ? (
            <div><span >{meta.error}</span></div>

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
            <div >{meta.error}</div>
         ) : null}
      </>
   )
}
const ProfileForm = (props) => {
   return (
      <div>
         <Formik initialValues={{
            fullName: 'EXAH',
            aboutMe: 'Coder',
            lookingForAJobDescription: 'Junior Frontend Developer',
            lookingForAJob: false,
         }}
                 // validationSchema={Yup.object({
                 //    email: Yup.string()
                 //       .email('Invalid email address')
                 //       .required('Required'),
                 //    password: Yup.string()
                 //       .required('Required')
                 //       .min(8, 'Must be at least 8 characters'),
                 //    // rememberMe: Yup.boolean()
                 //    //    .oneOf([true], 'You must Checked')
                 // })
                 // }
                 onSubmit={(values, {setSubmitting}) => {
                       // alert(JSON.stringify(values, null, 2));
                       props.onSubmit(values);
                       setSubmitting(false);
                 }}
         >
            {props => (
               <Form>
                  <div>
                     <CustomTextInput placeholder="fullName" name="fullName" type="text"/>
                  </div>
                  <div>
                     <CustomTextInput placeholder="aboutMe" name="aboutMe" type="text"/>
                  </div>
                  <div>
                     <CustomTextInput placeholder="job" name="lookingForAJobDescription" type="text"/>
                  </div>
                  <div >
                     <CustomCheckbox name="lookingForAJob">
                        looking for work
                     </CustomCheckbox>
                  </div>
                  <div >
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


export default ProfileForm;