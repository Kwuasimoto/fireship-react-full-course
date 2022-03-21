import React from 'react';

const Counter: React.FC = () => {

    const [count, setCount] = React.useState(0)
    const [prevCount, setPrevCount] = React.useState(0)

    const handleClick = () => {
        setCount(prev => {
            setPrevCount(prev)
            return count + 1
        })
    }

    return <>
        <h3>Current count: {count}</h3>
        <h3>Previous count: {prevCount}</h3>
        <button onClick={handleClick}>Increment</button>
    </>;
};

export default Counter;