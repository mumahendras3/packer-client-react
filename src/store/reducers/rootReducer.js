import { REGISTER_POST_SUCCESS } from '../action/actionTypes'

const defaultValue = {
    register: {},
}

export default function rootReducer(state = defaultValue, action) {
    if (action.type === REGISTER_POST_SUCCESS) {
        return {
            ...state,
            register: action.payload
        }
    }

    return state
}