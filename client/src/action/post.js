import axios from "axios";
import { GET_POSTS, POSTS_ERR, UPDATE_LIKES, DELETE_POSTS ,ADD_POST, GET_POST,ADD_COMMENT,DELETE_COMMENT} from "./type";
import {setAlert} from "./alert";

export const getAllPosts = ()=>async dispatch=>{
    try {
        const res = await axios.get('/API/post');
        dispatch({
            type:GET_POSTS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}

export const addlikes= id=>async dispatch=>{
    try {
        const res = await axios.put(`/API/post/like/${id}`);
        dispatch({
            type:UPDATE_LIKES,
            payload:{id, likes:res.data}
        })
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}

export const dellikes= id=>async dispatch=>{
    try {
        const res = await axios.put(`/API/post/unlike/${id}`);
        dispatch({
            type:UPDATE_LIKES,
            payload:{id, likes:res.data}
        })
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}
export const delpost = id => async dispatch =>{
    try {
        await axios.delete(`/API/post/${id}`);
        dispatch({
            type:DELETE_POSTS,
            payload:id
        })
        dispatch(setAlert('Post deleted','success'));
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}

export const addpost = formdata => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
       const res= await axios.post(`/API/post`,formdata,config);
        dispatch({
            type:ADD_POST,
            payload:res.data
        })
        dispatch(setAlert('Post created','success'));
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}

export const getIndipost = id =>async dispatch=>{
    try {

        const res = await axios.get(`/API/post/${id}`);

        dispatch({
            type:GET_POST,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}

export const addcomment = (postid,formdata) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
       const res= await axios.post(`/API/post/comment/${postid}`,formdata,config);
        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        })
        dispatch(setAlert('Comment added','success'));
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}

export const delcomment = (postid,commentid) => async dispatch =>{
    try {
        await axios.delete(`/API/post/${postid}/${commentid}`);
        dispatch({
            type:DELETE_COMMENT,
            payload:commentid
        })
        dispatch(setAlert('Comment deleted','success'));
    } catch (err) {
        dispatch({
            type:POSTS_ERR,
        });
    }
}

