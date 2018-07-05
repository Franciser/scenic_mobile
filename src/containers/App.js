import React, { Component } from 'react';
import "./App.less"
import {HashRouter,Route,Switch} from "react-router-dom";
import Home from "./Home/Home"
import Introduce from "./introduce/Introduce"
class App extends Component {
    

  render() {
    return (
      <div className="wrap">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/introduce" component={Introduce} /> */}
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;

function rem(){
  var styleNode = document.createElement('style');
  var w = document.documentElement.clientWidth / 16;
  styleNode.innerHTML = "html{font-size:" + w + "px!important}";
  document.head.appendChild(styleNode)
}

window.addEventListener('resize',function(){
  rem();
})

rem();



