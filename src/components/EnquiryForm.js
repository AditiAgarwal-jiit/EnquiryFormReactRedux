import React,{Component} from 'react';
import '../css/bootstrap.min.css';
import {Student} from '../models/studentInfo';
//import {adminOperations} from '../models/adminOperations';
import ReadEnqForm from '../components/ReadEnqForm';
import {store} from '../store/store';

export class EnquiryForm  extends Component{
  constructor(props){
    super(props);
    this.courses = [];
    this.days = '0';
    this.state={disabled:true,submitFlag:false};
  }

  getSelectedValues(select){
    var result = [];
    var options = select.options;
    result = Array.prototype.filter.call(options,(option) => option.selected);
    return result;
  }


  handleRadioClick(e){
    if(e.target.value==='others'){
      this.setState({disabled:false});
    }
    else{
      this.setState({disabled:true});
    }
  }

  handleSubmitClick(){
    var name = this.refs.name.value;
    var profession = this.refs.profession.value;
    var company = this.refs.company.value;
    var gradYear = this.refs.gradYear.value;
    var degree = this.refs.degree.value;
    var phone = this.refs.phone.value;
    var email = this.refs.email.value;
    var currAdd = this.refs.currAdd.value;
    var permAdd = this.refs.permAdd.value;
    //var ele = document.getElementsByTagName('select')[0];
    var courseElement = this.refs.courses;
    var courses = this.getSelectedValues(courseElement);
   var timingElement = this.refs.timing;
   var timing = timingElement.options[timingElement.selectedIndex].text;
   var weekend = document.querySelector('input[name="day"]:checked').value;
   //var dayElement = this.refs.dayele;
   //var weekend = dayElement.elements["day"].value;
   this.days = this.refs.days.value;
   var joining = document.querySelector('input[name="joining"]:checked').value;
  // var joiningElement = this.refs.joining;
  // var joiningDay = joiningElement.elements["joining"].value; 
   var source = document.querySelector('input[name="source"]:checked').value;
   if(source==='others'){
     var e = this.refs.otherSource;
      var otherSrc = e.value;
   }
   var studentObj = new Student(name,profession,company,gradYear,degree,phone,email,currAdd,permAdd,courses,timing,weekend,joining,source,otherSrc);
   //adminOperations.add(studentObj);
  // console.log(adminOperations.studentEnqList);  
  // console.log(name,profession,email,gradYear,company,degree,phone,currAdd,permAdd,courses,timing,weekend,joining,this.days,source,otherSrc);
  store.dispatch({
    type: 'SUBMIT',
    payload: {student:{studentObj}}
  });
  this.setState({submitFlag:true});
  } 



  render(){
    if(!this.state.submitFlag){
    return(
      <div className="container">
      <form>
      <fieldset>
      <legend>Enquiry Form</legend>

      <div className="form-group">
      <label> Name: </label>
      <input type="text" className="form-control" placeholder="Enter your name" ref="name"/>
      </div>
      <div className="form-group">
        <label> Profession: </label>
        <input type="text" className="form-control" placeholder="Student/Working" ref="profession"/>
      </div>
      <div className="form-group">
        <label> College/Company Name: </label>
        <input type="text" className="form-control" placeholder="Enter your college/company name" ref="company" />
      </div>
      <div className="form-group">
        <label> Year of Graduation: </label>
        <input type="text" className="form-control" placeholder="If pursuing Graduation or is currently fresher" ref="gradYear"/>
      </div>
      <div className="form-group">
        <label> Degree: </label>
        <input type="text" className="form-control" placeholder="B.Tech/B.E./B.Sc./BCA/MCA" ref="degree"/>
      </div>
      <div className="form-group">
        <label> Contact number: </label>
        <input type="text" className="form-control" placeholder="Enter your phone/mobile no." ref="phone" />
      </div>
      <div className="form-group">
        <label> Email-id: </label>
        <input type="text" className="form-control" placeholder="Enter your email-id" ref="email"/>
      </div>
      <div className="form-group">
        <label> Current Address: </label>
        <input type="text" className="form-control" placeholder="Enter your current address" ref="currAdd" />
      </div>
      <div className="form-group">
        <label> Permanent Address: </label>
        <input type="text" className="form-control" placeholder="Enter your permanent address" ref="permAdd"/>
      </div>
      <div className="form-group">
        <label> Course(s) interested in: </label>
        <select className="form-control" multiple ref="courses">
        <option> Front End Master </option>
        <option> UI </option>
        <option> MEAN Stack </option>
        <option> Core Java </option>
        <option> Advanced Java </option>
        </select>
      </div>
      <div className="form-group">
        <label> Preferred Timing </label>
        <select className="form-control" ref="timing">
        
        <option> 3:30-05:00 </option>
        <option> 5:30-07:00 </option>
        <option> 09:00-11:00 </option>
          <option> 11:30-02:30 </option>
          <option> 03:00-05:00 </option>
          <option> 05:30-07:30 </option>
        
        </select>
      </div>
      <div className="form-group">
        <label> Preferred: </label>
        <div>
        <label className="radio-inline"><input type="radio" name="day" value="weekend"/> Weekend </label>
        <label className="radio-inline"><input type="radio" name="day" value="weekdays"/> Weekdays </label>
        <label className="radio-inline"><input type="radio" name="day" value="any"/> Any </label>
        </div>
      </div>
      <div className="form-group">
        <label> Joining: </label>
        <div>
        <label className="radio-inline"><input type="radio" name="joining" value='0'/> Immediate </label>
        <label className="radio-inline"><input type="radio" name="joining" value={this.days}/> After </label>&nbsp;<span><input type="text" size='1' ref="days"/>&nbsp; days</span>
      </div>
      </div>

<div className="form-group">
<label> Source: </label>
              <div className="radio">
<label><input type="radio" name="source" value="friends" onClick={this.handleRadioClick.bind(this)}/> Friends </label>
</div>
              <div className="radio">
<label><input type="radio" name="source" value="ex-students" onClick={this.handleRadioClick.bind(this)} /> Ex-students/Seniors </label>
</div>
              <div className="radio">
<label><input type="radio" name="source" value="google" onClick={this.handleRadioClick.bind(this)} /> Google </label>
</div>
              <div className="radio">
<label><input type="radio" name="source" value="workshop" onClick={this.handleRadioClick.bind(this)}/> Workshop </label>
</div>
              <div className="radio">
<label><input type="radio" name="source" value="others" onClick={this.handleRadioClick.bind(this)}/> Others </label>
</div>
<input type="text" placeholder="Others,please specify" ref="otherSource" disabled={this.state.disabled}/>
</div>

<div className="form-group">
<button className="btn btn-primary" onClick={this.handleSubmitClick.bind(this)}> Submit </button>
</div>

      </fieldset>
      </form>

      </div>

    );
    }
  else if(this.state.submitFlag){
    console.log("hi");
    return(<ReadEnqForm/>);
  }
  }

}