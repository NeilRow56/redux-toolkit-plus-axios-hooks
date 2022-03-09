import axios from '../pages/api/jsonPlaceholder';
import useAxiosFunction from '../hooks/useAxiosFunction';
import { useEffect } from 'react';
import { ArticleOutlined } from '@mui/icons-material';

const Posts = () => {
	const [posts, error, loading, axiosFetch] = useAxiosFunction();

	const getData = () => {
		axiosFetch({
			axiosInstance: axios,
			method: 'GET',
			url: '/posts',
		});
	};

	const handleSubmit = () => {
		axiosFetch({
			axiosInstance: axios,
			method: 'POST',
			url: '/posts',
			requestConfig: {
				data: {
					userId: '10',
					title: 'axios Stuff',
					body: 'axios hook stuff',
				},
			},
		});
	};

	useEffect(() => {
		getData();
		//eslint-disable-next-line
	}, []);
	return (
		<article>
			<h2 className="text-2xl font-semibold text-blue-400 ">Posts</h2>

			<div className="row">
				<button
					className="bg-blue-400 mr-3 rounded-md text-white px-3"
					onClick={handleSubmit}
				>
					Submit
				</button>
				<button
					className="bg-red-400 rounded-md px-3 text-white"
					onClick={getData}
				>
					Refetch
				</button>
			</div>
			{loading && <p>Loading...</p>}

			{!loading && error && <p>{error}</p>}

			{!loading && !error && posts?.length && (
				<ul>
					{posts.map((post, index) => (
						<li key={index}>{`${post.id}. ${post.title}`}</li>
					))}
				</ul>
			)}

			{!loading && !error && !posts?.length && posts?.data && (
				<p>{`userId: ${posts.data?.userId}, title: ${posts.data?.title}, body: ${posts.data?.body}`}</p>
			)}

			{!loading && !error && !posts && <p>No posts to display</p>}
		</article>
	);
};

export default Posts;
