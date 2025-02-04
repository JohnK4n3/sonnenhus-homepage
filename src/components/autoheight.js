import React, { useEffect } from 'react';

const AutoHeight = () => {
    useEffect(() => {
        const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        const eventer = window[eventMethod];
        const messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

        const handleMessage = (e) => {
            if (e.data.indexOf('resize_booking::') !== -1) {
                const height = e.data.replace('resize_booking::', '');
                document.getElementById('bookingFrame').style.height = height + 'px';
            }
        };

        eventer(messageEvent, handleMessage, false);

        return () => {
            window.removeEventListener(messageEvent, handleMessage);
        };
    }, []);

    return (
        <iframe id="bookingFrame" src="https://widget.fewomanager.cloud/booking/4488#R3636" style={{ width: '100%', height: '100%' }} />
    );
};

export default AutoHeight;