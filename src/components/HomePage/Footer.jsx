import {
	YouTubeIcon,
	InstagramIcon,
	FacebookIcon,
	LinkedInIcon,
	SendIcon
} from '../../../assets/icons/Icons';
import DownArrow from '../../../assets/img/DownArrow';
import logo from '../../assets/img/logo.png';
import Form from 'react-bootstrap/Form';

const Footer = () => {
	return (
		<div className='flex flex-col gap-5 w-full mt-[10%]'>
			<div className='bg-primary-color w-full origin-bottom-left rotate-6 py-2'>
				<p className='flex flex-row justify-evenly w-full'>
					<button href='#'>
						<LinkedInIcon />
					</button>
					<button href='#'>
						<YouTubeIcon />
					</button>
					<span className='flex flex-row gap-x-5 text-6xl font-semibold'>
						CONNECT WITH US <DownArrow size='50px' />
					</span>
					<button>
						<InstagramIcon />
					</button>
					<button href='#'>
						<FacebookIcon />
					</button>
				</p>
			</div>
			<div className='bg-primary-color w-full origin-bottom-left rotate-6 py-2'>
				<p className='flex flex-row justify-evenly w-full text-6xl font-semibold'>
					WE LIKE TO START YOUR PROJECT WITH US
					<div className='flex items-center'>
						<button className='bg-white text-primary-color py-2 px-3 rounded-3xl flex flex-row text-base font-normal gap-x-3 items-center'>
							Get Started <DownArrow color='#e26e23' />
						</button>
					</div>
				</p>
			</div>
			<div className='mt-[25%] flex flex-row justify-evenly'>
				<div className='flex flex-col gap-y-4 pb-20'>
					<img src={logo} alt='' width='270px' />
					<div className='flex flex-row justify-evenly'>
						<InstagramIcon color='#e26e23' />
						<FacebookIcon color='#e26e23' />
						<YouTubeIcon color='#e26e23' />
						<LinkedInIcon color='#e26e23' />
					</div>
				</div>
				<div className='flex flex-col gap-y-4 pb-4'>
					<div className='mb-5'>
						<p className='text-primary-color text-3xl font-semibold pb-3'>LOCATION</p>
						<p>
							2096 New Market, New Road
							<br />
							North Carolina, USA
						</p>
					</div>
					<div>
						<p className='text-primary-color text-3xl font-semibold pb-3'>CONTACT US</p>
						<p>
							<a href='mailto:support@rstheme.com'>
								support@rstheme.com <br />
							</a>
							<a href='tel:+88015569569'>(+880)155-69569</a>
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-y-4 pb-4'>
					<div className='mb-5'>
						<p className='text-primary-color text-3xl font-semibold pb-3'>SERVICES</p>
						<p>Web Design</p>
						<p>PR campaign</p>
						<p>UI/UX Design</p>
						<p>Event Management</p>
						<p>Social Media Strategy</p>
						<p>Mobile App Development</p>
						<p>Video Creation and Promotion</p>
						<p>Online Reputation</p>
					</div>
				</div>
				<div className='flex flex-col gap-y-4 pb-4'>
					<div className='mb-5'>
						<p className='text-primary-color text-3xl font-semibold pb-3'>SUBSCRIBE</p>
						<div className='flex flex-row'>
							<Form.Control
								type='text'
								className='rounded-r-none w-[70%]'
								placeholder='youremail@gmail.com'
							/>
							<button className='bg-primary-color rounded-r-xl px-[10px]'>
								<SendIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

