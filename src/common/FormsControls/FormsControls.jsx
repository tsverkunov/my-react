import React from "react";
import style from "./FormsControls.module.sass"
import cn from "classnames";
import {useField} from "formik";


export const Input = ({
                        input,
                        label,
                        type,
                        meta: {touched, error},
                        ...props
                      }) => {
  const hasError = touched && error;
  return (
     <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
       <div>
         <input {...input} {...props} type={type}/>
       </div>
       {/*<label>{label}</label>*/}
       {hasError && <span>{error}</span>}
     </div>
  )
}


// relevant to Formik


export const CustomInput = ({
                              field,
                              form: {touched, errors},
                              ...props
                            }) => (
   <div>
     <input type="text" {...field} {...props}
            className={cn(style.textInput,
               {[style.error]: (errors[field.name] && touched[field.name])}
            )}/>
     {errors[field.name] && touched[field.name] && (
        <div className={style.inputFeedback}>{errors[field.name]}</div>
     )}
   </div>
)

export const CustomCheckbox = ({label, ...props}) => {
  const [field, meta] = useField(props.name);
  return (
     <>
       <input type="checkbox"  {...field} {...props} />
       {/*{children}*/}
       <label htmlFor={props.id}>{label}</label>
       {meta.touched && meta.error
          ? (<div className={style.error}>
            {meta.error}
          </div>)
          : null}
     </>
  )
}

export const CustomTextarea = ({...props}) => {
  const [field, meta] = useField(props);
  return (
     <>
       {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
       <textarea {...field} {...props}  />
       {meta.touched && meta.error ? (
          <div className={style.error}>{meta.error}</div>
       ) : null}
     </>
  )
}


export const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error
  return (
     <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
       {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
       <input className={style.textInput} {...field} {...props} />
       {hasError && <div>
            <span className={style.error}>
              {meta.error}
            </span>
       </div>}
     </div>
  )
}
