import React from 'react';
import {DeepComponentContext} from "./DeepComponentProvider";

const DeepComponent: React.FC = () => {

    const {count, setCount} = React.useContext(DeepComponentContext)

    const handleClick = () => {
        setCount(count + 1)
    }

    return <>
        <h3>Current count: {count}</h3>
        <button onClick={handleClick}>Increment With Context</button>
    </>;
};

export default DeepComponent;