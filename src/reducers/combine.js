import { combineReducers } from "redux"
// import loginReducer from "./login_reducer";
// import userNameReducer from "./userName_reducer"
import needInit_reducer from "./needInit_reducer"
import getScenic_reducer from "./getScenic_reducer"
import getScenicPrev_reducer from "./getScenicPrev_reducer"
import searchName_reducer from "./searchName_reducer"
import toPage_reducer from "./toPage_reducer"
import isLoading_reducer from "./isLoading_reducer"
import initScenic_reducer from "./initScenic_reducer"
import needSearch_reducer from "./needSearch_reducer"
import needGetPrev_reducer from "./needGetPrev_reducer"
import nextPage_reducer from "./nextPage_reducer"
import scrollTop_reducer from "./scrollTop_reducer"
export default combineReducers({
    // loginReducer,
    // userNameReducer,
    needInit_reducer,
    getScenic_reducer,
    getScenicPrev_reducer,
    searchName_reducer,
    toPage_reducer,
    isLoading_reducer,
    initScenic_reducer,
    needSearch_reducer,
    needGetPrev_reducer,
    nextPage_reducer,
    scrollTop_reducer,
})