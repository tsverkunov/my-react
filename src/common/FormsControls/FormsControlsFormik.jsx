import React from "react";
import style from "./FormsControls.module.sass"
import {useField} from "formik";
import cn from "classnames";


export const Input = ({field, form: {touched, errors}, ...props}) => {
   const hasError = touched[field.name] && errors[field.name];
   return (
      <div className={ cn( style.formControl ,{ [style.error]: hasError}) }>
         <div>
            <input type={props.type} {...field} {...props} />
         </div>

         {hasError && <span>{errors[field.name]}</span>}
      </div>
   )
}


//for Formik
export const CustomTextInput = ({label, ...props}) => {
   const [feild, meta] = useField(props);
   const hasError = meta.touched && meta.error
   return (
      <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
         {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
         <input className={style.textInput} {...feild} {...props} />
         {hasError && <div>
            <span className={style.error}>
              {meta.error}
            </span>
         </div>}
      </div>
   )
}
// export const CustomCheckbox = ({children, ...props}) => {
//    const [feild, meta] = useField(props, 'checkbox');
//    return (
//       <>
//          <input type="checkbox" {...feild} {...props} />
//          {children}
//          {meta.touched && meta.error ? (
//             <div className={style.error}>
//                {meta.error}
//             </div>
//          ) : null}
//       </>
//    )
// }


// new field to Formik



