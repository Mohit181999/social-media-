import React from "react";
import PropsTypes from "prop-types";
import Moment from "react-moment";
import {connect} from "react-redux";
import {deleteExp} from "../../action/profile";
const Experience = ({experience,deleteExp})=>{
   const  experiences=experience.map(exp=>(
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
               <td><Moment format="YYYY/MM/DD">{exp.from}</Moment> - {
                   exp.to === null ?'Now':<Moment format="DD/MM/YYYY">{exp.to}</Moment>
               }</td>
               <td><button onClick={()=>deleteExp(exp._id)}className="btn btn-danger">Delete</button></td>
        </tr>
    ))
    return(<div>
        <h2 className="my-2">Experience Credentials</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Company</th>
                <th className="hide-sm">Title</th>
                <th className="hide-sm">Years</th>
            </tr>
            </thead>
            <tbody>{experiences}</tbody>
        </table>
    </div>)
}

Experience.propsTypes = {
    experience:PropsTypes.array.isRequired,
    deleteExp:PropsTypes.func.isRequired
}

export default connect(null,{deleteExp})(Experience);