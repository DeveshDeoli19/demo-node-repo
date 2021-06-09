const http = require('http')

//two parameters, both are objects and we can call them anything.
/*
1. first parameter represents the incoming request.
2. second parameter is response, what the server will send to client.
*/
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`<h1 style="font-size:3rem; color:blue;text-align:center">Homepage</h1> <a href="/about">about</a>`)
    }
    else if(req.url === '/about'){
        res.end(`<h1 style="font-size:3rem; color:blue;text-align:center">About Page</h1> 
         <a href="/otherpage">Other page</a>
         <a href="/">Home page</a>
         `)
    }
   else{res.end(
        `<h1 style="font-size:3rem; color:blue;text-align:center">OOPS!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>`
    )
   }

})

//listen to the portnumber.
server.listen(5000)