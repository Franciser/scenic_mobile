import * as types from "../constants/actionTypes"

const initialState = { scenicArr:[] }
let getScenic_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.GETSCENIC:
            return { scenicArr:action.scenicArr}
        default:
            return state
    }
}

export default getScenic_reducer;