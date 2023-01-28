const mysql= require("mysql");
const express= require("express");

const app=express();

const connection = mysql.createConnection({
    host:"localhost",
    user:"users",
    port:8889,
    password:"komal",
    database:"login"
});

connection.connect(function(error){
    if(error) throw error;
    else console.log("connected to the database.");
});

app.get('/',function(req,res){
    res.sendFile(__dirname +"/index.html");
})
app.listen(3000)