import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	increment,
	decrement,
	incrementBy,
	reset,
} from '../slices/counterSlice';

let CounterRed = () => {
	let dispatch = useDispatch();

	// get data from Redux Store
	const count = useSelector((state) => state.counter.value);
	// let counterState = useSelector((state) => {
	// 	return state['counter'];
	// });

	// let { value } = counterState;

	let clickIncrement = () => {
		dispatch(increment());
	};

	let clickDecrement = () => {
		dispatch(decrement());
	};

	let clickIncrementBy = () => {
		dispatch(incrementBy(5));
	};
	let clickReset = () => {
		dispatch(reset());
	};

	return (
		<div className="flex ">
			<div className="flex flex-col mt-24 ml-10 rounded-lg h-[120px] w-1/2 border-2 border-red-400 ">
				<div className="m-1 mt-5">
					<h2
						className="ml-3 
            text-5xl"
					>
						{count}
					</h2>
					<button
						onClick={clickIncrement}
						className="m-2 bg-green-700 hover:bg-green-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-1 text-white"
					>
						Increment
					</button>
					<button
						onClick={clickDecrement}
						className="m-2 p-1 text-white bg-amber-600 hover:bg-amber-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md"
					>
						Decrease
					</button>
					<button
						onClick={clickIncrementBy}
						className="m-2 p-1 bg-red-700 text-white hover:text-black hover:bg-red-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md"
					>
						Increment by 5
					</button>
					<button
						onClick={clickReset}
						className="m-2 ml-10 p-1 bg-blue-700 text-white hover:text-black hover:bg-red-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md"
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default CounterRed;
