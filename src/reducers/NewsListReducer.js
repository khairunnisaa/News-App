import { 
    SUCCESS_GET_NEWS_LIST,
    FAIL_GET_NEWS_LIST,
    LOADING_GET_NEWS_LIST
 } from '../actions/type';

const INITIAL_STATE = {
    data: '',
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log('action : ', action);
    switch(action.type){
        case LOADING_GET_NEWS_LIST:
            return { ...state, error: '', loading: true};
        case SUCCESS_GET_NEWS_LIST:
            return { ...state, ...INITIAL_STATE, data: action.payload, loading: false};
        case FAIL_GET_NEWS_LIST:
            return { 
                ...state, 
                data: action.payload, 
                error: 'Oooopss Error, mungkin jaringanmu bermasalah :(', 
                loading: false
            };
        default:
            return state;
    }
};

