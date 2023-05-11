const express = require("express");
const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs")


// app.get("/",logger,(req,res)=>{
//     res.render("index", 
//     { text:"Renderi u krye me sukses" })
// });

// app.use(logger);
const userRouter = require("./routes/users");

app.use("/users",userRouter)

// app.get("/contact",(req,res)=>{
//     res.send("Hello There")
// })


app.listen(3000,()=>{
    console.log("Server running at port 3000");
})