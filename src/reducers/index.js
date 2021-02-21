import {combineReducers} from 'redux';

import reports from '../utils/api';
const searchResultsReducer = (state=[], action) =>{
       if(action.type === "UPDATE_SEARCH_RESULT"){
          return action.payload;
       }
       return state;
}
const reportsReducer = (state=[...reports], action) =>{
    switch(action.type){
        case "ADD_TAG":
            return (state.map(report => {
                if(report.id.toString() === action.payload.reportId.toString()){
                  report.tags = [...report.tags, action.payload.selectedTagId];
                  return report;
            }else{
                return report;
            }}));
        case "REMOVE_TAG":
            return ( state.map(report => {
                if(report.id.toString() === action.payload.reportId.toString()){
                  report.tags = report.tags.filter(r => r !== action.payload.selectedTagId);
                  return report;
            }else{
                return report;
            }}));
        

        default:
            return state;


    }
    
    
};

export default combineReducers(
    {
        reports : reportsReducer,
        searchResult:searchResultsReducer,

    }
);