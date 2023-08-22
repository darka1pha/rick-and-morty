'use client'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

export default function DarkModeSwitch() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const toggleSwitch = () =>
		theme === 'dark' ? setTheme('light') : setTheme('dark')

	const spring = {
		type: 'spring',
		stiffness: 700,
		damping: 30,
	}

	return (
		<div
			onClick={toggleSwitch}
			className={`flex w-fit h-fit rounded-[48px] justify-center items-center shadow-inner hover:cursor-pointer  dark:bg-zinc-700`}>
			<motion.div
				className='flex h-9 w-9 items-center justify-center rounded-full'
				layout
				transition={spring}>
				<motion.div whileTap={{ rotate: 360 }}>
					{theme === 'light' ? (
						<RiSunFill className='h-6 w-6 text-yellow-500' />
					) : (
						<RiMoonClearFill className='h-6 w-6 text-slate-200' />
					)}
				</motion.div>
			</motion.div>
		</div>
	)
}
