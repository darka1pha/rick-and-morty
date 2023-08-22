import Characters from '@/components/characters'
import PageCounter from '@/components/pageCounter'
import { getAllCharacters } from '@/lib/actions'
import { CharacterList } from '@/types'

interface Props {
	searchParams: {
		page: string
	}
}

export default async function Home({ searchParams: { page } }: Props) {
	const {
		characters: {
			info: { pages },
			results,
		},
	} = (await getAllCharacters(page ? Number(page) : 1)) as CharacterList
	return (
		<main className='flex min-h-screen relative flex-col bg-fixed items-center justify-between p-10 bg-[url("../public//bg.png")] bg-cover bg-center'>
			<div className='absolute top-0 left-0 w-full h-full bg-black/40' />
			<Characters data={results} />
			<PageCounter currentPage={page ? Number(page) : 1} totalPages={pages} />
		</main>
	)
}
