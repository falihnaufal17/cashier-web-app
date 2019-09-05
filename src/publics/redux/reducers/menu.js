const initialState = {
    menuList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MENU_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'GET_MENU_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_MENU_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                menuList: action.payload.data.result
            }
        case 'ADD_MENU_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'ADD_MENU_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'ADD_MENU_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                menuList: action.payload.data.result
            }
        default:
            return state
    }
}

export default menu