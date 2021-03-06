import * as authTypes from "../../actions/User/types";

const initialState = {
    isAuthenticated: null,
    loading: false,
    error: [],
    userInfo: null,
    userOrgs: [],
};

export default function (state = initialState,  action) {
    const { type, payload } = action;
    switch(type){
        case authTypes.SET_LOADING:
            return {
                ...state,
                loading: payload,
            }
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case authTypes.LOAD_USER:
            return {
                ...state,
                userInfo: payload
            }
        case authTypes.LOAD_USER_ORGS:
            return {
                ...state,
                userOrgs: payload
            }

        case authTypes.LOGIN_ERROR:
        case authTypes.LOAD_USER_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                userInfo: null,
            }
        default:
            return state;
    }
}
