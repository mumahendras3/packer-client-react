import axios from "axios";
import {
  LOGIN_POST_SUCCESS,
  REGISTER_POST_SUCCESS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  ADD_REPO_FAILURE,
  ADD_REPO_SUCCESS,
} from "./actionTypes";

// const BASE_URL = 'http://3.93.59.137:3000'
const BASE_URL = "https://p2-iproject-server-production-c152.up.railway.app";

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
    const access_token =
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token");
    const axiosOptions = {
      method: "POST",
      url: `https://p2-iproject-server-production-c152.up.railway.app/repos`,
      data: formData,
      headers: {
        access_token: access_token,
      },
    };
    const { data } = await axios(axiosOptions);
    // dispatch action to update state with the new repository
    console.log(data);
    dispatch(addRepoSuccess(data));
  } catch (err) {
    // dispatch action to update state with error
    dispatch(addRepoFailure(err));
  }
};
