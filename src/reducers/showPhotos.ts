import { Photos } from '../models/Photos';
import { SHOW_PHOTOS } from '../constants/actionTypes';

const showPhotos = (state: Object = {}, action: any) => {
  switch(action.type) {
    case SHOW_PHOTOS:
       const data = action.data
      return { ...state, data };
    default:
      return state;
    }
}

export default showPhotos;
