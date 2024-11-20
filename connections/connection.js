const mongoose=require('mongoose')

const connection=process.env.CONNECTION_STRING

mongoose.connect(connection).then(res=>{
    console.log("MONGODB ATLAS connected successfully with testServer");
}).catch(err=>{
    console.log("Connection Failed");
    console.log(err);
})
