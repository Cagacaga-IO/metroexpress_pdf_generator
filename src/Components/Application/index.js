import React from "react"
import style from "./style.scss";
import logo from "../../../assets/logo.png";


const ApplicationSucess = () => (
  <div className={style.main}>
    <div className={style.logoMain}>
      <img src={logo} className={style.logo}/>
      <div className={style.maintext}>
        <span className={style.logodesc}>METRO EXPRESS</span>
        <span className={style.promotion}>24 hr. Minicab and Courier Service</span>
      </div>
    </div>
    <div className={style.contentMain}>
      <span className={style.thank}>Thank you for your application!</span>
      <span className={style.info}>Next step is please download the pdf file sign it and send to info@metroexpress.cab</span>
    </div>
  </div>
)

export default ApplicationSucess