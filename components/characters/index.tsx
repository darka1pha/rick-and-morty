import { Character } from '@/types'
import CharacterCard from './characterCard'

interface Props {
	data: Character[]
}

const Characters = ({ data }: Props) => {
	return (
		<div className='flex flex-wrap justify-center'>
			{data.map(
				({ gender, id, image, location, name, origin, species, status }) => (
					<CharacterCard
						gender={gender}
						id={id}
						image={image}
						location={location}
						name={name}
						origin={origin}
						species={species}
						status={status}
					/>
				)
			)}
		</div>
	)
}

export default Characters
