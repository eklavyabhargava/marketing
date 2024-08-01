import DownArrow from '../../../assets/img/DownArrow';

const WorkFlow = () => {
	return (
		<div className='w-full mx-auto relative'>
			<div className='w-[90%]'>
				<p
					className='text-[140px] font-bold gap-x-24 text-center absolute w-full flex overflow-hidden flex-nowrap'
					style={{ top: '-7%', letterSpacing: '90px', color: 'rgba(255, 255, 255, 0.4)' }}
				>
					OUR <span className='text-[#e26e2366]'>WORKFLOW</span>
				</p>
				<p className='text-[100px] text-center'>
					OUR <span className='text-primary-color'>WORKFLOW</span>
				</p>
			</div>
			<div className='w-full mt-[182px] flex flex-col gap-y-8 '>
				<p className='text-6xl origin-top rotate-12 font-semibold overflow-hidden pl-[20%] pb-8 border-b-2 border-white '>
					<span className='text-primary-color'>01</span> CONCEPT
				</p>
				<p className='text-6xl origin-top rotate-12 font-semibold p-line overflow-hidden pb-8 pl-[45%] border-b-2 border-white'>
					<span className='text-primary-color'>02</span> BUDGET
				</p>
				<div className='origin-top rotate-12 pb-20 '>
					<p className='text-6xl font-semibold text-primary-color mb-20 text-nowrap pl-[70%] overflow-hidden'>
						03 DEVELOPMENT
					</p>
					<div className='py-12 flex flex-row justify-between pl-0 origin-top -rotate-12 w-[60%] ml-[20%]'>
						<div className='text-white flex flex-col gap-y-5 w-[60%]'>
							<p className=''>
								Figma ipsum component variant main layer. Link object connection duplicate overflow
								distribute. Strikethrough align blur asset layer ipsum rotate. Selection project
								device ipsum device clip inspect font. Style object list group arrange. Selection
								draft team underline community polygon. Ellipse team flatten draft align distribute
								slice. Line pen follower boolean draft. Blur subtract content flows rectangle edit.
								Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity
								rectangle frame flatten image group link. Vector opacity font library link. Ipsum
								bold clip plugin star overflow invite stroke flows content.{' '}
							</p>
							<div className='flex justify-end'>
								<button className='bg-primary-color px-[10px] py-[6px] rounded-3xl flex flex-row text-base gap-x-2'>
									Explore More <DownArrow color='#ffffff' />
								</button>
							</div>
						</div>
						<svg
							width='251'
							height='251'
							viewBox='0 0 251 251'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M54.3087 18.5217V54.2357H18.5943V18.5217H54.3087ZM0.737061 0.664795V72.0926H72.1658V0.664795H0.737061ZM143.595 45.3072V81.0211H107.88V45.3072H143.595ZM90.023 27.4502V98.878H161.452V27.4502H90.023ZM54.3087 125.663V161.377H18.5943V125.663H54.3087ZM0.737061 107.807V179.234H72.1658V107.807H0.737061Z'
								fill='#E26E23'
							/>
							<path
								d='M179.308 72.0951V125.666H125.737V179.237H72.1651V250.665H250.737V72.0951H179.308ZM143.594 143.523H179.308V179.237H143.594V143.523ZM125.737 232.808H90.0223V197.094H125.737V232.808ZM179.308 232.808H143.594V197.094H179.308V232.808ZM232.88 232.808H197.165V197.094H232.88V232.808ZM232.88 179.237H197.165V143.523H232.88V179.237ZM197.165 125.666V89.952H232.88V125.666H197.165Z'
								fill='#E26E23'
							/>
						</svg>
					</div>
				</div>
				<p className='text-6xl origin-top rotate-12 font-semibold p-line overflow-hidden pt-8 text-nowrap border-t-2 border-white pl-[85%] '>
					<span className='text-primary-color'>04</span> BUDGET
				</p>
			</div>
		</div>
	);
};

export default WorkFlow;

