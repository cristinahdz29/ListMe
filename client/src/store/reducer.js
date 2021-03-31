
// setting initial  global state
const initialState = {
    isAuthenticated: false
}



// reducer: function that takes in a state and action and returns updated state
const reducer = (state = initialState, action) => {

    // set authentication to true if user logged in
    if (action.type === 'ON_AUTH') {
        return {
            ...state, 
            isAuthenticated: true
        }
    }

    // set authentication to false if user has logged out
    if (action.type === 'ON_LOGOUT') {
        return {
            ...state, 
            isAuthenticated:false
        }
    }
    return state
}

export default reducer