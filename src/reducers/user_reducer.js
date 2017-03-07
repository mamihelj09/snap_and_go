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
            localStorage.removeItem("token");
            return {
                ...state,
                redirectToHome: true,
                loggedIn: false,
                user: {},
            }
    }
    return state
}