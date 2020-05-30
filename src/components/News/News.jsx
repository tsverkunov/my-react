import React from "react";
import s from './News.module.sass';
import Basic from "./Basic";
import YupFormik from "./YapFormik";


const News = (props) => {
    return (
        <div className={s.wrapperContent}>
            <YupFormik/>
        </div>
    )
}

export default News;


