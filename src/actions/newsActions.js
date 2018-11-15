import {
    SUCCESS_GET_NEWS_SOURCE,
    FAIL_GET_NEWS_SOURCE,
    LOADING_GET_NEWS_SOURCE,
    SUCCESS_GET_NEWS_LIST,
    FAIL_GET_NEWS_LIST,
    LOADING_GET_NEWS_LIST,
} from './type';

let key = '9de2b03316ff4873a84a5ad49030edbc';
let sourcelink = 'https://newsapi.org/v2/sources?';

export const LoadNewsSource = () => {
    return(dispatch) => {
        dispatch({
            type: LOADING_GET_NEWS_SOURCE
        });
        fetch(sourcelink+'language=en&apiKey='+key)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.status == 'ok'){
                //success get data
                dispatch({
                    type: SUCCESS_GET_NEWS_SOURCE,
                    payload: data.sources
                })
            }else{
                //fail get data
                dispatch({
                    type: FAIL_GET_NEWS_SOURCE,
                    payload: data.messages
                })
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }
}

export const LoadNewsFromId = (id) => {
    return(dispatch) => {
        dispatch({
            type: LOADING_GET_NEWS_LIST
        });
        fetch('https://newsapi.org/v2/top-headlines?sources='+id+'&apiKey=9de2b03316ff4873a84a5ad49030edbc')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.status == 'ok'){
                //success get data
                dispatch({
                    type: SUCCESS_GET_NEWS_LIST,
                    payload: data.articles
                })
            }else{
                //fail get data
                dispatch({
                    type: FAIL_GET_NEWS_LIST,
                    payload: data.messages
                })
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

}


