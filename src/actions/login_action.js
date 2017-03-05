export const login = (user, pass) => {
    console.log(user, pass);
    return (dispatch) => {
        fetch("/authentication", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user, pass: pass })
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