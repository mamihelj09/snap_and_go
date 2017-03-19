const io = require("socket.io-client")
// const socket = io.connect("http://localhost:9000/")
const socket = io.connect("http://192.168.5.171:9000")
// const socket = io.connect("http://10.15.19.171:9000")

export const fetchAllProducts = () => {
    return (dispatch) => {
        fetch("/upload/fetchAllProducts", {
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    dispatch({ type: "ALL_PRODUCTS_RECIVED", payload: data })
                })
            } else {
                dispatch({ type: "REDIRECT_TO_ERROR" })

            }
        })
    }
}

export const fetchMyProducts = (id) => {
    return (dispatch) => {
        fetch("/upload/fetchMyProducts", {
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify({ id: id })
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    dispatch({ type: "MY_PRODUCTS_RECIVED", payload: data })
                })
            } else {
                dispatch({ type: "REDIRECT_TO_ERROR" })
            }
        })
    }
}

export const redirectToProduct = (id) => {
    return {
        type: "REDIRECT_TO_PRODUCT",
        payload: id
    }
}

export const unmountRedirectToProduct = () => {
    return {
        type: "UNMOUNT_REDIRECT_TO_PRODUCT"
    }
}

export const fetchOneProductToDisplay = (id) => {
    return (dispatch) => {
        fetch("/upload/fetchOneProduct", {
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify({ id: id })
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    dispatch({ type: "ONE_PRODUCT_RECIVED", payload: data })
                })
            } else {
                console.log("nece")
                dispatch({ type: "REDIRECT_TO_ERROR" })
            }
        })
    }
}

export const addBid = (bid, productID, userID, maxBid) => {
    socket.emit("makeNewBid", { bid, productID, userID })
    if (bid > maxBid) {
        return {
            type: "ADD_BID",
            payload: { bid, userID }
        }
    }
    return {
        type: "..."
    }
}

export const recivedNewBits = (bid, userID, timeCreated) => {
    var time = new Date(timeCreated)
    time.setMinutes(time.getMinutes() + 10)
    return {
        type: "ADD_BID",
        payload: { bid, userID }
    }
}

export const itemHasExpired = () => {
    return {
        type: "ITEM_HAS_EXPIRED"
    }
}

export const removeMessage = (productID, id, token) => {
    return (dispatch) => {
        fetch("/upload/removeMessage", {
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify({ productID, id })
        }).then(res => {
            if (res.status === 200) {
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
        })
    }
}