import React from "react";
import style from "./FormsControls.module.sass"


export const Input = ({field, form: {touched, errors}, ...props})=> {
    const hasError = touched[field.name] && errors[field.name];
    return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
        <div>
            <input type={props.type} {...field} {...props} />
        </div>

        {hasError && <span >{errors[field.name]}</span>}
    </div>
    )
}