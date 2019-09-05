import Axios from "axios";
import api from "../../api";

export const getAllTransaction = () => {
    return {
        type: 'GET_TRANSACTION',
        payload: Axios.get(`${api}/transactions/`)
    }
}

export const addTransaction = (data) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: Axios.post(`${api}/transactions/`, data)
    }
}