import React from 'react';

const Box=({image,details})=>{
	return(
		<div className='tc bg-light-red dib br3 pa1 ba grow shadow-5 pointer ma2'>
		<img src={image} alt="" height='200px' width='200px'/>
		<p className='f2 b'> {details.subject}</p>
		<div className='f4'>
		<p>{`Name-${details.name}`}</p>
			<p>{`Branch-${details.stream}`}</p>
			<p>{`Contact No.-${details.contact}`}</p>
		</div>
		</div>


		);
}
export default Box;