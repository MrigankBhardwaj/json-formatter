import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root');
const createRot = ReactDOM.createRoot(root);

function MainFile(){
  return (
    <>
      <App />
    </>
  ) 
  
}

createRot.render(<MainFile/>)
