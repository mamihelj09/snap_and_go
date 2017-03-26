const initialState = {
    myProducts: [],
    allProducts: [],
    redirectToProduct: false,
    redirectToError: false,
    idToRedirect: "",
    oneProduct: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCTS_RECIVED":
            return {
                ...state,
                allProducts: action.payload,
                redirectToError: false,
            }
        case "MY_PRODUCTS_RECIVED":
            return {
                ...state,
                myProducts: action.payload,
                redirectToError: false,
            }
        case "ONE_PRODUCT_RECIVED":
            return {
                ...state,
                oneProduct: action.payload,
                redirectToError: false,
            }
        case "REDIRECT_TO_PRODUCT":
            return {
                ...state,
                idToRedirect: action.payload,
                redirectToProduct: true,
                redirectToError: false,
            }
        case "UNMOUNT_REDIRECT_TO_PRODUCT":
            return {
                ...state,
                idToRedirect: "",
                redirectToProduct: false,
                redirectToError: false,
                oneProduct: {},
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
        case "ITEM_HAS_EXPIRED":
            return {
                ...state,
                idToRedirect: "",
                redirectToError: true,
                oneProduct: {},
            }

        default:
            return state
    }
}