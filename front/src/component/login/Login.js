import React,{Component} from 'react';

 class Login extends Component{

  constructor(props){
    super(props);
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
        <input   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"/>
      </div>
      <div className="mv3">
        <label className="tc db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
      </div>
    </fieldset>
    <div className='pa1 tc'>
      <p onClick={()=>this.props.route('home')}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" value="Signin" type="submit">Sign In</p>
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