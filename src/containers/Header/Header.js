import React from "react";
import "./Header.less";
import HeaderComp from "../../components/Header/HeaderComp"
class Header extends React.Component{
    render(){
        return (
            <div className="header_wrap">
                <HeaderComp searchScenic={this.props.searchScenic} history={this.props.history} where={this.props.where}/>
            </div>
        )
    }
}
export default Header