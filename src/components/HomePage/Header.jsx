import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/logo.png';
import { useEffect, useState } from 'react';

const Header = () => {
	const [collapseNav, setCollapseNav] = useState(false);

	const checkScreenWidth = () => {
		if (window.innerWidth <= 767) {
			setCollapseNav(true);
		} else {
			setCollapseNav(false);
		}
	};

	useEffect(() => {
		checkScreenWidth();
		window.addEventListener('resize', checkScreenWidth);

		return () => {
			window.removeEventListener('resize', checkScreenWidth);
		};
	}, []);

	return (
		<Navbar expand='md' className='bg-body-tertiary w-full' variant='dark'>
			<Container
				style={{
					display: 'flex',
					marginLeft: window.innerWidth > 767 && 0,
					width: '100%',
					paddingLeft: 0,
					justifyContent: 'space-between'
				}}
			>
				<Navbar.Brand href='#home' className='pl-0 md:ml-0 ml-5'>
					<img src={Logo} alt='' width={88} height={88} />
				</Navbar.Brand>
				<Navbar.Toggle
					className='text-white mr-1'
					onClick={() => setCollapseNav(curr => !curr)}
					aria-controls='basic-navbar-nav'
				/>
				<Navbar.Collapse
					id='basic-navbar-nav'
					style={{ display: collapseNav ? 'none' : 'flex', justifyContent: 'center' }}
				>
					<Nav
						className='text-white'
						style={{ display: 'flex', justifyContent: 'center', width: '100%', columnGap: '22px' }}
					>
						<Nav.Link className='text-white' href='#home'>
							HOME
						</Nav.Link>
						<Nav.Link className='text-white' href='#link'>
							SERVICES
						</Nav.Link>
						<Nav.Link className='text-white' href='#link'>
							FEATURES
						</Nav.Link>
						<Nav.Link className='text-white' href='#link'>
							PORTFOLIO
						</Nav.Link>
						<Nav.Link className='text-white' href='#link'>
							BLOG
						</Nav.Link>
						<Nav.Link className='text-white' href='#link'>
							CONTACT
						</Nav.Link>
						{/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;

