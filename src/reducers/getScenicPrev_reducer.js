import * as types from "../constants/actionTypes"
const initialState={scenicPrev:[]};
let getScenicPrev_reducer=(state=initialState,action)=>{
    if(action===undefined){return state}
    switch(action.type){
        case types.GETSCENICPREV:
            return{scenicPrev:action.scenicPrev}
        default:
            return state
    }
}

export default getScenicPrev_reducer;