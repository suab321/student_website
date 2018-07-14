const express=require('express');
const bodyparser=require('body-parser');
const knex=require('knex');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const db=knex({
	client:'pg',
	connection:{
		host:'127.0.0.1',
		user:'postgres',
		password:'9051',
		database:'student'
	}
})




app.post('/',(req,res)=>{
	console.log(req.body)
	res.status(200).json("kj");
})


app.post('/register',(req,res)=>{
	const{name,email,password}=req.body;
	db('users').returning('*').insert({
		name:name,
		email:email,
		password:password,
	}).then(response=>res.status(200).json(response[0]))
	.catch(err=>res.status(500).json("Database problem"))

})

app.post('/login',(req,res)=>{
	const{email,password}=req.body;
	db.select('*').from('users').where({email,password}).then(response=>{
		if(response.length===0)
			res.status(400).json("not registered")
		else
			res.status(200).json(response[0])
	}).catch(err=>res.status(500).json(err))

})

app.post('/sell',(req,res)=>{
	const{name,subject,stream,sem,email,contact,price}=req.body;
	db('books').returning('*').insert({name:name,sem:sem,subject:subject,stream:stream,contact:contact,email:email,price:price})
	.then(response=>res.status(200).json(response[0]))
	.catch(err=>res.status(500).json(err));

})

app.get('/email/:email',(req,res)=>{
	const{email}=req.params;
	db.select('*').from('books').whereNot({email})
	.then(response=>{
		const user=response.filter((i)=>{
			if(i.contact!=null)
				return i;

		})
		res.status(200).json(user);
	})
	.catch(err=>res.status(500).json(err))	
})

app.get('/history/:email',(req,res)=>{
	const {email}=req.params;
	db.select('*').from('books').where({email})
	.then(response=>{
		const user=response.filter((i)=>{
			if(i.contact!=null)
				return i;
		})
		res.status(200).json(user);
	})
	.catch(err=>res.status(500).json(err))
})


app.listen(3000);