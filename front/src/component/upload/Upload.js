import React from 'react';
import axios from 'axios';

class Upload extends React.Component{
	constructor(props){
		super(props);
    this.state={
      name:"",subject:"",semster:"",contact:"",stream:"",email:this.props.email,price:""
    }
	}

  name=(event)=>{
    this.setState({name:event.target.value})
  }
  subject=(event)=>{
    this.setState({subject:event.target.value})
  }
  semster=(event)=>{
    this.setState({semster:event.target.value})
  }
  contact=(event)=>{
    this.setState({contact:event.target.value})
  }
  stream=(event)=>{
    this.setState({stream:event.target.value})
  }
  price=(event)=>{
    this.setState({price:event.target.value})
  }

  submit=()=>{
    console.log(this.state)
    axios.post('http://localhost:3000/sell',{name:this.state.name,subject:this.state.subject,sem:this.state.semster,contact:this.state.contact,email:this.state.email,stream:this.state.stream,price:this.state.price})
    .then(response=>{
      if(response.status===200)
        this.props.route('home');
      else
        console.log("database problem")
    })

  }


	render(){
	return(
		<article className='br2 ba b--black-10 mv6 w-100 w-50-m w-25-1 mw6 shadow-5 center tc'>
		<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Book Details</legend>
      <div className='mt3'>
      	<label className=" tcdb fw6 lh-copy f6" htmlFor="email-address">Name of Book</label>
        <input onChange={this.name}className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Name"/>
        </div>
      <div className="mt3">
        <label className="tc db fw6 lh-copy f6" htmlFor="email-address">Subject Associated</label>
        <input onChange={this.subject} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="tc db fw6 lh-copy f6" htmlFor="password">Semester</label>
        <select onClick={this.semster} className=" f4 bg--transparent">
        <option  name='subject'>1ST</option>
        <option  name='subject'>2ND</option>
        <option  name='subject'>3RD</option>
        <option  name='subject'>4TH</option>
        <option  name='subject'>5TH</option>
        <option  name='subject'>6TH</option>
        <option  name='subject'>7TH</option>
        <option  name='subject'>8TH</option>
        </select>
      </div>
      <div className="mv3">
        <label className="tc db fw6 lh-copy f6" htmlFor="password">Stream</label>
        <select onClick={this.stream} className=" f4 bg--transparent">
        <option  name='subject'>ECE</option>
        <option  name='subject'>CSE</option>
        <option  name='subject'>EE</option>
        <option  name='subject'>IT</option>
        </select>
      </div>
    </fieldset>
      <div className='mv3'>
      <label  className="tc db fw6 lh-copy f6" htmlFor="contact">Contact No.</label>
      <input onChange={this.contact} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="password"  id="password"/>
      
      <label  className="tc db fw6 lh-copy f6" htmlFor="contact">Price</label>
      <input onChange={this.price} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="password"  id="password"/>

      <p onClick={this.submit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type='submit'>Upload</p><br/>
      <p onClick={()=>this.props.route('home')} className="b ph3  input-reset ba b--black bg-transparent grow pointer f7 dib" type='submit'>Return to Home</p>
      </div>
      </div>
    <div className="lh-copy mt3">
    </div>
</main>
</article>
)
}

}
export default Upload;