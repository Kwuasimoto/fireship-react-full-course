import React from 'react';

const Countdown: React.FC<{hr: number, min: number, sec: number}> = ({hr, min, sec}) => {

    const [over, setOver] = React.useState(false);
    const [paused, setPaused] = React.useState(true);
    const [[h, m, s], setTime] = React.useState([hr, min, sec])

    const tick = () => {

        // Handle timer is paused or over
        if (paused || over)
            return;

        // Handle is over condition
        if(h === 0 && m === 0 && s === 0){
            setOver(true)
        } else if (m === 0 && s === 0){
            setTime([h - 1, 59, 59])
        } else if (s === 0){
            setTime([h, m - 1, 59])
        } else {
            setTime([h, m, s - 1])
        }
    }

    const handleReset = () => {
        setTime([hr, min, sec]);
        setPaused(true);
        setOver(false);
    }

    const handlePause = () => {
        setPaused(!paused)
    }

    const fmt = (time: number) => {
        return time.toString().padStart(2, '0')
    }

    React.useEffect(() => {
        let ticker = setInterval(tick, 1000)
        // Return handles the unmounting of the component.
        return () => {
            clearInterval(ticker)
        }
    })

    return <>
        <h3 className="countdown">{`${fmt(h)}:${fmt(m)}:${fmt(s)}`}</h3>
        <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
        <button onClick={handleReset}>Reset</button>
    </>;
};

export default Countdown;