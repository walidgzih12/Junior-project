const express= require('express');
const app = express();
const cors = require('cors');

const  router  = require('./router/index.js');

const port = 3050;
app.use(express.json())
app.use(cors())
app.use('/api',router)


  

 

app.listen(port,()=>{
    console.log(`app listening on port http://localhost${port}`);
})

