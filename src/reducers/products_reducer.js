const initialState = {
    myProducts: [],
    allProducts: [],
    redirectToProduct: false,
    idToRedirect: "",
    oneProduct: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCTS_RECIVED":
            return {
                ...state,
                allProducts: action.payload,
                redirecToErr: false,
            }
        case "MY_PRODUCTS_RECIVED":
            return {
                ...state,
                myProducts: action.payload,
                redirecToErr: false,
            }
        case "ONE_PRODUCT_RECIVED":
            return {
                ...state,
                oneProduct: action.payload,
                redirecToErr: false,
            }
        case "REDIRECT_TO_PRODUCT":
            return {
                ...state,
                idToRedirect: action.payload,
                redirectToProduct: true,
                redirecToErr: false,
            }
        case "UNMOUNT_REDIRECT_TO_PRODUCT":
            return {
                ...state,
                idToRedirect: "",
                redirectToProduct: false,
                oneProduct: {},
                redirecToErr: false,
            }
        case "ADD_BID":
            return {
                ...state,
                oneProduct: {
                    ...state.oneProduct,
                    maxBid: action.payload.bid,
                    maxBidUser: action.payload.userID,
                }
            }
        default:
            return state
    }
    // return state
}