import React from 'react';
import Image from 'next/image';

function HomePage() {
	return (
		<div className=" bg-white flex-col flex h-screen items-center justify-center">
			<div className="flex flex-col">
				<Image
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLkveyaKoMPUHIMwL2C9TCGqNn-HVgFM7PQ&usqp=CAU"
					alt=""
					width={500}
					height={200}
				></Image>
			</div>
			<span className="bg-white flex">
				<h2 className="text-5xl ">Crash Course </h2>
				<h2 className="text-5xl font-bold ml-5"> 2022</h2>
			</span>
		</div>
	);
}

export default HomePage;
