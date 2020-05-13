import React, { useState } from "react";
import {Link} from "react-router-dom";
import PropsTypes from "prop-types";
import {connect} from "react-redux";
import {addEdu} from "../action/profile";

const Addedu = ({addEdu,history}) =>{
    const [formdata,setformdata]=useState({
      school:'',
      degree:'',
      fieldofstudy:'',
      from:'',
      to:'',
      current:'',
      description:''
    });
    const [toDatedisabled,toggledisabled]=useState(false);
    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    }=formdata;
    
    const onchange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value});
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        addEdu(formdata,history);
    }
    return(<div>
        <h1 class="large text-primary">
        Add Your Education
      </h1>
      <p class="lead">
        <i class="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={(e)=>onsubmit(e)}>
        <div class="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
            value={school}            
            onChange={(e)=>onchange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            required
            value={degree}            
            onChange={(e)=>onchange(e)}
          />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy}            
            onChange={(e)=>onchange(e)} />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from}            
            onChange={(e)=>onchange(e)}/>
        </div>
        <div class="form-group">
          <p>
            <input type="checkbox" name="current" checked={current} value={current}            
            onChange={(e)=>{
                setformdata({...formdata,current:!current});
                toggledisabled(!toDatedisabled);
            }}/>{''}Current School or Bootcamp
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={(e)=>onchange(e)}
          disabled={toDatedisabled ?'disabled':''}/>
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}            
            onChange={(e)=>onchange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </div>)
}

Addedu.propsTypes = {
    addEdu:PropsTypes.func.isRequired
}

export default connect(null,{addEdu})(Addedu);