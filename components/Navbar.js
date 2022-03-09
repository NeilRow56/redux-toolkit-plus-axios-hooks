import React from 'react';
import Link from 'next/link';

function Navbar() {
	return (
		<nav className="flex w-full h-[40px] items-center  bg-gray-900 text-white ">
			<div className="flex w-[200px] h-5 items-center bg-gray-900 text-red-600 ml-10 cursor-pointer">
				<Link href="/">
					<a className="text-[20px] font-bold text-white">
						Redux-Toolkit
					</a>
				</Link>
			</div>
			<div>
				<ul className="flex  ">
					<li className="px-5">
						<Link href="/employees" className="">
							<a> Employees</a>
						</Link>
					</li>
					<li className="px-5">
						<Link href="/counter" className="">
							<a> Counter</a>
						</Link>
					</li>
					<li className="px-5">
						<Link href="/users" className="">
							<a> Users</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
