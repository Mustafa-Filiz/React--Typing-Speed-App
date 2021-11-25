import React from 'react';
import { useSelector } from 'react-redux';

function Display() {
    const text = useSelector((state) => state.app.text);

    return (
        <div className="display">
            {text && text.map((p, index) => (
                <p key={index}>{p}</p>
            ))}
        </div>
    );
}

export default Display;
