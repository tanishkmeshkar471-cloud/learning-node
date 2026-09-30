const http=require("http")
port2=5050
http.createServer((req,res)=>{
    if(req.url=="/" || req.url=="/home"){
        res.write("home page")
    }
    
    else if(req.url=="/about"){
        res.write("about page")
    }

    else if(req.url=="/product"){
        res.write("product page")
    }

    else if(req.url=="/book"){
        res.write("book page")
    }

    else if(req.url=="/contact"){
        res.write("contact page")
    }
    else{
        res.write("server not found")
    }
    res.end()
}).listen(port2);