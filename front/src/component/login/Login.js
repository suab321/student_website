import React,{Component} from 'react';
import axios from 'axios';

 class Login extends Component{

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }
  email=(event)=>{
    this.setState({email:event.target.value})
  }

  password=(event)=>{
    this.setState({password:event.target.value})
  }

  submit=()=>{
    console.log(this.state);
    axios.post('http://localhost:3000/login',{email:this.state.email,password:this.state.password}).then(response=>{
      if(response.status===200){
        this.props.route('home');
        this.props.user(response.data.email);
        this.props.load_user();
      }
      else
        console.log("not registered");
    })

  }

	render(){
		return(
			<article className='br2 ba b--black-10 mv6 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
		<main className ="pa4 black-80">
  <div className="measure center">
    <fieldset id="sign_up" className="tc ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Log In</legend>
      <div className="mt3">
        <label className="tc db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.email} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"/>
      </div>
      <div className="mv3">
        <label className="tc db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.password} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
      </div>
    </fieldset>
    <div className='pa1 tc'>
      <p onClick={this.submit}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" value="Signin" type="submit">Sign In</p>
    </div>
    <div className="pa3 tc"><div className='f3'>Dont have a account?</div>
      <p  onClick={()=>this.props.route('register')}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " type='submit'>Register</p>
    </div>
  </div>
</main>
</article>
			);
	}
}

export default Login;