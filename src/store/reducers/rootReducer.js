import { 
    LOGIN_POST_SUCCESS, 
    REGISTER_POST_SUCCESS, 
} from '../action/actionTypes'

const defaultValue = {
    register: {},
    login: {},
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
    }

    return state
}