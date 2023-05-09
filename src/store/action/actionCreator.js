import axios from "axios";
import {
    LOGIN_POST_SUCCESS,
    REGISTER_POST_SUCCESS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    ADD_REPO_FAILURE,
    ADD_REPO_SUCCESS,
    ADD_TASK_SUCCESS,
    FETCH_SEARCH_CONTAINER
} from "./actionTypes";

const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://p2-iproject-server-production-c152.up.railway.app'

export function postRegisterSuccess(payload) {
    return {
        type: REGISTER_POST_SUCCESS,
        payload,
    };
}

export function postLoginSuccess(payload) {
    return {
        type: LOGIN_POST_SUCCESS,
        payload,
    };
}

export const fetchReposSuccess = (repos) => ({
    type: FETCH_REPOS_SUCCESS,
    payload: repos,
});

export const fetchReposFailure = (error) => ({
    type: FETCH_REPOS_FAILURE,
    payload: error,
});

export const addRepoFailure = (error) => ({
    type: ADD_REPO_FAILURE,
    payload: error,
});

export const addRepoSuccess = (repository) => ({
    type: ADD_REPO_SUCCESS,
    payload: repository,
});

export function addTaskSuccess(payload) {
    return {
        type: ADD_TASK_SUCCESS,
        payload
    }
}

export function fetchSearchContainerSuccess(payload) {
    return {
        type: FETCH_SEARCH_CONTAINER,
        payload
    }
}

export function postRegister(data = {}) {
    return async function (dispatch) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/register`,
                data: data,
                timeout: 2000,
            });
            console.log(response, "Berhasil register");
            const successData = response.data;
            dispatch(postRegisterSuccess(successData));
        } catch (error) {
            console.log(error, "<======= Error");
            throw error;
        }
    };
}

export function postLogin(data = {}) {
    return async function (dispatch) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/login`,
                data: data,
                timeout: 5000,
            });
            console.log(response, "Berhasil login");
            const access_token = response.data.access_token;
            const username = response.data.name;
            if (access_token) {
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("username", username);
            }
            const successData = response.data;
            dispatch(postLoginSuccess(successData));
        } catch (error) {
            console.log(error, "<======= Error");
        }
    };
}

export const fetchRepos = () => async (dispatch) => {
    try {
        let axiosOptions = {
            method: "GET",
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

export const addRepoRequest = (formData) => async (dispatch) => {
    try {
        const access_token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
        const axiosOptions = {
            method: 'POST',
            url: `${BASE_URL}/repos`,
            data: formData,
            headers: {
                access_token: access_token,
            },
        };
        const { data } = await axios(axiosOptions);
        // dispatch action to update state with the new repository
        console.log(data)
        dispatch(addRepoSuccess(data));
    } catch (err) {
        // dispatch action to update state with error
        dispatch(addRepoFailure(err));
    }
};

export function addTaskRequest(data = {}) {
    return async function (dispatch) {
        console.log(data, "datanya<<<")
        try {
            const response = await axios({
                method: 'post',
                url: `${BASE_URL}/tasks`,
                data: data,
                headers: {
                    access_token: localStorage.access_token || sessionStorage.access_token,
                },
            });
            const successData = response.data
            console.log(successData, 'berhasil');
            if (!data.runAt) {
                await axios({
                    method: 'post',
                    url: `${BASE_URL}/tasks/${successData.id}`,
                    headers: {
                        access_token: localStorage.access_token || sessionStorage.access_token,
                    },
                });
            }
            dispatch(postRegisterSuccess(successData))
        } catch (error) {
            console.log(error, '<======= Error');
        }
    }
}

export function fetchSearchContainer(filter) {
    return async function (dispatch) {
        try {
            console.log(filter, 'ini filter');
            const response = await axios({
                method: 'POST',
                url: `${BASE_URL}/tasks/search`,
                headers: {
                    access_token: localStorage.access_token || sessionStorage.access_token,
                },
                data:
                {
                    filter
                }
            });
            const successData = response.data
            console.log(successData, 'berhasil');
            dispatch(fetchSearchContainerSuccess(successData))
            return successData
        } catch (error) {
            console.log(error, '<======= Error');
        }
    }
}
