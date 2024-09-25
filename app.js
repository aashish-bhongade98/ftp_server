const express = require('express')
const serveIndex = require('serve-index') // act as middleware to serve the drectory
//const path = requie('path')

const app = express()

app.use(
    "/ftp",   // this code server the whole public folder, all the files in sub folders
    express.static('public'),
    serveIndex('public', {icons:true}),
    
)
// no need of below

// app.use(
//     "/ftp/ftp",   //any requests to /ftp or any subdirectories of /ftp will be handled by the middleware functions specified.
//     express.static('public/ftp' ), //middleware function that serves static files from the public directory.
//     serveIndex( 'public/ftp' , {icons:true, hidden: true})
// )
// app.use(
//     "/ftp/js",   //any requests to /ftp or any subdirectories of /ftp will be handled by the middleware functions specified.
//     express.static('public/js' ), //middleware function that serves static files from the public directory.
//     serveIndex( 'public/js' , {icons:true, hidden: true})
// )

// app.use(
//     "/ftp/img",   //any requests to /ftp or any subdirectories of /ftp will be handled by the middleware functions specified.
//     express.static('public/img' ), //middleware function that serves static files from the public directory.
//     serveIndex( 'public/img' , {icons:true, hidden: true})
// )

// app.use(
//     "/ftp/css",   //any requests to /ftp or any subdirectories of /ftp will be handled by the middleware functions specified.
//     express.static('public/css' ), //middleware function that serves static files from the public directory.
//     serveIndex( 'public/css' , {icons:true, hidden: true})

// )



app.get("/", (req, res)=>{

    res.json("root page")
})



const port =3000
app.listen(port, ()=>{
    console.log(`server runnin on port ${port}`)
})