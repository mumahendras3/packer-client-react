import axios from 'axios'
import {
    LOGIN_POST_SUCCESS,
    REGISTER_POST_SUCCESS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from "./actionTypes";

// const BASE_URL = 'http://3.93.59.137:3000'
const BASE_URL = 'https://p2-iproject-server-production-c152.up.railway.app'

export function postRegisterSuccess(payload) {
    return {
        type: REGISTER_POST_SUCCESS,
        payload
    }
}


export const fetchReposSuccess = (repos) => ({
    type: FETCH_REPOS_SUCCESS,
    payload: repos,
});

export const fetchReposFailure = (error) => ({
    type: FETCH_REPOS_FAILURE,
    payload: error,
});

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
                url: `${BASE_URL}/register`,
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
                url: `${BASE_URL}/login`,
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

export const fetchRepos = () => async (dispatch) => {
    try {
        let axiosOptions = {
            method: 'GET',
            url: `${BASE_URL}/repos`,
            headers: {
                access_token: localStorage.access_token || sessionStorage.access_token,
            },
        };
        const { data } = await axios(axiosOptions);
        dispatch(fetchReposSuccess(data));
    } catch (err) {
        if (err.response) dispatch(fetchReposFailure(err.response.data));
        dispatch(fetchReposFailure(err));
    }
};
