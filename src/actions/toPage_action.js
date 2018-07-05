export const toPage_action = (action) => {
    return {
        type: action.type,
        data:action.toPage,
    }
}