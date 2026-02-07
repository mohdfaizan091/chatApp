import React from "react";
import {useEffect} from "react";
import { io } from "socket.io-client";

function App() {  
  const socket = io("http://localhost:3000");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected-id", socket.id);
    });

    socket.on("welcome", (msg) => {
      console.log(msg)
    })
  }, []);
  return (
    <>
      <h1>hello world</h1>
    </>
  )
}

export default App
