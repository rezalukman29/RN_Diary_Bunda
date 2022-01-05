import * as type from '../types/auth';
import { store} from '../store';


export const login = user => store.dispatch(loginRequest(user))
  const loginRequest = user => ({

    type: type.LOGIN_REQUEST,
    payload: true,
    user: user
  })



export const logout = user => store.dispatch(logoutRequest(user))
  const logoutRequest = user => ({

    type: type.SET_LOGOUT,
    payload: true,
    user: user,
  })

  
export const changeTheme = theme => store.dispatch(changeThemeRequest(theme))
  const changeThemeRequest = theme => ({

    type: type.SET_THEME,
    payload: true,
    theme: theme,
  })


