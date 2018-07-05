import React from "react";
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import HomeListComp from "../../components/Home/HomeListComp"
import "./HomeList.less"
import * as needInit_action from "../../actions/needInit_action"
import * as getScenicPrev_action from "../../actions/getScenicPrev_action"
import * as types from "../../constants/actionTypes"
import * as searchName_action from "../../actions/searchName_action"
import * as toPage_action from "../../actions/toPage_action"
import * as isLoading_action from "../../actions/isLoading_action"
import * as needSearch_action from "../../actions/needSearch_action"
import * as needGetPrev_action from "../../actions/needGetPrev_action"
class HomeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showMask:true,
            scenicDetail:[],
        }
    }
    render(){
        // console.log(this.props.isLoading)
        return (
            <div className="home_list_wrap">
                <h2 className="search_result">
                    {this.props.title}的搜索结果
                </h2>
                {
                    this.props.isLoading?
                    <img src="./img/loading.gif" alt="正在加载" className="loading_gif" />
                    :
                    <HomeListComp scenicArr={this.props.scenicArr} getMoreScenic={this.props.getMoreScenic} showMask={this.props.showMask} setScenicDetail={this.props.setScenicDetail}/>
                }
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        needInitReducer: state.needInit_reducer,
        getScenicPrevReducer: state.getScenicPrev_reducer,
        searchNameReducer: state.searchName_reducer,
        toPageReducer: state.toPage_reducer,
        isLoadingReducer: state.isLoading_reducer,
        needSearchReducer: state.needSearch_reducer,
        needGetPrevReducer: state.needGetPrev_reducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        needInitAction: bindActionCreators(needInit_action, dispatch),
        getScenicPrevAction: bindActionCreators(getScenicPrev_action, dispatch),
        searchNameAction: bindActionCreators(searchName_action, dispatch),
        toPageAction: bindActionCreators(toPage_action, dispatch),
        isLoadingAction: bindActionCreators(isLoading_action, dispatch),
        needSearchAction: bindActionCreators(needSearch_action, dispatch),
        needGetPrevAction: bindActionCreators(needGetPrev_action, dispatch),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeList)