import * as types from "../constants/actionTypes"

const initialState = { nextPage:false }
let nextPage_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.ISNEXTPAGE:
            return { nextPage:true}
        case types.NONEXTPAGE:
            return { nextPage:false}
        default:
            return state
    }
}

export default nextPage_reducer;