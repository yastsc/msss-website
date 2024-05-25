import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import Navbar from "./components/Navbar/navbarR";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import AboutMS from "./pages/aboutms";
import AboutMSSS from "./pages/aboutmsss";
import MSCares from "./pages/mscares";
import Contact from "./pages/contact";
import MSSSMembers from "./pages/msssmembers";
import Media from "./pages/media";

// routes are for routing to and loading page content upon clicks
function App() {

  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route 
            path="/home" 
            element={<Home />} />
            <Route
                path="/aboutms"
                element={<AboutMS />}
            />
            <Route
                path="/aboutmsss"
                element={<AboutMSSS />}
            />
            <Route path="/msssmembers" element={<MSSSMembers />} />
            <Route path="/mscares" element={<MSCares />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </div>
);
}

  /* const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1> Hello World </h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) */

export default App;