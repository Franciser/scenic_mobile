import React from "react";
import "./Introduce.less"
import IntroduceContent from "./IntroduceContent"
import Header from "../Header/Header"
class Introduce extends React.Component{
    
    render(){
        return (
            
            <div className={this.props.showMask ? "introduce_wrap showMask":"introduce_wrap"}>

                {/* <Header history={this.props.history} where="introduce"/> */}

                <IntroduceContent scenicDetail={this.props.scenicDetail} showMask={this.props.showMask} hiddenMask={this.props.hiddenMask}/>
            </div>
        )
    }
}
export default Introduce