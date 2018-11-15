import { 
    SUCCESS_GET_NEWS_SOURCE,
    FAIL_GET_NEWS_SOURCE,
    LOADING_GET_NEWS_SOURCE
 } from '../actions/type';

const INITAL_STATE = {
    data: null,
    error: '',
    loading: false
}

export default (state = INITAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case SUCCESS_GET_NEWS_SOURCE: 
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FAIL_GET_NEWS_SOURCE:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case LOADING_GET_NEWS_SOURCE:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}