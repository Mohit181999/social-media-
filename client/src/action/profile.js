import axios from "axios";
import {setAlert} from "./alert";

import {PROFILE_SUCCESS,PROFILE_ERROR} from "./type";

export const getCurrentProfile = () => async dispatch => {
    try {
      const res = await axios.get('/API/profile/me');
  
      dispatch({
        type: PROFILE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  