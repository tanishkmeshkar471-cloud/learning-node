let http=require('http')
const server=http.createServer((req,res)=>{
    res.write("hii")
    res.end()
})

server.listen(1234)