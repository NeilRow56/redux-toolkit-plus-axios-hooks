/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { EmployeeService } from '../services/EmployeeService';

function Employees() {
	let [state, setState] = useState({
		employees: EmployeeService.getAllEmployees(),
	});

	let { employees } = state;
	let updateSelected = (empId) => {
		let selectedEmployees = employees.map((employee) => {
			if (employee.id === empId) {
				return {
					...employee,
					isSelected: !employee.isSelected,
				};
			} else return employee;
		});
		setState({
			...state,
			employees: selectedEmployees,
		});
	};

	return (
		<>
			<div className="container   h-screen mx-auto">
				<div className="flex mt-24 mx-40 w-fit ">
					<div flex flex-col>
						<p className=" m-5 text-3xl text-blue-400">Employees</p>
						<p className="m-5">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Pariatur incidunt, praesentium maiores vel
							voluptates odio neque. Eaque laboriosam fuga minus
							distinctio quidem ipsum quisquam. Sunt dicta quia
							ullam ipsum est! Quod maiores doloremque maxime
							autem in nihil hic deserunt, dolorum quae aliquid!
							Inventore ex, eum sequi rem nesciunt officiis.
							Repudiandae?
						</p>
					</div>
				</div>
				<div className="flex w-full">
					<div className="flex flex-col  w-1/2 mx-40 my-6">
						{' '}
						<ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
							{employees.length > 0 &&
								employees.map((employee) => {
									return (
										<li
											key={employee.id}
											className='px-6 py-2 border-b border-gray-200 w-full"'
										>
											<input
												onChange={() =>
													updateSelected(employee.id)
												}
												type="checkbox"
												className="mr-3"
											/>
											{employee.name}
										</li>
									);
								})}
						</ul>
					</div>
					<div className="flex flex-col  mx-40 my-6 w-1/2">
						{' '}
						{employees.length > 0 &&
							employees.map((employee) => {
								return (
									<div key={employee.id}>
										{employee.isSelected && (
											<div className="flex justify-center ">
												<div className="block p-6 rounded-lg shadow-lg border-gray-100 border-2 my-2 bg-white w-[400px] max-w-sm">
													<h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
														Employee Details
													</h5>
													<ul>
														<li>
															Name:{' '}
															<span className="font-semibold">
																{' '}
																{employee.name}
															</span>
														</li>
														<li>
															Name:{' '}
															<span className="font-semibold">
																{' '}
																{employee.email}
															</span>
														</li>
													</ul>
												</div>
											</div>
										)}
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Employees;
