import React from 'react';
import style from "./background.scss"

const Background = (props) => (
    <div className={style.background}>
        {props.children}
    </div>
);

export default Background