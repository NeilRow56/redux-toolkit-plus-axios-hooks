import React from 'react';
import useAxios from '../hooks/useAxios';
import axios from '../pages/api/dadJokes';

const Jokes = () => {
	const [joke, error, loading, refetch] = useAxios({
		axiosInstance: axios,
		method: 'GET',
		url: '/',
		requestConfig: {
			headers: {
				'Content-Language': 'en-US',
			},
		},
	});

	return (
		<article>
			<h2 className="text-2xl font-semibold text-blue-400 ">
				Random Dad Joke
			</h2>
			{loading && <p>Loading...</p>}

			{!loading && error && <p>{error}</p>}

			{!loading && !error && <p>{joke?.joke}</p>}

			{!loading && !error && !joke && <p>No dad joke to display.</p>}
			<button
				onClick={() => refetch()}
				className="bg-blue-400 text-white mt-10"
			>
				Get Joke
			</button>
		</article>
	);
};

export default Jokes;
