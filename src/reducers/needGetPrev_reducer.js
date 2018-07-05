import * as types from "../constants/actionTypes"

const initialState = { needGetPrev:false }
let needGetPrev_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.ISGETPREV:
            return { needGetPrev:true}
        case types.NOGETPREV:
            return { needGetPrev:false}
        default:
            return state
    }
}

export default needGetPrev_reducer;