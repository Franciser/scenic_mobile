import * as types from "../constants/actionTypes"

const initialState = { toPage:1}
let toPage_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.TOPAGE:
            return { toPage:action.data}
        default:
            return state
    }
}

export default toPage_reducer;