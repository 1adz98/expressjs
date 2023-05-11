const express = require("express");
 const router = express.Router();

router.use(loggs)

router.get("/",(req,res)=>{
    res.send("Users list");
})
router.get("/new",(req,res)=>{
    res.render("users/new");
})

router.post("/",(req,res)=>{
    const isValid = true
    if(isValid){
        users.push({firstName : req.body.firstName})
        res.redirect(`/users/${users.length-1}`)
    }else{
        console.log("ERROR");
        res.render("users/new",{firstName:req.body.firstName})
    }
   
    res.send("Hi")
})

router.route("/:id").get((req,res)=>{
   console.log(req.user);
    res.send(`User GET with ID ${req.params.id}`)
}).put((req,res)=>{
    res.send(`Update GET user with ID ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`DELETE User GET with ID ${req.params.id}`)
})

const users = [{name:"Heri"},{name:"Ladi"}]

router.param("id",(req,res,next,id)=>{
    // console.log(id);
    req.user = users[id]
    next();
})


function loggs(req,res,next){
    console.log(req.originalUrl);
    next();
    }
// router.get("/:id",(req,res)=>{
//     res.send(`User GET with ID ${req.params.id}`)
// })

// router.put("/:id",(req,res)=>{
//     res.send(`Update GET user with ID ${req.params.id}`)
// })

// router.delete("/:id",(req,res)=>{
//     res.send(`DELETE User GET with ID ${req.params.id}`)
// })

module.exports = router