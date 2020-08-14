//I don't do web dev
const express = require('express')
const app = express()

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("listening at http://%s:%s", host, port)
 })

const studentBody=['john','sarah','zeke','sally','amanda','aylahna','jackson','todd','timmy']
app.get('/students', function getStudents (req, res) {
    response = {
            students: studentBody
    }
    res.end(JSON.stringify(reponse))
})
    response = {
        //no clue
    }
})
app.get('/grades/:studentId', function getGrades (req, res) {
    response = {
        //Even less
    }
})
app.get('/students:studentID', function getStudentID (req, res) {
    response = {
        //Completely lost, again, not a web dev.
    }
})