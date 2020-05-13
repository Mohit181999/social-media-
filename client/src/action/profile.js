import axios from "axios";
import {setAlert} from"./alert"
import {PROFILE_SUCCESS,PROFILE_ERROR,UPDATE_PROFILE, CLEAR_PROFILE,DELLETE_ACC,GET_PROFILES} from "./type";

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
      });
    }
  };

  export const createProfile=(formdata,history,edit=false)=> async dispatch=>{
    try {
      const config={
        header:{
          'Content-type':'application/json'
        }
      }
      const res=await axios.post('/API/profile',formdata,config);
      dispatch({
        type: PROFILE_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert(edit?'Profile Updated':'Profile _Created'));
      if(!edit)history.push('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
    });
    }
  } 
  
  export const addExp=(formdata,history)=> async dispatch=>{
    try {
      const config={
        header:{
          'Content-type':'application/json'
        }
      }
      const res=await axios.put('/API/profile/experience',formdata,config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
      dispatch(setAlert('EXPERIENCE ADDED','SUCCESS'));
      history.push('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
    });
    }
  } 


  export const addEdu=(formdata,history)=> async dispatch=>{
    try {
      const config={
        header:{
          'Content-type':'application/json'
        }
      }
      const res=await axios.put('/API/profile/education',formdata,config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
      dispatch(setAlert('EDUCATION ADDED','SUCCESS'));
      history.push('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
    });
    }
  } 
  
  export const deleteExp = id =>async dispatch=>{
    try {
      const res=await axios.delete(`/API/profile/experience/${id}`);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data});
        dispatch(setAlert('Experience deleted','SUCCESS'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
    }
  }

  export const deleteEdu = id =>async dispatch=>{
    try {
      const res=await axios.delete(`/API/profile/education/${id}`);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data});
        dispatch(setAlert('Education deleted','SUCCESS'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
    }
  }
  export const deleteAcc= ()=>async dispatch=>{
    if(window.confirm('Are you sure you want to delete account')){
      try {
        await axios.delete('/API/profile');
        dispatch({type:CLEAR_PROFILE});
        dispatch({type:DELLETE_ACC});
      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
        });
      }
    }
  }
  export const getAllProfiles=()=>async dispatch=>{
    dispatch({type:CLEAR_PROFILE});
    try {
      const res=await axios.get('/API/profile');
      dispatch({
        type:GET_PROFILES,
        payload:res.data
      })
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
    }
  }
  export const getProfileByid =id=>async dispatch=>{
    try {
      const res=await axios.get(`/API/profile/user/${id}`);

      dispatch({
        type:PROFILE_SUCCESS,
        payload:res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
    }
  }