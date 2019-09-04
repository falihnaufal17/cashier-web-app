import Axios from "axios";
import api from "../../api";

export const getAllMenu = () => {
    return {
        type: 'GET_MENU',
        payload: Axios.get(`${api}/menus/`)
    }
}