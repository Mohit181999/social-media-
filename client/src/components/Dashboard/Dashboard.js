import React,{Fragment ,useEffect} from "react";
import PropsTypes from "prop-types";
import {connect} from "react-redux";
import {getCurrentProfile} from "../../action/profile"
import Spinner from "../layout/spinner"
const Dashboard = ( {getCurrentProfile,
    auth: { user },
    profile: { profile ,loading}})=>{
    useEffect(()=>{
        getCurrentProfile();
    },[]);
    return( loading && profile ===null ?<Spinner />:(
        <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
           has
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>           
            Create Profile
           
        </Fragment>
      )}
    </Fragment>    
    )
    )
}

Dashboard.propsTypes ={
    getCurrentProfile:PropsTypes.func.isRequired,
    auth:PropsTypes.object.isRequired,
    profile:PropsTypes.object.isRequired
}
const mapStateToProps = (state) =>({
    auth:state.auth,
    profile:state.profile
});
export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);