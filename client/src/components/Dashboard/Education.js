import React from "react";
import PropsTypes from "prop-types";
import Moment from "react-moment";
import {connect} from "react-redux";
import {deleteEdu} from "../../action/profile";

const  Education = ({education,deleteEdu})=>{
   const   educations= education.map(edu=>(
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
               <td><Moment format="YYYY/MM/DD">{edu.from}</Moment> - {
                edu.to === null ?'Now':<Moment format="DD/MM/YYYY">{edu.to}</Moment>
               }</td>
               <td><button onClick = {()=>deleteEdu(edu._id)}className="btn btn-danger">Delete</button></td>
        </tr>
    ))
    return(<div>
        <h2 className="my-2"> Education Credentials</h2>
        <table className="table">
            <thead>
            <tr>
                <th>School</th>
                <th className="hide-sm">Degree</th>
                <th className="hide-sm">Years</th>
            </tr>
            </thead>
            <tbody>{ educations}</tbody>
        </table>
    </div>)
}

 Education.propsTypes = {
     education:PropsTypes.array.isRequired,
     deleteEdu:PropsTypes.func.isRequired
}

export default connect(null,{deleteEdu})(Education);