import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update the time every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Format time to HH:MM:SS
    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="digital-clock">
            <h1>{formatTime(time)}</h1>
        </div>
    );
}

export default DigitalClock;
