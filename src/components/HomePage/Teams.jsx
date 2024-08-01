import DownArrow from '../../../assets/img/DownArrow';
import img1 from '../../assets/img/teams/image1.png';
import img2 from '../../assets/img/teams/image2.png';
import img3 from '../../assets/img/teams/image3.png';
import img4 from '../../assets/img/teams/image4.png';
import img5 from '../../assets/img/teams/image5.png';

const Teams = () => {
	return (
		<div className='w-full px-9 mt-16 block'>
			<div className='grid grid-cols-3 mx-auto w-[70%] gap-10 '>
				<p className='text-5xl col-span-2'>
					<span className='text-8xl font-semibold'>
						THE MINDS <br />
						<span className='text-primary-color'>BEHIND</span>
					</span>{' '}
					<br />{' '}
					<p className='flex flex-row gap-x-3'>
						OUR <span className='text-primary-color'>CREATIVE</span> TEAM
						<div className='self-center'>
							<button className='px-2 py-1 rounded-3xl text-base bg-primary-color flex flex-row flex-nowrap gap-x-1'>
								Explore More
								<DownArrow />
							</button>
						</div>
					</p>
				</p>
				<img src={img1} alt='' width='100%' />
				<img src={img2} alt='' width='100%' height='100%' className='row-span-2' />
				<img src={img3} alt='' width='100%' />
				<img src={img4} alt='' width='100%' />
				<img src={img5} alt='' width='100%' className='col-span-2' />
			</div>
		</div>
	);
};

export default Teams;

