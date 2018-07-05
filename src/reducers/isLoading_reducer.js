import * as types from "../constants/actionTypes"

const initialState = { isLoading:true }
let isLoading_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.ISLOADING:
            return { isLoading:true}
        case types.NOLOADING:
            return { isLoading:false}
        default:
            return state
    }
}

export default isLoading_reducer;