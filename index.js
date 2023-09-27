// import json-server 
const jasonServer=require('json-server')


// create json server application
const server=jasonServer.create()


// setup a route for db.json
const router=jasonServer.router('db.json')


// return a middle wear used by json server
const middleware =jasonServer.defaults()


// setup a port number for server application
const port=process.env.port||3000


// use router and middleware in server app
server.use(middleware)
server.use(router)


// to listen the server app in port
server.listen(port,()=>{
    console.log('contact server app started at port ',port);
})