import React from 'react';
import DeepComponent from "./DeepComponent";

const ContextAPI: React.FC = () => {
    /**
     * Notice how this log is not shown!
     * Passing a setState action function through context
     * will only affect the components that use the function
     */

    console.log("Deep Component Rendering")
    return <>
        <h1>Video 9: Context API</h1>
        <DeepComponent/>
    </>;
};

export default ContextAPI;