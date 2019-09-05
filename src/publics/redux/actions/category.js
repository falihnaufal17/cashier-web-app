import Axios from "axios";
import api from "../../api";

export const getAllCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: Axios.get(`${api}/categories/`)
    }
}