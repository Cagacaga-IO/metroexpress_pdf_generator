import React from "react";
import cs from 'classnames';
import style from './button.scss'


const Button = ({type, cb, text, isActive, id, del, disabled}) => {
    const isRound = type === "round";
    return (
        <button disabled={disabled} className={cs({
            [style.plusbutton] : isRound,
            [style.plusbuttonRed]: del,
            [style.getPdfButtondisabled]: !isRound,
            [style.getPdfButtonenable] : isActive
        })} onClick={() => cb()}>
            <span className={style.spans}>{isRound ? <ion-icon name={!del ? "add" : "close"}></ion-icon> : text}</span>
        </button>
    )
}

export default Button