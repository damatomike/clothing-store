export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'EMAIL_SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'EMAIL_SIGN_IN_FAILURE';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
  type: SIGN_OUT_FAILURE,
});

export const signUpStart = (userCredentials) => ({
  type: SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
