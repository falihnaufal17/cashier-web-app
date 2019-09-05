import Axios from "axios";
import api from "../../api";

export const getAllMenu = () => {
    return {
        type: 'GET_MENU',
        payload: Axios.get(`${api}/menus/`)
    }
}

export const addMenu = (data) => {
    return {
        type: 'ADD_MENU',
        payload: Axios.post(`${api}/menus/`, data)
    }
}