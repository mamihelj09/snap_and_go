export const login = (mail, pass) => {
    return (dispatch) => {
        fetch("/authentication", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mail: mail, pass: pass })
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    localStorage.setItem("token", data.key);
                    localStorage.setItem("id", data.id)
                    dispatch({ type: "LOGGED_IN", payload: data })
                })
            } else {
                dispatch({ type: "LOGIN_FAILED" })
            }
        })
    }
}

export const fetchUserInfoToken = (token) => {
    return (dispatch) => {
        console.log("aaa")
        fetch("/authentication/token", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    dispatch({ type: "LOGGED_IN", payload: data })
                })
            } else {
                dispatch({ type: "LOGIN_FAILED" })
            }
        })
    }
}

export const fetchUserEmailSignup = (newUser) => {
    return (dispatch) => {
        fetch("/authentication/signup", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newUser: newUser })
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    localStorage.setItem("token", data.key);
                    localStorage.setItem("id", data.id)
                    dispatch({ type: "LOGGED_IN", payload: data })
                })
            } else {
                dispatch({ type: "LOGIN_FAILED" })
            }
        })
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}