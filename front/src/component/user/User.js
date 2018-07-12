import React from 'react';
import './user.css';
import './inner_user.css';

class User extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pop:false
		}
	}
	change=()=>{
		if(this.state.pop)
			this.setState({pop:false})
		else
			this.setState({pop:true})
	}

	render(){
		return(
			<div>{
			this.state.pop===true
			?(
			<div className='popup dib'>
			<div className='popup_inner br3 ba center pa3 fl w-10 dib'>
			<p onClick={()=>this.props.routechange('login')}type='submit' className='f3 b dib center pointer grow'>SignOut
			</p>
			<p onClick={()=>this.props.routechange('upload')}type='submit' className='f3 b dib tc pointer grow'>Sell Book</p>
			<p onClick={this.change} type='submit' className='f3 b pointer dim dib grow'>close</p>

			</div>
			</div>
			)
			:
			(<div style={{textAlign:'right'}}>
			<button onClick={this.change} className='f3 dim underline b--transparent pa4 bg-transparent pointer'>Profile</button>
			</div>)
			}
		</div>
		)
	}
  }

export default User;