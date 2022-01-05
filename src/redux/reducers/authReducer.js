import * as type from '../types/auth'
const initialStateAuth = {
    user: {},
    error: '',
    isLoading: false,
    isLogin: false,
    isFetching: false,
    theme: 'light',
  };

  function authReducer(state = initialStateAuth, action) {
    switch (action.type) {
                case type.LOGIN_REQUEST:  
                  return { 
                    ...state, 
                    isLoading: true,
                    error: '',
               
                      };
                case type.LOGIN_SUCCESS:
                  return { 
                    ...state,
                    isLoading: false,
                    user: action.payload,
                    isLogin: true,
                    error: '',
                 
                  };
                case type.LOGIN_FAILED:
                  return {
                    ...state,
                    isLoading: false,
                    error: action.error,
              
                  };
                case type.SET_LOGOUT:
                  return {
                    ...state,
                    user: {},
                    isLogin: false
                  }
                  case type.SET_THEME:

                    return {
                      ...state,
                      theme: action.theme
                    }
         
       
        

      default:
        return state;
    }
  }

  export default authReducer;