import React from "react";
import "./Home.less"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as needInit_action from "../../actions/needInit_action"
import * as getScenic_action from "../../actions/getScenic_action"
import * as getScenicPrev_action from "../../actions/getScenicPrev_action"
import * as searchName_action from "../../actions/searchName_action"
import * as toPage_action from "../../actions/toPage_action"
import * as isLoading_action from "../../actions/isLoading_action"
import * as initScenic_action from "../../actions/initScenic_action"
import * as needSearch_action from "../../actions/needSearch_action"
import * as needGetPrev_action from "../../actions/needGetPrev_action"
import * as nextPage_action from "../../actions/nextPage_action"
import * as scrollTop_action from "../../actions/scrollTop_action"
import Header from "../Header/Header"
import HomeList from "./HomeList"
import Introduce from "../introduce/Introduce"
import * as types from "../../constants/actionTypes"
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            scenicArr:[],
            isLoading: true,
            title:"香格里拉",
            nowPage:1,
            needInit:true,
            needSearch:false,
            scenicDetail:{},
            showMask:false,
        }
    }

    showMask=()=>{
        this.setState({
            showMask:true,
        })
    }

    hiddenMask=()=>{
        this.setState({
            showMask: false,
        })
    }

    setScenicDetail=(scenicDetail)=>{
        this.setState({
            scenicDetail:scenicDetail,
        })
    }

    getScenic=(name="香格里拉",page=1)=>{
        var data = new FormData();
        data.append("showapi_appid", 68419);
        data.append("showapi_sign", "832c437e768549a49174d11d81951463");
        data.append("keyword", name);
        data.append("page", page);
        fetch('https://route.showapi.com/268-1', {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            body: data
        })
            .then(res => res.json())
            .then(data => {
                    
                    this.setState({
                        scenicArr: data.showapi_res_body.pagebean.contentlist,
                        // scenicDetail: data.showapi_res_body.pagebean.contentlist[0],
                        isLoading:false,
                        title:name,
                        nowPage:page,
                    })
            })
            .catch(err => console.log(err))
    }

    searchScenic=(name)=>{
        this.getScenic(name)
        this.setState({
            isLoading:true,
        })
    }

    getMoreScenic=(key)=>{
        if(this.state.nowPage+key>0){
            this.getScenic(this.state.title,this.state.nowPage+key)
            this.setState({
                isLoading: true,
            })
        }
    }

    componentDidMount(){
        if(this.state.needInit){
            this.getScenic('香格里拉')
            this.setState({
                needInit:false,
            })
        }
        
    }
    
    

    render(){
    //    console.log(this.state.scenicArr[0])
    //    console.log(this.state.showMask)
        
        return (
            <div className="home_wrap">
                <Header searchScenic={this.searchScenic} where="home" needGetPrev={this.needGetPrev} />
                <HomeList scenicArr={this.state.scenicArr} isLoading={this.state.isLoading} title={this.state.title} getMoreScenic={this.getMoreScenic} showMask={this.showMask} setScenicDetail={this.setScenicDetail}/>
                <Introduce scenicDetail={this.state.scenicDetail} showMask={this.state.showMask} hiddenMask={this.hiddenMask}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        needInitReducer: state.needInit_reducer,
        getScenicReducer: state.getScenic_reducer,
        getScenicPrevReducer: state.getScenicPrev_reducer,
        searchNameReducer:state.searchName_reducer,
        toPageReducer:state.toPage_reducer,
        isLoadingReducer: state.isLoading_reducer,
        initScenicReducer:state.initScenic_reducer,
        needSearchReducer:state.needSearch_reducer,
        needGetPrevReducer:state.needGetPrev_reducer,
        nextPageReducer:state.nextPage_reducer,
        scrollTopReducer:state.scrollTop_reducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        needInitAction: bindActionCreators(needInit_action, dispatch),
        getScenicAction: bindActionCreators(getScenic_action, dispatch),
        getScenicPrevAction: bindActionCreators(getScenicPrev_action, dispatch),
        searchNameAction: bindActionCreators(searchName_action, dispatch),
        toPageAction: bindActionCreators(toPage_action, dispatch),
        isLoadingAction: bindActionCreators(isLoading_action, dispatch),
        initScenicAction:bindActionCreators(initScenic_action,dispatch),
        needSearchAction: bindActionCreators(needSearch_action,dispatch),
        needGetPrevAction: bindActionCreators(needGetPrev_action,dispatch),
        nextPageAction: bindActionCreators(nextPage_action,dispatch),
        scrollTopAction: bindActionCreators(scrollTop_action,dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

