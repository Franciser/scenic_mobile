import * as types from "../constants/actionTypes"

const initialState = { needInit:true }
let needInit_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.ISNEEDINIT:
            return { needInit:true}
        case types.NONEEDINIT:
            return { needInit:false}
        default:
            return state
    }
}

export default needInit_reducer;