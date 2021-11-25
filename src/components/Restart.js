import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWordsAsync } from '../redux/appSlice';

function Restart() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(fetchWordsAsync())}>Restart</button>
        </div>
    );
}

export default Restart;
