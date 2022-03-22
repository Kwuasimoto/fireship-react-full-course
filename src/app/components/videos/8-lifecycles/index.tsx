/**
 * [008] React Component Life Cycles
 */

import React from 'react';
import Countdown from "./Countdown";

const LifeCycles: React.FC = () => {
    return <>
        <h1>Video 8: Life Cycles</h1>
        <Countdown hr={1} min={30} sec={10}/>
    </>;
};

export default LifeCycles;