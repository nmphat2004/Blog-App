import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const BlogList = () => {
	const blogCategories = [
		'All',
		'Technology',
		'Startup',
		'Lifestyle',
		'Finance',
	];

	const [menu, setMenu] = useState('All');

	return (
		<div>
			<div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
				{blogCategories.map((item) => (
					<div key={item} className='relative'>
						<button
							onClick={() => setMenu(item)}
							className={
								menu === item
									? 'text-white px-4 pt-0.5 cursor-pointer'
									: 'text-gray-500 cursor-pointer'
							}>
							{item}
							{menu === item && (
								<motion.div
									layoutId='underline'
									transition={{ type: 'spring', stiffness: 500, damping: 30 }}
									className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'></motion.div>
							)}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;
