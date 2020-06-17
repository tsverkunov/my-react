import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../common/FormsControls/FormsControls";
import React from "react";
import style from "./ProfileForm.module.sass"

const ProfileFormmm = ({profile, ...props}) => {
   return (
      <form onSubmit={props.handleSubmit} className={style.profileForm}>
         <div>
            <p>Name:</p>
            <Field type="text"
                   placeholder="fullName"
                   name="fullName"
                   component={Input}
            />
         </div>
         <div>
            <p>About me:</p>
            <div>
               <Field type="text"
                      placeholder="aboutMe"
                      name="aboutMe"
                      component={"textarea"}
                      rows="4"
                      cols="50"
               />
            </div>
         </div>
         <div>
            <p>My skills:</p>
            <div>
               <Field type="text"
                      placeholder="job"
                      name="lookingForAJobDescription"
                      component={"textarea"}
                      rows="4"
                      cols="50"
               />
            </div>
         </div>
         <div>
            <Field type="checkbox"
                   name="lookingForAJob"
                   component={"input"}
            /><span>looking for a job</span>
         </div>
         <div>
            <p>Contacts:</p>
            {Object.keys(profile.contacts).map(key => {
               return <div className={style.contact} key={key}><span>{key} :</span>
                  <Field type="text"
                         name={"contacts." + key}
                         component={Input}
                  />
               </div>
            })}
         </div>
         <div>
            <button>Save</button>
         </div>
         {
            props.error && <div className={style.formCommonError}>
                   <span>
                      {props.error}
                   </span>
            </div>
         }
      </form>
   )
}

const ProfileReduxForm = reduxForm({form: 'profileForm'})(ProfileFormmm);

export default ProfileReduxForm;