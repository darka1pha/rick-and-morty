import { Character } from '@/types'

const CharacterCard: React.FC<Character> = ({
	gender,
	id,
	image,
	location,
	name,
	origin,
	species,
	status,
}) => {
	return (
		<div className='h-48 w-80 flex bg-white/30 dark:bg-black/80 rounded-2xl m-2 mx-auto p-3 overflow-hidden backdrop-blur-md'>
			<div className={`h-full w-[50%] rounded-[16px] overflow-hidden`}>
				<div
					style={{
						backgroundImage: `url(${image})`,
					}}
					className='bg-cover bg-center hover:translate-x-2 hover:scale-125 hover:-rotate-6 transition-all duration-300 ease-out h-full w-full'
				/>
			</div>
			<div className='flex flex-1 h-full w-full px-3 flex-col justify-between'>
				<p className='text-black dark:text-white'>{name}</p>
				<p className='text-xs text-black dark:text-gray-300'>{origin.name}</p>
				<p className='text-xs text-black dark:text-gray-300'>{location.name}</p>
				<p className='text-xs text-black dark:text-gray-300'>{gender}</p>
				<p className='text-xs text-black dark:text-gray-300'>{species}</p>
			</div>
		</div>
	)
}

export default CharacterCard
