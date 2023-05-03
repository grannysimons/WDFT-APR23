const express = require("express");
const app = express();
const hbs = require("hbs"); //hbs is a prepared version for using handlebars directly in express applications

app.use(express.static("public"));

//configuration of HBS:
app.set("views", __dirname + "/views"); //where templates are
app.set("view engine", "hbs");  //which template engine we are using in this project

hbs.registerPartials(__dirname + "/views/partials");    //where my partials are

app.get("/about", (req, res, next) => {
    // res.send("Hi from the /about route");
    // res.sendFile(__dirname + "/views/about.html");

    //database request: for white shoes -> create an object -> sent to the template
    let data = {
        username: "",
        studies: {
            school: "Ironhack",
            campus: "Barcelona",
            bootcamp: "web dev",
            specifications: {
                address: "pamplona 96",
                campusId: 23,
                numStudents: 214
            }
        },
        greeting: "<h2>Hello to <strong>everyone</strong></h2>",
        grades: [7,8,4,10],
        pageTitle: "About page!",
        aboutActive: true,
        gradesArr: [{project: 1, grade: 7}, {project: 2, grade: 9}, {project: 3, grade: 10}],
        // else: "patata"   //we cannot use properties named as handlebars keywords, like "else", "this", etc.
    }

    res.render("about", data);    //Express returns to the browser the result of dinamically generating an index.html file from index.hbs file
})

app.get("/contact", (req, res)=>{
    let data = {
        pageTitle: "Contact",
        contactActive: true,
        gradesArr: [{project: 1, grade: 2}, {project: 2, grade: 3}, {project: 3, grade: 5}]

    }
    res.render("contact", data);
})

app.get("/home", (req, res)=>{
    res.render("home", {
        pageTitle: "Home!",
        homeActive: true,
        layout: "layout2"
    });
})

app.get("/different", (req, res)=>{
    res.render("different", {layout: false});
})

app.get("*", (req, res, next) => {
    // res.send("Not found!!");
    res.render("404");
})

app.listen(3000, ()=>console.log("listening to port 3000"))