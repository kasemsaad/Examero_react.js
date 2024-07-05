const initialState = {
    email: '',
    token: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_TOKEN':
        return { ...state, token: action.payload };
      default:
        return state;
    }
  };
  
  export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
  });
  
  export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
  });
  
  export default userReducer;
  