import React, { Component } from 'react';
import './App.css';
import Login from './component/login/Login';
import 'tachyons';
import image from './default.jpg';
import Boxlist from './component/boxlist/Boxlist';
import Register from './component/register/Register';
import User from './component/user/User';
import Upload from './component/upload/Upload';


class App extends Component {

constructor(){
  super();
  this.state={route:"login",user:""};
  this.user=[{email:"aditysaha890@gmail.com",
              name:"abhinav singh",
              year:"2nd",
              stream:"ece",
              college:"Bp poddar Institute of Technology",
              contact:"9051571833",
              subject:"organizer",
              sub_details:"bkdsfkbsdvbkbkbskbh"},
              {email:"aditysaha890@gmail.com",
              name:"abhinav singh",
              year:"2nd",
              stream:"ece",
              college:"Bp poddar Institute of Technology",
              contact:"9051571833",
              subject:"organizer",
              sub_details:"bkdsfkbsdvbkbkbskbh"},
              {email:"aditysaha890@gmail.com",
              name:"abhinav singh",
              year:"2nd",
              stream:"ece",
              college:"Bp poddar Institute of Technology",
              contact:"9051571833",
              subject:"organizer",
              sub_details:"bkdsfkbsdvbkbkbskbh"}]

  }
  change_route=(route)=>{
    this.setState({route})
  }



  render() {
    return (
     <div>
    {
      this.state.route==='home'
        ?<div>
        <div className='popup'><User routechange={this.change_route}/></div>
        <Boxlist users={this.user} route={this.change_route}/>

        </div>
      
      :
      (
        this.state.route==='login'
        ?<Login route={this.change_route}/>
        :
        (
          this.state.route=='register'
          ?<Register route={this.change_route}/>
          :<Upload route={this.change_route}/>
          )
        )


    }</div>
    
     
    );
    }
  }


export default App;
