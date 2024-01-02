const express= require ("express");
const con= require ("./config");
const cors= require("cors");
const bodyParser = require('body-parser');
const app= express();

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    
    const qry="select * from admin";

    con.query(qry,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
        
    })
})

app.post("/",(req,res)=>{
    const {email,pass}=req.body;

    const qry="select * from admin where email=?";

    con.query(qry,email,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            if(result[0]!= null){
                var user=result[0];
                if(user.password===pass){
                    res.send(email)
                }
                else{
                    res.send("Login Failed")
                }
            }
        }
        
    })
})

app.get("/users", (req,res)=>{
    
    qry="select * from users";

    con.query(qry,(err,result)=>{
        if(err){
            res.send(err);
            res.status(500)
        }
        else{
            res.send(result).status(200);
        }

    })
})

app.post("/users",(req,res)=>{
    const {fname,lname,addr,pin}=req.body;

    const qry="insert into users values(?,?,?,?)";

    con.query(qry,[fname,lname,addr,pin],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }
        else{
            if(result[0]!= null){
                var user=result[0];
                if(user.password===pass){
                    res.send(email)
                }
                else{
                    res.send("Login Failed")
                }
            }
        }
        
    })
})




app.listen(5000);
