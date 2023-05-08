const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');

const Cat = require("./model/Cat.model.js"); //we start relative routes with ./ so that Node understands that we are importing a file and not a module
//We can put or not put the .js extension at the end
const Mouse = require("./model/Mouse.model.js");

const port = 3000;
 
mongoose.connect("mongodb://localhost:27017/wdftapr23") //it returns a promise!!!!
.then(() => console.log("connected to database!!!"))
.catch(err => console.log(err))

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//Read operation:
app.get('/',(req, res, next)=>{
    //Cat.findOne() -> gets the first object
    // Cat.findById()
    Cat.find({ age: { $gt: 2 } })   // -> gets an array of results
    .then(results => {
        console.log(results);

        let data = {
            pageTitle: "List of cats",
            cats: results
        }

        res.render('index', data);
    })
    .catch(err => {
        console.log(err);
        res.send("An error happened, check the node console");
    })
})

//Create operation:
app.get("/create", (req, res, next)=>{
    let newCat = {
        name: "Bo",
        age: 12
    }

    // Cat.insertMany([{name: "Hector", age: 23}, {name: "Mimi", age: 14}]) // --> creates many
    Cat.create(newCat) //-> creates one
    .then(result => {
        console.log("result: ", result);
        res.send("Hiiiiii");
    })
    .catch(err => {
        console.log(err);
        res.send("An error happened, check the node console");
    })
})

app.get("/update", (req, res, next)=> {
    //Cat.updateOne() //-> accepts filter and a update object
    Cat.updateMany({$or: [{_id: "6454d1077f7af9fb790e0f31"}, {_id: "6454c561ded6dfd0231e4771"}, {_id: "6454c541ded6dfd0231e476f"}]}, {name: "anonymous", age: 10})
    // Cat.findOneAndUpdate({_id:"6454d1077f7af9fb790e0f31" }, {age: 24}, {new: true})
    // Cat.findByIdAndUpdate( "6454d1077f7af9fb790e0f31", {age: 22}, {new:true})
    .then(resp => {
        console.log(resp);
        res.send("Bo updated!");
    })
    .catch(err => {
        console.log(err);
        res.send("An error happened, check the node console");
    })
})

app.get("/delete", (req, res, next)=> {
    //Cat.deleteOne({name: "anonymous"})
    Cat.findByIdAndDelete("6454d1077f7af9fb790e0f31")
    // Cat.findOneAndDelete
    // Cat.findOneAndRemove
    // Cat.deleteMany
    .then(resp => {
        console.log(resp)
        res.send("deleteeeee")
    })
    .catch(err => {
        console.log(err);
        res.send("An error happened, check the node console");
    })
})

app.get("/createThings", (req, res, next)=>{
    let cat = {
        name: "Bo",
        age: 12
    }
    let mouse = {
        color: "gray",
        enemy: "cactuses"
    }

    // Cat.create(cat)
    // .then(resp => {
    //     return Mouse.create(mouse)
    // })
    // .then(resp => {
    //     res.send("done");
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.send("An error happened, check the node console");
    // })

    let p1 = Cat.create(cat);
    let p2 = Mouse.create(mouse);
    Promise.all([p1, p2])
    .then(resp => {
        res.send("done with promise all");
    })
    .catch(err => {
        console.log(err);
        res.send("An error happened, check the node console");
    })

    // Mouse.create(mouse)
    // .then(resp => {
    //     res.send("done");
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.send("An error happened, check the node console");
    // })
})

app.get("/tostring", (req, res, next)=>{
    
    //ANSWERING TONI T QUESTIONS:

    // let newCat = new Cat({name: "boooo"})
    // newCat.save()
    // .then()
    // .catch()

    // Cat.create({name: "boooo"})
    // .then()
    // .catch()

    console.log("toString: ", newCat.toString());
    console.log("toObject", newCat.toObject());
    res.send("boo");
})

app.listen(port, ()=>console.log("listening to port 3000"));