import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import customer1 from '../../assets/img/Customers/customer1.png';
import customer2 from '../../assets/img/Customers/customer2.png';
import customer3 from '../../assets/img/Customers/customer3.png';
import image1 from '../../assets/img/brands/image1.png';
import image2 from '../../assets/img/brands/image2.png';
import image3 from '../../assets/img/brands/image3.png';
import image4 from '../../assets/img/brands/image4.png';
import image5 from '../../assets/img/brands/image5.png';

const Reviews = () => {
	const carouselSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		swipeToSlide: true,
		nextArrow: <></>,
		prevArrow: <></>,
		appendDots: dots => (
			<div
				style={{
					backgroundColor: '#000',
					borderRadius: '10px',
					padding: '10px'
				}}
			>
				<ul style={{ margin: '0px' }}> {dots} </ul>
			</div>
		),
		customPaging: i => (
			<div>
				<div
					style={{
						width: '28px',
						display: 'flex',
						flexDirection: 'row',
						rowGap: '8px',
						color: 'white',
						height: '2px',
						backgroundColor: 'white'
					}}
				></div>
			</div>
		),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className='flex flex-col justify-center w-full mx-auto'>
			<div className='flex flex-row justify-center w-full gap-x-5'>
				<div className='text-[100px] font-semibold my-auto'>
					<p className='leading-none'>
						WHAT <span className='text-primary-color'>CLIENTS</span>
					</p>
					<p className='leading-none pt-4'>
						SAYS <span className='text-primary-color'>ABOUT</span> US
					</p>
				</div>
				<div>
					<p className='text-[200px] text-primary-color text-center font-semibold leading-tight'>
						?
					</p>
					<p className='text-sm '>MESSAGES FROM OUR CLIENTS</p>
				</div>
			</div>
			<div className='container mx-auto my-28'>
				<Slider {...carouselSettings}>
					{cards.map((card, index) => (
						<div key={index} className='p-4'>
							<Card {...card} />
						</div>
					))}
				</Slider>
			</div>
			<div className='flex flex-row justify-center gap-x-20 w-full '>
				<img src={image1} alt='' width={198} height={67} />
				<img src={image2} alt='' width={198} height={67} />
				<img src={image3} alt='' width={198} height={67} />
				<img src={image4} alt='' width={198} height={67} />
				<img src={image5} alt='' width={198} height={67} />
			</div>
		</div>
	);
};

const cards = [
	{
		img: customer1,
		title: 'JOSH',
		role: 'Content Writer'
	},
	{
		img: customer2,
		title: 'OLIVIA',
		role: 'Business Woman',
		description:
			'Figma ipsum component variant main layer. Mask flows style bullet clip frame. Style edit variant object bullet layout.',
		rating: 4
	},
	{
		img: customer3,
		title: 'DAVID',
		role: 'Fashion Designer'
	}
];

export default Reviews;

