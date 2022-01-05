import * as type from '../types/alert'
const initialStateAlert = {
  notification: false,
  status: '',
  message: {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFghe9NlnM-gPygO1pbXIp3QDflsCer36gLxnfHQWqVXSamYNUshZe6mbW98mFYAw4Hl0&usqp=CAU'
  }


   

  };

  function alertReducer(state = initialStateAlert, action) {
    switch (action.type) {
                case type.SHOW_ALERT:  
                console.log(action.item)
                  return { 
                    ...state, 
                    notification: action.payload,
                    status: action.status,
                    message: action.item

                      };
                case type.HIDE_ALERT:
                  return { 
                    ...state,
                    notification: action.payload,
                    status: '',
                    message: {}
             
                  };
               
        

      default:
        return state;
    }
  }

  export default alertReducer;