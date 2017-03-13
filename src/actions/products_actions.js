const io = require("socket.io-client")
// const socket = io.connect("http://localhost:9000/")
const socket = io.connect("http://192.168.5.175:9000")

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
                dispatch({ type: "REDIRECT_TO_ERROR" })
            }
        })
    }
}

export const addBid = (bid, productID, userID) => {
    socket.emit("makeNewBid", { bid, productID, userID })
    return {
        type: "ADD_BID",
        payload: { bid, userID }
    }

}

export const recivedNewBits = (bid, userID, timeCreated) => {
    var time = new Date()
    // console.log(time.getTime())
    // console.log(timeCreated.getTime())
    var x = time - timeCreated
    console.log(x)
    return {
        type: "ADD_BID",
        payload: { bid, userID }
    }
}