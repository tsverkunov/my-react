import React from "react";
import style from "./Preloader.module.sass"
import preloader from "../img/preloader_100px_BGgrey.svg";


let Preloader = () => {
    return(
        <div className={style.wrapperPreloader}>
                <img alt="" src={preloader}/>
        </div>
    )
}

export default Preloader;