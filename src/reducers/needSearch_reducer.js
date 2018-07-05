import * as types from "../constants/actionTypes"

const initialState = { needSearch:false }
let needSearch_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.ISSEARCH:
            return { needSearch:true}
        case types.NOSEARCH:
            return { needSearch:false}
        default:
            return state
    }
}

export default needSearch_reducer;