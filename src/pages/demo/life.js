import React , { Component } from "react"
import { Row, Col } from "antd"
// import "../../App.css"
export default class Life extends  Component{
    render(){
        return (
            <Row>
                <Col span="3">
                    Left
                </Col>
                <Col span="21">
                    Right
                </Col>
            </Row>
        )
    }
}