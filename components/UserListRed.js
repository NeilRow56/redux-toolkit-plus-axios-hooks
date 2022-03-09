import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../slices/user-list-feature';

let UserListRed = () => {
	let dispatch = useDispatch();

	//get data from Redux Store
	let userState = useSelector((store) => {
		return store['users'];
	});

	useEffect(() => {
		dispatch(getUsers()); // dispatch action
	}, [dispatch]);

	let { loading, errorMessage, users } = userState;

	return (
		<>
			<div className="container mx-auto">
				<div className="flex flex-col">
					<p className="text-3xl text-blue-400 mt-3">UserList</p>
					<p className="mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Omnis error, vitae voluptate vel et rerum voluptatum,
						ipsum non laborum ad corporis nulla, delectus
						reprehenderit amet odio eos aliquam sit distinctio
						nesciunt tempora neque molestiae. Inventore excepturi
						facere natus, ex perspiciatis pariatur mollitia
						voluptatibus libero. Doloribus magnam assumenda
						veritatis veniam sint.
					</p>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-col">
						{loading && <h2 className="font-bold">...Loading</h2>}
						{!loading && (
							<h3 className="text-danger">{errorMessage}</h3>
						)}
						{!loading && users.length > 0 && (
							<table className="table-auto table-hover   mt-5">
								<thead className="bg-gray-900 text-white text-left">
									<tr className="">
										<th className="px-2">SNO</th>
										<th className="px-2">Name</th>
										<th className="px-2">Email</th>
										<th className="px-2">Website</th>
										<th className="px-2">Company</th>
										<th className="px-2">Location</th>
									</tr>
								</thead>
								<tbody>
									{users.map((user) => {
										return (
											<tr
												key={user.id}
												className="odd:bg-white even:bg-gray-200 "
											>
												<td className="px-2">
													{user.id}
												</td>
												<td className="px-2">
													{user.name}
												</td>
												<td className="px-2">
													{user.email}
												</td>
												<td className="px-2">
													{user.website}
												</td>
												<td className="px-2">
													{user.company.name}
												</td>
												<td className="px-2">
													{user.address.city}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default UserListRed;
