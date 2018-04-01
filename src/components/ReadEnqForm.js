import React from 'react';
import '../css/bootstrap.min.css';
import {connect} from 'react-redux';
import {StudentData} from '../components/StudentData';

/*class ReadEnqForm extends React.Component{
  constructor(props){
    super(props);
    this.fieldName = "";
    this.value = "";
  }*/

  const ReadEnqForm = (props)=>{
    console.log(props.stuArray);
    return (
      <div>
      {props.stuArray.map((obj)=><StudentData key={obj.studentObj.phone} obj={obj}/>)}
        
      </div>
    )
  }

   const mapStateToProps = (state) => {
    return {
      stuArray: state.studentArr
    }
  }
/*<div>{props.stuArray.forEach((obj) => {
          for (let key in obj) {
            var fieldName = key;
            var value = obj[key];
         return (<p> {fieldName} : {value} </p>) 
          }
        })}
        </div>*/
  
  //render(){
    
    /*props.stuArray.forEach((obj)=>{
      for(let key in obj){
        this.fieldName = key;
        this.value = obj[key];
      }
    });*/
    
   /* return(<div>
    <p>{this.fieldName} : {this.value} </p>
    </div>);
  }
}*/
export default connect(mapStateToProps)(ReadEnqForm);