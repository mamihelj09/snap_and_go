const initialState = {
    loggedIn: false,
    shouldRedirect: false,
    user: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                loggedIn: true,
                shouldRedirect: false,
                user: action.payload
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                loggedIn: false,
                shouldRedirect: true,
            }
    }
    return state
}