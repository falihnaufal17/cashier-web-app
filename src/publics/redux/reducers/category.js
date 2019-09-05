const initialState = {
    catList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'GET_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                catList: action.payload.data.result
            }
        default:
            return state
    }
}

export default category