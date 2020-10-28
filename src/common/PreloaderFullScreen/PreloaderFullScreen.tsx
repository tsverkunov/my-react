import React from "react";
import style from "./PreloaderFullScreen.module.sass"
import preloader from "../img/preloader_100px_BGgrey.svg";


let PreloaderFullScreen = () => {
    return(
        <div className={style.wrapperPreloader}>
                <img alt="" src={preloader}/>
        </div>
    )
}

export default PreloaderFullScreen;