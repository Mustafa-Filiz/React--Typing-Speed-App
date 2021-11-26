import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countdown, setTyping, typingSelector } from '../redux/appSlice';

function InputArea({interval}) {
    const dispatch = useDispatch();
    const typing = useSelector(typingSelector);

    return (
        <div>
            <input
                type="text"
                value={typing}
                onChange={(e) => dispatch(setTyping(e.target.value))}
				onKeyDown={() => interval()}
            />
        </div>
    );
}

export default InputArea;
