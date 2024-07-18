const mongoose = require('mongoose');
const express = require('express')

const app = express();

app.use(express.json())

  async function main() {
  
   await mongoose.connect('mongodb://127.0.0.1:27017/batch10pm')
   .then(()=>console.log("database is connected"))
}
main().catch((err)=>console.log(err));



const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    address:String
})

const Model = mongoose.model('student',userSchema)


app.post('/user',(req,res)=>{

    //   console.log(req.body);
    // const data = new Model({name:"aman",age:10})
    const data = new Model(req.body)
    data.save();
      res.send("hello from users")
})


app.listen(4000,()=>console.log("server is started"))