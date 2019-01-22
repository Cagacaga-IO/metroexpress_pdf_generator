import React from "react"
import Input from "../../Components/Input"
import style from "./style.scss";


const inputwithText = ({placeholder, handler, text, text2, width, id, height, ...rest}) => (
  <div className={style.textInputMain}>
    <span className={style.textforinput}>{text}</span>
    <span className={style.textforinput}>{text2}</span>
    <Input
      placeholder={placeholder}
      handler={handler}
      width={width}
      height={height}
      id={id}
      {...rest}
    />
  </div>

)

export default inputwithText