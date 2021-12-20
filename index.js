const express=require('express');
const app =express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Hello From module 63 with ok reba oise r');
});

const users=[
    {id:1,name:"shabana",email:"shabana@gmail.com",phone:"017777777"},
    {id:2,name:"Shabnoor",email:"shabnoor@gmail.com",phone:"017777777"},
    {id:3,name:"shrabonti",email:"shrabonti@gmail.com",phone:"017777777"},
    {id:4,name:"Shuchorita",email:"Shuchorita@gmail.com",phone:"017777777"},
    {id:5,name:"Soniya",email:"Soniya@gmail.com",phone:"017777777"},
    {id:6,name:"shusmita",email:"shusmita@gmail.com",phone:"017777777"}
]

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
})

app.listen(port,()=>{
    console.log('listening to port',port)
})