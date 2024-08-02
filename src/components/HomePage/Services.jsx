import DownArrow from '../../assets/img/DownArrow';
import ServiceBG from '../../assets/img/services-block/service-bg.png';
import Service1 from '../../assets/img/services-block/service1.png';
import Service2 from '../../assets/img/services-block/service2.png';
import UpArrow from '../../assets/img/UpArrow';

const Services = () => {
	return (
		<div className='flex justify-center'>
			<div className='flex flex-col gap-y-28'>
				<div className='w-full flex flex-row justify-center'>
					<img src={ServiceBG} alt='' width='70%' />
				</div>
				<div className='flex flex-row w-[90%] md:w-[80%] mx-auto justify-between '>
					<div className='flex flex-col gap-y-24 w-[55%]'>
						{ServiceList1.map((service, index) => (
							<div key={index} className='flex flex-row gap-x-5'>
								<div className='text-primary-color font-medium text-6xl'>
									{index < 10 ? '0' : ''}
									{index + 1}
								</div>
								<div className='text-white'>
									<p className='text-3xl font-medium my-[12px]'>{service.title}</p>
									<p className='mt-3'>{service.description}</p>
									<div className='sm:w-[95%] md:w-full mt-4 flex justify-end'>
										{service.otherComponent}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='w-[40%] my-auto'>
						<img src={Service1} alt='' width='100%' />
					</div>
				</div>

				<div className='flex flex-row w-[90%] md:w-[80%] mx-auto justify-between '>
					<div className='w-[40%] my-auto'>
						<img src={Service2} alt='' width='100%' />
					</div>
					<div className='flex flex-col gap-y-24 w-[55%]'>
						{ServiceList2.map((service, index) => (
							<div key={index} className='flex flex-row gap-x-5'>
								<div className='text-primary-color font-medium text-6xl'>
									{index < 10 ? '0' : ''}
									{index + 1 + ServiceList1.length}
								</div>
								<div className='text-white'>
									<p className='text-3xl font-medium my-[12px]'>{service.title}</p>
									<p className='mt-3'>{service.description}</p>
									<div className='sm:w-[95%] md:w-full mt-4 flex justify-end'>
										{service.otherComponent}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const ServiceList1 = [
	{
		title: 'SOCIAL MEDIA STRATEGY',
		description:
			'Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough. ',
		otherComponent: <DownArrow color='#E26E23' size='28px' />
	},
	{
		title: 'ONLINE REPUTATION MANAGEMENT',
		description:
			'Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough. ',
		otherComponent: <UpArrow size='28px' />
	}
];

const ServiceList2 = [
	{
		title: 'UI/UX DESIGN',
		description:
			'Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough. ',
		otherComponent: <DownArrow color='#E26E23' size='28px' />
	},
	{
		title: 'WEB DESIGN',
		description:
			'Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough. ',
		otherComponent: <DownArrow color='#E26E23' size='28px' />
	},
	{
		title: 'MOBILE APPS DEVELOPMENT',
		description:
			'Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough. ',
		otherComponent: <DownArrow color='#E26E23' size='28px' />
	}
];

export default Services;

