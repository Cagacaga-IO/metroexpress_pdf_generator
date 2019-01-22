import React from "react"
import style from "./style.scss"


const footer = () => (
  <div className="row justify-content-sm-center">
    <div className="col-md-12"
         style={{backgroundColor: "#1A1A1A", minHeight: 40}}>
      <div className={style.linkcontainer}>
        <span className={style.metro}> Metro Express </span>
        <span className={style.links}>Terms & Conditions</span>
        <span className={style.links}> Privacy </span>
        <span className={style.links}>Careers</span>
      </div>
    </div>
  </div>
)

export default footer