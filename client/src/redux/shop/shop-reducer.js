import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload };
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
