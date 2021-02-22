export const getSearchResult = (res) =>{
    //gotta use lodash later on when i want to use this and react thunk
  return {
      type: 'UPDATE_SEARCH_RESULT',
      payload: res
  }
};
export const activateTag = (tag) =>{
    return{
        type: "ADD_TAG",
        payload: tag 
    }

};

export const deactivateTag = (tag) =>{
    return{
        type: "REMOVE_TAG",
        payload: tag 
    }

};

export const clearTags = (reportId) =>{
    return{
        type: "CLEAR_TAGS",
        payload: reportId
    }

};

