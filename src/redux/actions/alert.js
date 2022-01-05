import * as alertType from '../types/alert';
import { store} from '../store';

export const hideAlert = () => store.dispatch(hideAlertRequest())
  const hideAlertRequest = () => ({

    type: alertType.HIDE_ALERT,
    payload: false,

  })

  export const showAlert = (item,status) => store.dispatch(showAlertRequest(item,status))
  const showAlertRequest = (item,status) => ({
    type: alertType.SHOW_ALERT,
    payload: true,
    item:item,
    status: status
  })