import React from "react";
import style from "./style.scss";


const selectMenu = ({ text, handleChange }) => (
    <div className={style.selectMain}>
        <span className={style.textforSelect}>{text}</span>
        <select className={style.styledSelect} onChange={(e) => handleChange(e.target.value)}>
            <option value="" disabled selected>Select Status</option>
            <option value="Limited Company">Limited Company</option>
            <option value="Sole Trader">Sole Trader</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
        </select>
    </div>
)

export default selectMenu