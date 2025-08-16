const express = require("express") 
const app = express()
const port = 8000
const { hello, students, fullnames } = require('./mymodule')

app.set('view engine', 'ejs') 


app.get('/', (req, res) => {
        res.render('index', {heading: 'ex batallion music'}) 

})

app.get('/about', (req, res) => {
        res.render('about', {
            studentData: students, 
            helloFunc: hello
        }) 
})

app.listen(
    port, 
    (req, res) => {
        console.log(`Server is running on PORT: ${port}`)
        console.log(students)
    }
)
