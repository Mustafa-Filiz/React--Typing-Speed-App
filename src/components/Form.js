import React, { useState } from 'react';
import InputArea from './InputArea';
import Restart from './Restart';
import Timer from './Timer';

function Form() {

	const [timer, setTimer] = useState(60)

	let interval = setInterval(() => {
		setTimer((prevState) => {
			if(prevState === 0){
				clearInterval(interval)
				return 60
			}else{
				return prevState - 1
			}
		})
	}, 1000)

    return (
        <div className="form">
            <InputArea interval={interval} />
            <Timer timer={timer}  />
            <Restart />
        </div>
    );
}

export default Form;
