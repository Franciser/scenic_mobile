import React from "react";
import "./IntroduceContent.less"
import IntroduceContentComp from "../../components/Introduce/IntroduceContentComp"
class IntroduceContent extends React.Component{
    hiddenMask=()=>{
        this.props.hiddenMask();
        //隐藏详情块时让容器回到顶部
        document.querySelector('.introduce_content_wrap').scrollTop = 0;
    }
    render(){
        // console.log(this.props.showMask)
        return (
            <div className="introduce_content">
                <div className="introduce_close_mask" onClick={this.hiddenMask}>
                    <i className="iconfont icon-close"></i>
                </div>
                <IntroduceContentComp scenicDetail={this.props.scenicDetail}/>
            </div>
        )
    }
}
export default IntroduceContent