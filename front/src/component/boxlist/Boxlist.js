import React from 'react';
import Box from './Box';

const Boxlist=({users})=>{
	const list=users.map((i)=>{
		return(<Box details={i}/>)
	})
	return(
		<div className='pa2'>
		<div>{list}</div>
		</div>
		)


}

export default Boxlist;