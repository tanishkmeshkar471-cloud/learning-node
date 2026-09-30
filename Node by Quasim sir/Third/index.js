// npm init to manually setup package.json
// npm init -y to directly setup package.json

// express is a framework of node that is used to handle api's and by default it creates server 
PORT=7009 
const express=require("express") // import
const app =express()             // initialize
app.listen(PORT,()=>console.log(`server running http://localhost:${PORT}`))j