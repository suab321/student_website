import React, { Component } from 'react';
import './App.css';
import Login from './component/login/Login';
import 'tachyons';
import image from './default.jpg';
import Boxlist from './component/boxlist/Boxlist';
import Register from './component/register/Register';
import User from './component/user/User';
import Upload from './component/upload/Upload';
import History from './component/boxlist/History';
import axios from 'axios';


class App extends Component {

constructor(){
  super();
  this.state={route:"login",email:"",list:[],my_list:[]}
}

change_User=(email)=>{
  this.setState({email})
}
  
  
  change_route=(route)=>{
    this.setState({route})
  }

  load_history=()=>{
    axios.get("http://localhost:3000/history/"+this.state.email)
    .then(response=>{
      if(response.status===200){
        this.setState({my_list:response.data})
  }
  })
}


  load_User=()=>{
    axios.get("http://localhost:3000/email/"+this.state.email,{email:this.state.email})
    .then(response=>{
      if(response.status===200)
        this.setState({list:response.data})
    })
  }

  render() {
    return (
     <div>
    {
      this.state.route==='home'
        ?
        <div>
        <User routechange={this.change_route} load_history={this.load_history}>
        <Boxlist users={this.state.list}/>
        </User>
        </div>
      :
      (
        this.state.route==='login'
        ?<Login route={this.change_route} user={this.change_User} load_user={this.load_User}/>
        :
        (
          this.state.route==='register'
          ?<Register route={this.change_route} user={this.change_User} load_user={this.load_User}/>
          :(
              this.state.route==='upload'
              ?<Upload route={this.change_route} email={this.state.email}/>
              :<History users={this.state.my_list} routechange={this.change_route}/>

            )
          )
        )


    }
    </div>
    
    );

  }
}


export default App;
