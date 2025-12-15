var express=require("express")
var fs= require("fs")
var app=express()

// add middle ware function for body parsing
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
res.send("hello it is my first express application")
})



app.get('/about',function(req,res)
{ res.send("This is basic express application ")
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.get('/GetStudents', function (req, res) {

  fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {

    if (err) {
      console.log(err);
      return res.status(500).send("Cannot read Student.json file");
    }

    res.json({
      status: true,
      Status_Code: 200,
      requrl: req.url,
      requestMethod: req.method,
      studentdata: JSON.parse(data)
    });

  });

});

// Show the form in browser
app.get('/studentinfo', function(req, res) {
  res.sendFile('StudentInfo.html', { root: __dirname });
});

// Receive form data after submit
app.post('/submit-data', function(req, res) {

  var name = req.body.firstName + ' ' + req.body.lastName;
  var Age = req.body.myAge + ' Gender: ' + req.body.gender;
  var Qual = ' Qualification: ' + req.body.Qual;

  console.log(req.body.Qual);

  res.send({
    status: true,
    message: 'form Details',
    data: {
      name: name,
      age: Age,
      Qualification: Qual
    }
  });

});

app.listen(5000,function(){console.log("server is running on port 5000")})