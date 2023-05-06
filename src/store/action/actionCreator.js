import axios from 'axios'
import { REGISTER_POST_SUCCESS } from "./actionTypes";

export function postRegisterSuccess(payload) {
    return {
        type: REGISTER_POST_SUCCESS,
        payload
    }
}

export function postRegister(data = {}) {
    return async function (dispatch) {
        try {
            const response = await axios({
                method: 'post',
                url: 'https://p2-iproject-server-production-c152.up.railway.app/register',
                data: data
            });
            console.log(response, 'Berhasil register');
            const successData = response.data
            dispatch(postRegisterSuccess(successData))
        } catch (error) {
            console.log(error, '<======= Error');
        }
    }
}