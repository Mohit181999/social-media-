import React, { useState } from "react";
import PropsTypes from "prop-types";
import {connect} from "react-redux";
import {addExp} from "../action/profile";
import {Link} from "react-router-dom";

const Addexp = ({addExp,history}) =>{
    const [formdata,setformdata]=useState({
      title:'',
      company:'',
      location:'',
      from:'',
      to:'',
      current:false,
      description:''
    });
    const [toDatedisabled,toggledisabled]=useState(false);
    const {title,
        company,
        location,
        from,
        to,
        current,
        description}=formdata;

        const onchange = (e)=>{
            setformdata({...formdata,[e.target.name]:e.target.value});
        }
        const onsubmit =(e)=>{
            e.preventDefault();
            addExp(formdata,history);
        }
    return(<div>
        <h1 className="large text-primary">
       Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e)=>onsubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title" required value={title} onChange={(e)=>onchange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" required value={company} onChange={(e)=>onchange(e)}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={(e)=>onchange(e)}/>
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={(e)=>onchange(e)}/>
        </div>
         <div className="form-group">
          <p><input type="checkbox" name="current" checked={current}  value={current}  onChange={(e)=>{
                setformdata({...formdata,current:!current});
                toggledisabled(!toDatedisabled);
            }}/>{''}Current Job</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={(e)=>onchange(e)}
          disabled={toDatedisabled ?'disabled':''}/>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description} onChange={(e)=>onchange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" href="/dashboard">Go Back</Link>
      </form>
    </div>)
}

Addexp.propsTypes = {
    addExp:PropsTypes.func.isRequired
}

export default connect(null,{addExp})(Addexp);