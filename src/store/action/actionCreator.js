import axios from 'axios'
import { REGISTER_POST_SUCCESS } from "./actionTypes";
// fetch repo
import { FETCH_REPOS_SUCCESS } from './actionTypes'
import { FETCH_REPOS_FAILURE } from './actionTypes'

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

export const fetchRepos = () => async (dispatch) => {
    try {
        let axiosOptions = {
            method: 'GET',
            url: 'https://p2-iproject-server-production-c152.up.railway.app/repos',
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
