export interface Character {
	id: number
	name: string
	status: string
	species: string
	gender: string
	origin: {
		name: string
	}
	location: {
		name: string
	}
	image: string
}

export interface CharacterList {
	characters: {
		info: {
			count: number
			pages: number
		}
		results: Character[]
	}
}
