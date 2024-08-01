import Articles from '../components/HomePage/Articles';
import Footer from '../components/HomePage/Footer';
import Header from '../components/HomePage/Header';
import HeroBlock from '../components/HomePage/HeroBlock';
import Reviews from '../components/HomePage/Reviews';
import Services from '../components/HomePage/Services';
import Teams from '../components/HomePage/Teams';
import Testimonial from '../components/HomePage/Testimonials';
import WorkFlow from '../components/HomePage/Workflows';

const HomePage = () => {
	return (
		<div className='flex flex-col gap-y-32 w-full'>
			<Header />
			<HeroBlock />
			<Services />
			<WorkFlow />
			<Testimonial />
			<Reviews />
			<Teams />
			<Articles />
			<Footer />
		</div>
	);
};

export default HomePage;

