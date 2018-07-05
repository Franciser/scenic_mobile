import * as types from "../constants/actionTypes"

const initialState = { searchName:'三亚'}
let searchName_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.SEARCHNAME:
            return { searchName:action.data}
        default:
            return state
    }
}

export default searchName_reducer;