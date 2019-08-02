export default counter = (state = 867, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1       
        default:
            return state 
    }
}