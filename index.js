const express = require('express')
const axios = require('axios')
const ejs = require('ejs')
const bodyParser = require('body-parser');
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
//app.use(express.urlencoded({extended:false}))



app.get('/', (req, res)=>{
    res.send(index)
})

app.post('/trivia', async(req, res)=>{
    const {amount, category, difficulty} = req.body;
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=26&difficulty=easy')
    //https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}
    const questions = response.data.results;
    res.render('trivia', {questions})
})

//const PORT = 3001
/*app.listen(PORT, ()=> {
    console.log("Server is running")
})*/

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("Server is running");
})

