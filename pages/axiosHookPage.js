import React from 'react';
import Jokes from '../components/Jokes';
import Posts from '../components/Posts';

function axiosHookPage() {
	return (
		<div className="container mx-auto mt-20">
			<Jokes />
			<Posts />
		</div>
	);
}

export default axiosHookPage;
