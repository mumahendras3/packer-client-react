import axios from 'axios'
import { LOGIN_POST_SUCCESS, REGISTER_POST_SUCCESS } from "./actionTypes";

export function postRegisterSuccess(payload) {
    return {
        type: REGISTER_POST_SUCCESS,
        payload
    }
}

export function postLoginSuccess(payload) {
    return {
        type: LOGIN_POST_SUCCESS,
        payload
    }
}

export function postRegister(data = {}) {
    return async function (dispatch) {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://3.93.59.137:3000/register',
                data: data,
                timeout: 2000
            });
            console.log(response, 'Berhasil register');
            const successData = response.data
            dispatch(postRegisterSuccess(successData))
        } catch (error) {
            console.log(error, '<======= Error');
        }
    }
}

export function postLogin(data = {}) {
    return async function (dispatch) {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://3.93.59.137:3000/login',
                data: data,
                timeout: 2000
            });
            console.log(response, 'Berhasil login');
            const access_token = await response.data.access_token
            if (access_token) {
                localStorage.setItem('access_token', access_token)
            }
            const successData = response.data
            dispatch(postLoginSuccess(successData))
        } catch (error) {
            console.log(error, '<======= Error');
        }
    }
}