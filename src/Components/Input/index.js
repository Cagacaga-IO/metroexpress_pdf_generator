import React from "react"
import style from './input.scss'

const StyledInput = ({placeholder, width = "100%", height = 50, id, handler, ...rest}) => {
  return (
    <input
      placeholder={placeholder}
      style={{maxWidth: width, height: height, width: "100%"}}
      className={style.styledInput}
      onChange={(e) => handler(id, e.target.value)}
      {...rest}
    />
  )
}

export default StyledInput