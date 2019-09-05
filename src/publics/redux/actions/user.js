import axios from 'axios'
import api from '../../api'

export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${api}/users/login`, data)
    }
}