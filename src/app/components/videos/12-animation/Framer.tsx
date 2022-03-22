import React from 'react';
import {motion} from 'framer-motion'

const Framer: React.FC = () => {
    return <>
        <h3 style={{marginLeft:"90px"}}>Drag Me!</h3>
        <motion.div
            style={{
                height: "3rem",
                width: "3rem",
                backgroundColor: "#1a60b7",
                marginLeft: "100px"
            }}
            drag="x"
            dragConstraints={{left:0, right: 100}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        />
    </>;
};

export default Framer;