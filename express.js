const express = require('express');
const app = express();
const path = require('path')


app.use(express.json())
// crud
// c = create
// r = read
// u = update
// d = delete


//  app.use((req,res,next)=>{

//     // res.send("hello from middleware")
      
//        if(req.query.name=='aman' && req.query.pass==123456){
//         next()
//        }else{
//         res.send("username and password error")
//        }
     
// })


//   const login = ((req,res,next)=>{

//     // res.send("hello from middleware")
      
//        if(req.query.name=='aman' && req.query.pass==123456){
//         next()
//        }else{
//         res.send("username and password error")
//        }
     
// })

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
        
    res.send("hello from backend")
})

// app.get('/home',(req,res)=>{

//     res.send("hello from home backend")
// })

app.get('/about',(req,res)=>{
    console.log(req.subdomains)
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



app.get('/hola',(req,res)=>{

    res.status(200).send("hello from hola")
})

app.post('/momo',(req,res)=>{


                   console.log(req.body)
                  res.send("hello from post method")
})

app.delete('/momo',(req,res)=>{
        
    res.send("your photo is deleted")
})

app.put('/momo',(req,res)=>{

    res.send("helllo from update method")
})


app.get('*',(req,res)=>{

    res.send("this page doesnt exist")
})

app.listen(3000,()=>console.log("server is started"))