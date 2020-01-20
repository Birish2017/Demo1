import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
//import   './contact.css'

export default class Contact extends React.Component {
 
  render(){
    return(<div   className="samplediv">
    <form id="sampleForm">
          <div className="form-group">
          <label>FirstName</label>
          <input  type ="text" className="form-control" name="firstName" />
          </div>
          <div className="form-group">
          
              <label>Skills</label>
          <select type="select" className="form-control"  name="skills">
                        <option key="0" value="select course">select Course</option>
                        <option key="1" value="c#">C#</option>
                          <option key="2" value="Javascript">Javascript</option>
                          <option key="3" value="Java">Java</option>
          </select>
          
          </div>
          <div className="form-group">
          <label>Comment</label>
          <textarea rows="4" cols="6" className="form-control"/>
          
          </div>
          <div className="form-group">
          <input type="checkbox" name ="remindme"/>
           <label>Remind me</label>
          </div>
          <input type="submit" className="btn btn-primary" text="Submit"/>
         

          </form>
          
    </div>)
  }
}
