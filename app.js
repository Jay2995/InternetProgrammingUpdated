const { application } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const {questions} = require('./questions')
const {surveys} = require('./surveys')
const cors = require("cors")


app.use(cors())
app.use(express.static('./public'))
const port = 5000


app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname,'./index.html'))
    
})

app.get('/surveys', (req, res)=> {
    res.status(200).json(surveys)
})

app.get('/questions', (req, res)=> {
    const reject = () => {
        res.setHeader("www-authenticate", "Basic");
        res.sendStatus(401);
      };
    
      const authorization = req.headers.authorization;
    
      if (!authorization) {
        return reject();
      }
    
      const [username, password] = Buffer.from(
        authorization.replace("Basic ", ""),
        "base64"
      )
        .toString()
        .split(":");
    
      if (!(username === "user" && password === "password")) {
        return reject();
      }
    res.status(200).json(questions)
})


// routing surveys
app.get('/surveys/:surveyID', (req,res)=> {
    // console.log(req.params);
    
    const {surveyID} =req.params

    const id = surveys.find(surveys => {
        return surveys.id === Number((surveyID))
    })
        return res.status(200).json(id)
    

})

// routing questions
app.get('/questions/:questionsID', (req, res)=>{

    const reject = () => {
        res.setHeader("www-authenticate", "Basic");
        res.sendStatus(401);
      };
    
      const authorization = req.headers.authorization;
    
      if (!authorization) {
        return reject();
      }
    
      const [username, password] = Buffer.from(
        authorization.replace("Basic ", ""),
        "base64"
      )
        .toString()
        .split(":");
    
      if (!(username === "user" && password === "password")) {
        return reject();
      }

    const {questionsID} = req.params
    const id = questions.find(questions => {
        return questions.id === Number((questionsID))
    })
        return res.status(200).json(id)
})





app.listen(port, () => {
console.log(`listening on port :${port}`);

})

