import * as types from "../constants/actionTypes"

const initialState = { scrollTop:0}
let scrollTop_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.SETSCROLLTOP:
            return { scrollTop:action.scrollTop}
        default:
            return state
    }
}

export default scrollTop_reducer;