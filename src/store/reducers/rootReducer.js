import { 
    LOGIN_POST_SUCCESS, 
    REGISTER_POST_SUCCESS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    ADD_REPO_SUCCESS,
    ADD_REPO_FAILURE,
    GET_TASKS_SUCCESS,
    GET_TASKS_REQUEST,
    GET_TASKS_FAILURE,
    ADD_TASK_SUCCESS,
    FETCH_SEARCH_CONTAINER,
    ADD_FILES_SUCCESS
} from '../action/actionTypes'

const defaultValue = {
    register: {},
    login: {},
    repos: [],
    error: null,
    addTask: {},
    container: [],
    addFiles: {}
}

export default function rootReducer(state = defaultValue, action) {
    if (action.type === REGISTER_POST_SUCCESS) {
        return {
            ...state,
            register: action.payload
        }
    } else if (action.type === LOGIN_POST_SUCCESS) {
        return {
            ...state,
            login: action.payload
        }
    } else if (action.type === FETCH_REPOS_SUCCESS) {
        return {
            ...state,
            repos: action.payload,
            error: null,
        }
    } else if (action.type === FETCH_REPOS_FAILURE) {
        return {
            ...state,
            error: null,
        }
    } else if (action.type === ADD_REPO_SUCCESS) {
        return {
            ...state,
            repos: [...state.repos, action.payload],
            error: null,
        }
    } else if (action.type === ADD_REPO_FAILURE) {
        return {
            ...state,
            error: action.payload,
        };
    } else if (action.type === GET_TASKS_REQUEST) {
        return {
            ...state,
            loading: true,
            error: null
        };
    } else if (action.type === GET_TASKS_SUCCESS) {
        return {
            ...state,
            tasks: action.payload,
            loading: false
        };
    } else if (action.type === GET_TASKS_FAILURE) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    } else if (action.type === ADD_TASK_SUCCESS) {
        return {
            ...state,
            addTask: action.payload
        }
    } else if (action.type === FETCH_SEARCH_CONTAINER) {
        return {
            ...state,
            container: action.payload
        }
    } else if (action.type === ADD_FILES_SUCCESS) {
        return {
            ...state,
            addFiles: action.payload
        }
    }
    
    return state
}