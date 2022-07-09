import React, { Component } from 'react'

//import file css sẽ được dùng chung cho toàn bộ ứng dụng
import "./StyledComponent.css"

export default class StyledComponent extends Component {

    // Khi có quá nhiều thuộc tính css cần thêm
    styleObj = {
        backgroundColor: "red",
        fontSize:"60px"
    }
    render() {
        return (
            <div className='container' >
                {/* thuộc tinh style sẽ binding kiểu object */}
                {/* Khi có ít thuộc tính */}
                <h1 className='heading1' style={{backgroundColor: "red", fontSize:"60px"}}>StyledComponent</h1>
                <h1 className='heading1' style={this.styleObj}>StyledComponent</h1>
            </div>
        )
    }
}
