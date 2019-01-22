import React from "react"
import Form from "../../Containers/form"
import style from "./style.scss"


const FormWithTitle = ({title}) => (
    <React.Fragment>
        <span className={style.FormWithTitle}>{title}</span>
        <Form/>
    </React.Fragment>
)

export default FormWithTitle