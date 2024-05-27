const express = require('express')
const PORT = 8080;

const app = express();





console.log('hello my name is anshuman')
// adding routes
app.get('/',(req,res)=>{
    res.json(
     {
      msg: "server is running finr"
     }
    )
})


app.listen(PORT,()=>{console.log(`Server is Started at Posrt ${PORT}`)});

