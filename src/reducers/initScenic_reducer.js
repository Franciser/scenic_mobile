import * as types from "../constants/actionTypes"

const initialState = { initScenicArr:[] }
let initScenic_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.GETINITSCENIC:
            return { initScenicArr:action.initScenicArr}
        default:
            return state
    }
}

export default initScenic_reducer;