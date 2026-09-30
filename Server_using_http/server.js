const http = require("http")
port1=5000
http.createServer((req,res)=>{
    if(req.url=="/"){
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
    
    res.end()
}).listen(port1);

