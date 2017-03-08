const initialState = {
    myProducts: [],
    allProducts: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCTS_RECIVED":
            return {
                ...state,
                allProducts: action.payload,
            }
        case "MY_PRODUCTS_RECIVED":
            return {
                ...state,
                myProducts: action.payload,
            }
    }
    return state
}