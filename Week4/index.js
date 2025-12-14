var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Exercise 1
app.get("/", function (req, res) {
  res.send("hello it is my first express application");
});

// Exercise 2
app.get("/about", function (req, res) {
  res.send("This is basic express application ");
});

app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});

// Exercise 3
app.get("/GetStudents", function (req, res) {
  fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
    res.json({
      status: true,
      Status_Code: 200,
      requrl: req.url,
      requestMethod: req.method,
      studentdata: JSON.parse(data),
    });
  });
});

app.get("/GetStudentid/:id", function (req, res) {
  fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
    var students = JSON.parse(data);
    var student = students["Student" + req.params.id];

    if (student) res.json(student);
    else res.json({ message: "Student not found", id: req.params.id });
  });
});

// Exercise 4 (POST)
app.get("/studentinfo", function (req, res) {
  res.sendFile("StudentInfo.html", { root: __dirname });
});

app.post("/submit-data", function (req, res) {
  res.send({
    status: true,
    message: "form Details",
    data: {
      name: req.body.firstName + " " + req.body.lastName,
      age: req.body.myAge,
      Qualification: req.body.Qual,
    },
  });
});

// start server
app.listen(5000, function () {
  console.log("server is running on port 5000");
});
