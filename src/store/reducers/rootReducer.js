import { FETCH_REPOS_FAILURE, REGISTER_POST_SUCCESS } from '../action/actionTypes'
import { FETCH_REPOS_SUCCESS } from '../action/actionTypes'

const defaultValue = {
    register: {},
    repos: [],
    error: null
}

export default function rootReducer(state = defaultValue, action) {
    if (action.type === REGISTER_POST_SUCCESS) {
        return {
            ...state,
            register: action.payload
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
            error: action.payload,
        }
    }

    return state
}