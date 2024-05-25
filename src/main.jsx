import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";
import Header from "./header";
import Footer from "./footer";
 
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <React.StrictMode>
      <div className="main-container">
        <Header />
        <div style={{ paddingBottom: "3rem"}}> <App /> </div>
        </div>
        <Footer />
    </React.StrictMode>
);



/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
) */
