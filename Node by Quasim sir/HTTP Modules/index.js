let http=require("http")
let PORT=5050
let server= http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.write("<h1> home page </h1>")
        res.end()
    }
    else if(req.url=="/about"){
        res.write("<h1>about page</h1>")
        res.end()
    }
    else if(req.url=="/contact"){
        res.write("<h1> contact page </h1>")
        res.end()
    }
    else if(req.url=="/login"){
        res.write("<h1> login page </h1>")
        res.end()
    }
    else if(req.url=="/signup"){
        res.write("<h1> signup page </h1>")
        res.end()
    }

})
server.listen(PORT,()=>console.log(`server running on PORT ${PORT}`))