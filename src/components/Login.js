import React from 'react';
import ReactDOM from 'react-dom';
import '../css/bootstrap.min.css';
import {Home} from '../components/Home';
import {EnquiryForm} from '../components/EnquiryForm';

 
 export class Login extends React.Component{
   constructor(props){
     super(props);
     //this.handleLoginClick = handleLoginClick.bind(this);
     this.state={login:false, enquiry:''};
   }

    handleLoginClick(){
      this.setState({login:true});     
   }

   handleLogoutClick(){
     this.setState({login:false});
   }

   handleEnquiryClick(){
     this.setState({enquiry:true});
   }

   render(){
     if(!this.state.login && !this.state.enquiry){
     return(
       <div className="container">
       <form>           
       <fieldset>
      <legend>Admin Login</legend>

       <div className="form-group" >
       <label htmlFor="">User name: </label>
       <input type="text" className="form-control" placeholder="Enter user name"/>
       </div>
       
       <div className="form-group">
       <label htmlFor="">Password: </label>
       <input type="password" className="form-control" placeholder="Enter password" />
       </div>

       <div className="form-group">
       <button className="btn btn-primary" onClick={this.handleLoginClick.bind(this)}> Log in </button> &nbsp;
       <button className="btn btn-primary" onClick={this.handleEnquiryClick.bind(this)}> Enquiry </button>
       </div>
       </fieldset>

       </form>       
       </div>
     );}
    else if(this.state.login){
      return(
        <div>
        <Home/>
        <button className="btn btn-primary" onClick={this.handleLogoutClick.bind(this)}>Log out</button>
        </div>
      );
    }
    else if(this.state.enquiry){
      return (
        <div>
        <EnquiryForm/>
        </div>
      );
    }
   }
 }