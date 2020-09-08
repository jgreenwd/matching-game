import React from 'react';

function Timer (props) {
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        if (props.status) {
            const timer = setInterval( () => {
                setTime(time + 1);
            }, 1000);
        return () => clearInterval(timer);
        }
    });

    return ( <span style={{width: '100px', marginLeft: '20px'}}>Time: {Math.floor(time)}</span> );
}

export default Timer;
