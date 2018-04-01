import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Login} from '../components/Login';

export class Main extends Component{
constructor(props){
  super(props);
}
render(){
  return (
    <div>
    <Login/>
    </div>

  );
}
}