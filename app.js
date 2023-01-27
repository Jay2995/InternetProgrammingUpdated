// modules
const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();

//Json Variables
const surveys = require('./survey.json')
const questions = require('./questions.json')

const port = 5000

//


app.get('/', (req, res) => {
    res.send('MAIN PAGE')
})

app.get('/surveys', (req, res) => {
    res.send(surveys)

})
app.get('/questions', (req, res) => {
    res.send(questions)

})

// app.get(`/surveys/${number}`)
app.get('/surveys/:id', function(req, res){
    res.send(surveys.json() + req.params.id)
})

app.listen(port, () => console.log(`app is listening on port ${port}`))