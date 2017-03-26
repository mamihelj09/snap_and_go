const initialState = {
    loggedIn: false,
    redirectToHome: false,
    displayErrMsg: false,
    user: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                loggedIn: true,
                redirectToHome: false,
                displayErrMsg: false,
                user: action.payload
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                loggedIn: false,
                displayErrMsg: true,
                user: {},
            }
        case "LOGOUT":
            return {
                ...state,
                redirectToHome: true,
                loggedIn: false,
                displayErrMsg: false,
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