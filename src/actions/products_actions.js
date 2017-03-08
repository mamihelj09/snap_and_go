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