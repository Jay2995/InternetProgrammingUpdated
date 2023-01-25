const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const survey = require('./survey.json')
const questions = require('./questions.json')



const app = express();
const port = 5000

//

app.get('/survey', (req, res) => {
    res.send(survey)

})
app.get('/questions', (req, res) => {
    res.send(questions)

})


app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => console.log(`app is listening on port ${port}`))