import React from"react";
import PropsTypes from "prop-types";
import {Link} from "react-router-dom"

const Profilesitem = ({
    profile:{
        user:{_id,name,avatar},
        status,
        company,
        loaction,
        skills
    }})=>{
    return(<div className="profile bg-light">
        <img src={avatar} alt="" className="round-img"></img>
        <div>
            <h2>{name}</h2>
        <p>{status} {company && <span> at {company}</span>}</p>
    <p className="my-1" >{loaction && <span>{loaction}</span>}</p>
    <Link to={`profile/${_id}`} className="btn btn-primary">View Profile</Link>
    </div>
    <ul>
        {skills.slice(0,4).map(skill=>(
            <li key={skill.id} className="text-primary">{skill}</li>
    ))}
    </ul>

        

    </div>)
}

Profilesitem.propsTypes ={
    profile:PropsTypes.object.isRequired
}

 

export default Profilesitem;