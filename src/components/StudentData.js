import React from 'react';
import {StudentItem} from '../components/StudentItem';

export class StudentData extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  const ob = this.props.obj.studentObj;
  const array = [];
  var fieldName;
  var value;
  for (let key in ob) {
    fieldName = key;
    value = ob[key];
    //array.push({fieldName} : {value});
    // array.push(<p>This is  ${fieldName} and its ${value}</p>);
    array.push(<StudentItem fname={fieldName} val={value}/>);
  }
  console.log("student data ",array);
return(
  <div>
  {array}
  </div>
);
}
}
  //var fieldName;
  //var value;
  //var array = [];
 /* const createData = ()=>{
  var obj = props.obj.studentObj;
  var array = [];
  for(let key in obj){
    var fieldName = key;
    var value = obj[key];
    array.push(<p>{fieldName} : {value}</p>);
  }
  return array;
  }*/
 /* return (
    <div>
    {
  for(let key in obj){
    var fieldName = key;
    var value = obj[key];
    array.push(<p>{fieldName} : {value}</p>);
  }}
    reached student data
    
    </div>
    
  )
  }*/


