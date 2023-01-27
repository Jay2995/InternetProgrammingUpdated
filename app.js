const express = require('express')
const app = express()
const path = require('path')
import { surveys } from './surveys'
import { questions } from './questions'

app.use(express.static('./public'))
const port = 5000


app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname,'./index.html'))
    









})
















app.listen(port, () => {
console.log(`listening on port :${port}`);

})

