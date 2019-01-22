import React from "react"
import {Col, Row} from "react-bootstrap";
import style from "./style.scss"

const form = ({children}) => (
    <Row className="justify-content-sm-center">
        <Col style={{padding: 0}} className="col-md-4">
            <div className={style.wrapper}>
                {children}
            </div>
        </Col>
    </Row>
);

export default form