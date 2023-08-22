import Link from 'next/link'

interface Props {
	page: number | string
	active: boolean
}

const PageItem = ({ page, active }: Props) => {
	return (
		<Link href={`?page=${page}`} scroll={false}>
			<button
				aria-label='Page Navigation'
				className={`bg-black transition-all ease-in-out duration-500 ${
					active
						? 'scale-105'
						: 'scale-90'
				} border-[2px] mx-2 my-1 p-2 text-xs min-w-[36px] rounded-xl`}>
				{page}
			</button>
		</Link>
	)
}

export default PageItem
