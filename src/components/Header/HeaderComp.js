import React from "react";
import "./HeaderComp.less"
class HeaderComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchName: '',
            isFocus:false,
            where:this.props.where,
        }
    }

    
    searchScenic=(event)=>{
        if(event.keyCode===13){
            this.props.searchScenic(this.state.searchName);
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            searchName:e.target.value
        })
    }
    handleFocus=()=>{
        this.setState({
            
            isFocus:true,
        })
    }
    handleBlur=()=>{
        this.setState({
            isFocus:false
        })
    }
    deleteFn=()=>{
        this.setState({
            searchName:''
        })
    }
    render(){
        // console.log(this.props)
        if (this.state.where === "home") {
            return(
                <header className="header_search">
                    <div className="header_search_wrap">
                        <form action="javascript:;">
                            <input type="search" placeholder="输入地名或景点名搜索" onKeyUp={this.searchScenic} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.searchName} />
                        </form>
                        <div className="search_icon">
                            <i className="iconfont icon-search" ></i>
                        </div>

                        <div className="search_icon" style={{ display: this.state.searchName ? 'block' : 'none' }} onTouchStart={this.deleteFn} onClick={this.deleteFn}>
                            <i className="iconfont icon-cuo"></i>
                        </div>

                    </div>
                </header>
            )
        }
        else if(this.state.where==="introduce"){
            return(
                <div className="introduce_header_wrap">
                    <i className="iconfont icon-back" onClick={this.goBack}></i>
                    <h2>景点详细信息</h2>
                </div>
            )
        }
       
    }
}
export default HeaderComp