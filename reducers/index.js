import {combineReducers} from "redux"

// RL Traditional to have index.js combine reducers

// RL These specific reducers for counter and user can also be defined in separate files then imported into this index.js that combines them.
const counter = (state = 867, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1
        case "SUBTRACT":
            return state - 1       
        default:
            return state 
    }
}

const user = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return {...state, email: action.payload}
        case "UPDATE_PASSWORD":
            return {...state, password: action.payload}
        default:
            return state
    }
}

// RL Traditional to call your combined reducers something like rootReducer, allReducers, etc.
const rootReducer = combineReducers({
    counter,
    user
})

export default rootReducer