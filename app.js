require("dotenv").config()

const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

io.on("connection",(socket) => {
    socket.emit("connect",{"message":"A Client Connected"})


    socket.on("chat",message => {
        io.emit("chat",message)
    })

    socket.on("disconnect",() => {
        console.log("User Disconnected");
    })
})

app.listen((error) => {
    if(!error){
        console.log("Listen on PORT: " + process.env.PORT)
    }
    else{
        console.log("Something went wrong")
    }
})