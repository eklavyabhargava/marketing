import React from 'react';

const Card = ({ img, title, role, description, rating }) => {
	return (
		<div className='h-full'>
			<div className='flex flex-row '>
				<div className='h-[5vh] flex self-end rounded-tl-3xl w-[40%] bg-primary-color'></div>
				<div className='h-[8vh] origin-bottom-left rotate-[-35deg] w-[60%] bg-black'></div>
			</div>
			<div className='bg-primary-color rounded-3xl rounded-tl-none flex flex-row '>
				<div className='w-[50%]'>
					<img
						src={img}
						alt={title}
						style={{ height: '360px', width: '360px' }}
						className='rounded-3xl '
					/>
				</div>
				<div className='flex items-center w-[50%]'>
					<div className='flex flex-col'>
						{title && <p className='text-[60px] font-semibold leading-tight'>{title}</p>}
						{role && <p className='font-light'>{role}</p>}
						{description && <p className='mt-4'>{description}</p>}
						<div className='flex flex-row flex-nowrap gap-x-4 text-2xl mt-3'>
							{rating &&
								Array.from({ length: 5 }, (_, index) => (
									<span key={index} className={`${rating > index ? 'text-black' : 'text-white'}`}>
										*
									</span>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

