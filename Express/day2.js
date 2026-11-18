let express=require("express");
let apps=express();
apps.get('/',(req,res)=>{
    res.send("hello");
});
apps.get('/about',(req,res)=>{
    console.log("request"+req.query.name);
    
    res.send("this is about page")
});
apps.get('/service',(req,res)=>{
    res.send("this is a service page");

});
apps.listen(1234,()=>{
    console.log("server is running");
})