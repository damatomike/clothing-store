const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS';

export const updateCollections = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
