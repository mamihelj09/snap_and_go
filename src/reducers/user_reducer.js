const initialState = {
    loggedIn: false,
    redirectToHome: false,
    user: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                loggedIn: false,
                user: {},
            }
        case "LOGOUT":
            return {
                ...state,
                redirectToHome: true,
                loggedIn: false,
                user: {},
            }
        case "REDIRECT_TO_HOME":
            return {
                ...state,
                redirectToHome: true,
            }
        case "UNMOUNT_REDIRECT_TO_HOME":
            return {
                ...state,
                redirectToHome: false,
            }
        default:
            return state
    }
}