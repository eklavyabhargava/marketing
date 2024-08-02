import img1 from '../../assets/img/articles/img1.png';
import img2 from '../../assets/img/articles/img2.png';
import img3 from '../../assets/img/articles/img3.png';
import img4 from '../../assets/img/articles/img4.png';
import img5 from '../../assets/img/articles/img5.png';
import img6 from '../../assets/img/articles/img6.png';
import img7 from '../../assets/img/articles/img7.png';
import DownArrow from '../../assets/img/DownArrow';

const Articles = () => {
	return (
		<div className='mx-auto '>
			<p className='text-[100px] font-semibold leading-tight text-center mb-2'>
				WHAT OUR NEW <br />
				<span className='text-primary-color'>ARTICLES</span> ?
			</p>
			<div className='grid grid-cols-5 items-stretch'>
				<img src={img1} alt='' width='100%' className='row-span-2 col-span-2' />
				<img src={img2} alt='' width='100%' className='col-span-2' />
				<img src={img3} alt='' width='100%' className='' />
				<img src={img4} alt='' width='100%' className='' />
				<div className='relative col-span-2 row-span-3 h-full w-full'>
					<img src={img5} alt='' className='w-full h-full object-cover' />
					<div className='absolute inset-0 w-full'>
						<div className='text-center mx-4 h-full flex flex-col items-center justify-center px-16 text-white bg-[#00000066]'>
							<p className='text-4xl font-bold'>CURRENT UI TRENDS</p>
							<p className='text-xl my-4 break-words w-full '>
								Figma ipsum component variant main layer. Pencil style scrolling shadow blur
								scrolling list. Undo thumbnail vector outline ellipse. Content polygon layout shadow
								distribute scale. Style variant move component follower pen layout. Project line
								select draft select prototype. Style variant move component follower pen layout.
								Project line select draft select prototype. Style variant move component follower
								pen layout. Project line select draft select prototype.
							</p>
							<button className='bg-primary-color mx-auto flex flex-row px-3 py-2 rounded-3xl gap-x-1'>
								Read More <DownArrow />
							</button>
						</div>
					</div>
				</div>

				<img src={img6} alt='' width='100%' className='' />
				<img src={img7} alt='' width='100%' className='col-span-2' />
			</div>
		</div>
	);
};

export default Articles;

