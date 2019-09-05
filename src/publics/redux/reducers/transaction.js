const initialState = {
    transactionList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'GET_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                transactionList: action.payload.data.result
            }
        case 'ADD_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'ADD_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'ADD_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                transactionList: action.payload.data.result
            }
        default:
            return state
    }
}

export default transaction