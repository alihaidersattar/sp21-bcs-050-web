let express = require("express");
let app = express();
app.use(express.static("public"));
// app.set("views", "views");
app.set("view engine", "ejs");
// app.get("/", function (req, res) {
//   res.send("<h1>Home Page</h1>");
// });
app.get("/contact-us", function (req, res) {
  res.render("contact-us");
});
app.get("/views/signup", function (req, res) {
  res.render("signup");
});

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/views/index.html", function (req, res) {
  res.render(" ");
});


app.listen(5000);