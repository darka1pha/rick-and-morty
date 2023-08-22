import { DarkModeSwitch } from '../theme'

const Navbar = () => {
	return (
		<div className='bg-white  dark:bg-black h-16 w-full flex items-center px-4'>
			<DarkModeSwitch />
			<div className='flex flex-1 h-full justify-center items-center'>
				<h1 className='font-bold dark:text-white text-black text-2xl md:tracking-[20px] tracking-[10px]'>
					Rick & Morty
				</h1>
			</div>
		</div>
	)
}

export default Navbar
