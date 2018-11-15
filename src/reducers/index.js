import { combineReducers } from 'redux';
import newsSource from './newsReducer'
import newsList from './NewsListReducer';

export default combineReducers({
    newsSource: newsSource,
    newsList : newsList

});