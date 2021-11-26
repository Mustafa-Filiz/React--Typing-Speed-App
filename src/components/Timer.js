import React from 'react'
import { useSelector } from 'react-redux'
import { timerSelector } from '../redux/appSlice'

function Timer({timer}) {

	// const timer = useSelector(timerSelector)

	return (
		<div>
			{timer}
		</div>
	)
}

export default Timer
