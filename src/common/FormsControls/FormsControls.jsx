import React from "react";
import style from "./FormsControls.module.sass"


export const Input = ({input, label, type,
                          meta: {touched, error, warning}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                <input {...input} {...props} type={type} />
            </div>
            {/*<label>{label}</label>*/}
            {hasError && <span>{error}</span>}
        </div>
    )
}