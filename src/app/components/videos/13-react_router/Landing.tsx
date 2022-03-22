import React from 'react';
import {Link} from "react-router-dom";

const Landing: React.FC = () => {
    return <>
        <Link to="/about">Go To About 🧾</Link>
        <h3>Landing Page Render with React Router! ☄️</h3>
    </>;
};

export default Landing;