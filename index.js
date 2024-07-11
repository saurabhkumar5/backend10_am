// console.table([{name:"kusum",age:123,hobby:"singing"},{name:"aman",age:12,hobby:"dancing"}])


               // const os   = require('os');
               //    console.log(os.version())

               const http = require('http');

                          const app   =  http.createServer((req,res)=>{

                                 res.end("hello from backend")
                                 
                               })

                               app.listen(5000,()=>{
                                 console.log("server is running")
                               })