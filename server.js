const express= require('express')
const mongoose = require('mongoose')
const Visitaion = require('./models/visitationModel')
const Register = require('./models/registerModel')
const app = express()


app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Node API')
})
app.post ('/visitaion',async(req, res) =>{
    try{
       const visitation = await Visitation.create(req.body)
       res.status(200).json(visitation);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
app.post ('/register',async(req, res) =>{
    try{
       const register = await Register.create(req.body)
       res.status(200).json(register);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://mi_bayat:Pass123codon@cluster0.l2sgage.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> {
    console.log('connected to MongoDB')
    app.listen(3001,()=>{
        console.log(`Node API app is running on port 3000`)
    })  
    
}).catch((error)=>{
    console.log(error)
})
