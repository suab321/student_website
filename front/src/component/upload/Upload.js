import React from 'react';

class Upload extends React.Component{
	constructor(props){
		super(props)
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
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Name"/>
        </div>
      <div className="mt3">
        <label className="tc db fw6 lh-copy f6" htmlFor="email-address">Subject Associated</label>
        <input  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="tc db fw6 lh-copy f6" htmlFor="password">Year</label>
        <input  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="text"  id="password"/>
      </div>
      <label className="tc db fw6 lh-copy f6" htmlFor="password">Type</label>
      <select className='bg-transparent b--solid black'>
      <option value='Organizer'>Organizer</option>
      <option value='Subject-Book'>Subject-Book</option>
      </select>
    </fieldset>
      <div className='mv3'>
      <label className="tc db fw6 lh-copy f6" htmlFor="password">Contact No.</label>
      <input  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="password"  id="password"/>
      
      <p onClick={()=>this.props.route('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type='submit'>Upload</p>
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