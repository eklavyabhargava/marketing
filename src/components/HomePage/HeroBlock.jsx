import DownArrow from '../../../assets/img/DownArrow';
import HeroImage from '../../assets/img/hero-bg.png';

const HeroBlock = () => {
	return (
		<div className='w-full h-[40vh] md:h-[70vh] flex flex-col justify-start md:justify-center'>
			<div className='flex w-full md:w-[80%] justify-center mx-auto'>
				<img src={HeroImage} alt='' width='100%' />
			</div>
			<div className='text-center text-white flex flex-row justify-center gap-x-6 mt-4 mx-4'>
				<div className='my-auto'>
					Modern <span className='text-[#E26E23]'>Problem</span> Requires Modern{' '}
					<span className='text-[#E26E23]'>Solution</span>
				</div>
				<button className='bg-[#E26E23] flex flex-row gap-x-2 px-3 py-1 rounded-2xl'>
					Let's Connect <DownArrow size='14px' />
				</button>
			</div>
		</div>
	);
};

export default HeroBlock;

