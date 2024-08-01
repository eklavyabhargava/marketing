import Prod1 from '../../assets/img/testimonials/product1.png';
import Prod2 from '../../assets/img/testimonials/product2.png';
import Prod3 from '../../assets/img/testimonials/product3.png';
import Prod4 from '../../assets/img/testimonials/product4.png';
import Prod5 from '../../assets/img/testimonials/product5.png';
import Prod6 from '../../assets/img/testimonials/product6.png';
import Prod7 from '../../assets/img/testimonials/product7.png';

const Testimonial = () => {
	return (
		<div className='mt-[15%] w-full'>
			<p className='text-primary-color text-[100px] font-semibold pl-28 leading-none '>
				RESULT TELLS
			</p>
			<div className='bg-primary-color pb-14'>
				<p className='text-[100px] font-semibold pl-28 leading-none'>MORE ABOUT US</p>
				<div className='flex flex-col pt-20 gap-y-8 text-white'>
					<div className='grid grid-cols-3 gap-12 mx-20 '>
						{Testimonials.map((testimonial, index) => (
							<div key={index} className='aspect-square my-auto'>
								{testimonial}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const Testimonials = [
	<img src={Prod1} alt='' className='w-[90%] h-[90%] object-cover' />,
	<img src={Prod2} alt='' className='w-[90%] h-[90%] object-cover' />,
	<div className='flex flex-col justify-center h-full mx-12'>
		<p className='text-2xl pb-3 font-semibold'>CREATE YOUR BRAND</p>
		<p>
			Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate
			connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows
			rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline.
			Opacity rectangle frame flatten image group link.
		</p>
	</div>,
	<img src={Prod3} alt='' className='w-[90%] h-[90%] object-cover' />,
	<img src={Prod4} alt='' className='w-[90%] h-[90%] object-cover' />,
	<img src={Prod5} alt='' className='w-[90%] h-[90%] object-cover' />,
	<div className='flex flex-col justify-center h-full mx-12'>
		<p className='text-2xl pb-3 font-semibold'>MAKE IT FAMOUS</p>
		<p>
			Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate
			connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows
			rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline.
			Opacity rectangle frame flatten image group link.
		</p>
	</div>,
	<img src={Prod6} alt='' className='w-[90%] h-[90%] object-cover' />,
	<img src={Prod7} alt='' className='w-[90%] h-[90%] object-cover' />
];

export default Testimonial;

