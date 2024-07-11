const express = require('express');
const app = express();


// crud
// c = create
// r = read
// u = update
// d = delete


app.get('/',(req,res)=>{
        
    res.send("hello from backend")
})

// app.get('/home',(req,res)=>{

//     res.send("hello from home backend")
// })

app.get('/about',(req,res)=>{
    res.send('<h1>hello from backend from about page</h1>')
})

app.get('/service',(req,res)=>{
    res.send({name:"aman"})
})

app.get('/momo',(req,res)=>{

    res.send("i dont love momo from backend;;;;");
})


app.get('/apple',(req,res)=>{

    res.send("apple instagram account")
})


app.get('/microsoft',(req,res)=>{

    res.send("microsoft instagram account")
})


app.get('/instagram/:id',(req,res)=>{

                //    const value   = req.params.id
                const value = req.query.pass
                   console.log(value)

    res.send(`instagram account of ${value}`)
})

app.get('/home/photo/value',(req,res)=>{

    res.send("hello from home")
})


app.listen(3000,()=>console.log("server is started"))