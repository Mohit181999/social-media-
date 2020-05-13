
import {PROFILE_SUCCESS ,PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE,GET_PROFILES} from "../action/type"
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
            case UPDATE_PROFILE:
            return {
                ...state,
                loading:false,
                profile:payload
            }
        case GET_PROFILES:
            return{
                ...state,
                profiles:payload,
                loading:false
            }
        case PROFILE_ERROR:
            return{
                ...state,
                loading:false,
                profile:null
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