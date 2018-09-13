import { combineReducers } from 'redux';
//import filterReducer from './FilterReducer';
//import dataTableReducer from './DatableReducer';
import waitingListPageReducer from './waitingListPageReducer';
import globalReducer from './GlobalReducer';
import requestPageReducer from './requestPageReducer';

export default combineReducers({
    waitingListPage: waitingListPageReducer,
    globalFlag : globalReducer,
    requestPage : requestPageReducer
    //filters: filterReducer,
    // dataTableReducer: dataTableReducer
})
