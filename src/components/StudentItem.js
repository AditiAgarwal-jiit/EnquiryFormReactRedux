import React from 'react';

export class StudentItem extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.fname);
    console.log(this.props.val);
  }
  render(){
    if(this.props.fname==='courses'){
      return(
        <div>
        
          {this.props.fname}:{this.props.val.map((obj) =>{
            console.log("This is obj",obj);
            console.log("This is obj child", obj.children);
            console.log("This is obj child child",obj.children.children);
            return (<p> This is {obj.children}</p>)})}
        </div>
      )
    }
    else{
    return(
      <div>
      <p>{this.props.fname}:{this.props.val}</p>      
      </div>

    )
  }
  }
}