import { Photos } from '../models/Photos';
import { Message } from '../models/Message';
import { SHOW_MESSAGES, SET_POST_RESULT } from '../constants/actionTypes';

const showMessages = (state: any = {}, action: any) => {
  switch(action.type) {
    case SHOW_MESSAGES:
       var data = action.data
       return { ...state, data };
    case SET_POST_RESULT: 
        console.log("WTF?")
        var messageSent : Message = action.data;
        var messages : Message[]  = [...state.data, messageSent]; 
        // data = data.concat(sendedMessage)


        // const sendedMessage: data = {
        // id: getLastId(state) + 1,
        // from: action.data.from,
        // message: action.data.from,
        //  };

        //  let arr = Object.keys(sendedMessage).map((k) => sendedMessage[k])

       return { ...state, data: messages };
    default:
      return state;
    }
}


export default showMessages;