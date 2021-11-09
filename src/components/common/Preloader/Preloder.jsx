import preloader from "../../../assets/img/preloader.gif";
import React from "react";

const Preloader = (props) => {
  return (
    <div className="preloaderBlock">
      <img src={preloader} alt=""/>
    </div>
  )
}

export default Preloader