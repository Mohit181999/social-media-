import React, { useEffect } from "react";
import PropsTypes from "prop-types";
import { connect } from "react-redux";
import {getIndipost} from "../../action/post";
import Spinner from "../layout/spinner";
import PostItem from "../posts/PostItem";

const Posti = ({getIndipost,post:{post,loading},match}) =>{
    useEffect(()=>{
        getIndipost(match.params.id)
    },[getIndipost,match.params.id])
    return (
         loading || post === null ? <Spinner /> : <div>
             <PostItem post = {post} />
         </div>
    )
}
Posti.propsTypes = {
    getIndipost:PropsTypes.func.isRequired,
    post:PropsTypes.object.isRequired
}
const mapStateToProps = state =>({
    post:state.post
});
export default connect(mapStateToProps,{getIndipost})(Posti)