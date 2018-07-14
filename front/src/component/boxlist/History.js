import React from 'react';
import Boxlist from './Boxlist';


const History=({users,routechange})=>{

		return(
			<div>
			<div style={{textAlign:'right'}} className='bg-transparent b--transparent f4 pa4 underline b dim'>
			<button onClick={()=>routechange('home')} >Return to Home</button>
			</div>
			<Boxlist users={users}/>
			</div>


			)
}
export default History;
