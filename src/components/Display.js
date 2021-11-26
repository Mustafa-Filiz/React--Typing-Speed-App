import React from 'react';
import { useSelector } from 'react-redux';
import { textSelector, typingSelector } from '../redux/appSlice';

function Display() {
    const text = useSelector(textSelector);
    const typing = useSelector(typingSelector);

    return (
        <div className="display">
            {text &&
                text.map((p, index) => (
                    <p
                        key={index}
                        className={p === typing ? 'highlight' : ''}
                    >
                        {p}
                    </p>
                ))}
        </div>
    );
}

export default Display;
