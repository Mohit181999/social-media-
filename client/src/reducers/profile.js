
import {PROFILE_SUCCESS ,PROFILE_ERROR, CLEAR_PROFILE} from "../action/type"
const intialstate = {
    profile:null,
    profiles:[],
    loading:true,
    error:{}
}

export default function (state=intialstate,action){
    const {type,payload}=action;
    switch(type){
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading:false,
                profile:payload
            }
        case PROFILE_ERROR:
            return{
                ...state,
                loading:false,
                profile:payload
        }
        case CLEAR_PROFILE:
            return{
                ...state,
                profile:null,
                loading:false
            }
        default:return state
    }
}