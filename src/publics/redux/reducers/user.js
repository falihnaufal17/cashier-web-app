const initialState = {
    userList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'LOGIN_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'LOGIN_USER_FULFILLED':
            localStorage.setItem('data', JSON.stringify(action.payload.data.result))
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                userList: action.payload.data.result
            }
        default:
            return state
    }
}

export default user