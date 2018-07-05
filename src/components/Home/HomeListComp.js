import React from "react";
import "./HomeListComp.less"
class HomeListComp extends React.Component{

    showMask=(index)=>{
        this.props.setScenicDetail(this.props.scenicArr[index])
        this.props.showMask();
    }
    getNextScenic=(e)=>{
        this.props.getMoreScenic(1)
    }

    getPrevScenic=()=>{
        this.props.getMoreScenic(-1)
    }
    render(){
        // console.log(this.props.scenicArr)
        return (
            
            <div className="home_list_content">
            {
                    this.props.scenicArr.length===0 ?
                        <div className="no_result" >
                            <img src="./img/no_result.png" alt="正在加载" />
                            <p>暂无更多数据</p>
                        </div>
                        
                        :
                            this.props.scenicArr.map((item, index) => {
                                return (
                                    <div key={index} className="home_list_item">
                                        {
                                            item.picList.map((k, i) => {
                                                if (i === 0) {
                                                    return (
                                                        <div className="home_list_item_img" key={i} onClick={()=>{this.showMask(index)}}>
                                                            {/* <Link > */}
                                                                <img src={k.picUrl} alt="" />
                                                            {/* </Link> */}
                                                        </div>

                                                    )
                                                }
                                            })
                                        }
                                        <h2 className="home_list_item_title">{item.name}</h2>
                                        <p className="home_list_item_detail" >{item.address}</p>
                                        {
                                            item.picList.map((m, n) => {
                                                if (n === 0) {
                                                    return (
                                                        <div className="home_list_item_img_samll" key={n} >
                                                            <img src={m.picUrlSmall} alt="" />
                                                        </div>

                                                    )
                                                }
                                            })
                                        }
                                        <span className="home_list_item_city" >{item.cityName}</span>
                                    </div>
                                )
                            })
            }
               
                <div className="prev_page" onClick={this.getPrevScenic}>
                    <a href="javascript:;">
                        <i className="iconfont icon-arrowleft"></i>
                    </a>
                </div>
                <div className="next_page" onClick={this.getNextScenic}>
                    <a href="javascript:;">
                        <i className="iconfont icon-arrowright"></i>
                    </a>
                </div>

               
            </div>
        )
    }
}
export default HomeListComp
