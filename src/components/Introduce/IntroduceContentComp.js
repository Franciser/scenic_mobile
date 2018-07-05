import React from "react";
import "./IntroduceContentComp.less"
class IntroduceContentComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scenicDetail: {},
            hasRender:false,
        }

        this.wrap=null;
    }

    componentWillReceiveProps(nextProps){
        if (JSON.stringify(nextProps.scenicDetail)!=="{}"&&nextProps.scenicDetail!==undefined){
            this.setState({
                scenicDetail: nextProps.scenicDetail,
                hasRender: true,
            })
            // console.log(nextProps.scenicDetail)
            // console.log('kk')
        }
    }

    render(){
        // console.log(this.state.scenicDetail)
        // console.log(this.props.scenicDetail)
        // console.log(this.wrap)
        
        return (
                this.state.hasRender?

                <div className="introduce_content_wrap">
                    <div className="introduce_content_name">
                        <h2>{this.state.scenicDetail.name}</h2>
                    </div>
                    <div className="introduce_content_attention">
                        <p>门票信息：{this.state.scenicDetail.attention}</p>
                    </div>

                    <div className="introduce_content_coupon">
                        <h3>优惠信息：{this.state.scenicDetail.coupon}</h3>
                    </div>
                    <div className="introduce_content_opentime">
                        <h3>经营时间：{this.state.scenicDetail.opentime}</h3>
                    </div>
                    <div className="introduce_content_price">
                        <h3>票价：{this.state.scenicDetail.price}</h3>
                    </div>
                    <div className="introduce_content_summary">
                        <p>概括：{this.state.scenicDetail.summary}</p>
                    </div>
                    <div className="introduce_content_address">
                        <h3>位置：{this.state.scenicDetail.address}</h3>
                    </div>

                    {
                        this.state.scenicDetail.picList.map((item, index) => {
                            return (
                                <div className="introduce_content_pic" key={index}>
                                    <img src={item.picUrl} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

                :
                <div></div>
        )
    }
}
export default IntroduceContentComp