import React from 'react';
import About from "./About";
import Landing from "./Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const ReactRouter: React.FC = () => {
    return <BrowserRouter>
        <h1>Video 13: React Router</h1>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
};

export default ReactRouter;