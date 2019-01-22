import React from "react"
import {Col, Row} from "react-bootstrap";
import logo from '../../../assets/logo.png'
import style from './style.scss'

const header = () => (
    <Row className="justify-content-center">
        <div className={style.headerRow}>
            <Col style={{padding: 0}}>
                <div className={style.main}>
                    <img src={logo} className={style.logo}/>
                    <div className={style.maintext}>
                        <span className={style.logodesc}>METRO EXPRESS</span>
                        <span className={style.promotion}>24 hr. Minicab and Courier Service</span>
                    </div>
                </div>
            </Col>
        </div>
    </Row>
);

export default header