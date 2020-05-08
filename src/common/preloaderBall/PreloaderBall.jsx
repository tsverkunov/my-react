import React from "react";
import style from "./PreloaderBall.module.sass"
import preloader from "../img/preloder_ball_40px.svg";


let PreloaderBull = () => {
    return(
        <div className={style.wrapperPreloader}>
                <img alt="" src={preloader}/>
        </div>
    )
}

export default PreloaderBull;