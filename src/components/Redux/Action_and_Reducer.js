// actions.js
export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  });
  
  // reducers.js
  const initialState = {
    searchResults: [],
  };
  
  export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload };
      default:
        return state;
    }
  };
  