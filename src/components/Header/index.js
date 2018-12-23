import React, { Component } from "react"
import { Row, Col } from "antd";
import "./index.less"
import Utils from "../../utils/utils"
import Axios from "../../axios"
export default class Header extends Component{

    componentWillMount(){
        
        this.setState({
            userName:"admin"
        })

        setInterval(() => {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
        this.getWeatherApiData()
    
    }

    getWeatherApiData(){
        let cityCode = "101030100"
        Axios.jsonp({
            url:"http://t.weather.sojson.com/api/weather/city/" + cityCode
        }).then( (res)=>{
            if (res.status === "success"){

            }
        })
    }
    render(){
        return (
            <div >
                <Row className="header">
                    <Col span="10" className="title">首页</Col>

                    <Col span="9" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="detail">晴转多云</span>
                    </Col>
                    <Col span="4" >
                    <span className="user">欢迎,{this.state.userName} </span>
                    </Col>
                    <Col span="1">
                    <a href="https://www.baidu.com/">退出</a>
                    </Col>
                </Row>
                <div className="border"></div>
            </div>
        )
    }
}