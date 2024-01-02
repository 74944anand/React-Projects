const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"user"
})

con.connect((err)=>{
    if(err) throw err
    else{
        console.log("Connected");
    } 

   
})

module.exports=con;