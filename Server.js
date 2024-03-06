const express = require('express')
const cors = require('cors');

const app = express();

varCorOptions = {
    origin: 'http://localhost:8081'
}

// middlewares
app.use(cors(varCorOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// testing api
app.get('/', (req, res)=>{
    res.json({message: "server is running "})
})

// port
const PORT = process.env.PORT || 8080

// Server
app.listen(PORT, ()=>{
    console.log(`server is running port ${PORT}`);
} )