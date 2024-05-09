import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export default function Navbar() {
	return (
		<nav className='border-b bg-background h-[6vh] flex items-center'>
			<div className='container flex items-center justify-between'>
				<Link href='/' className='flex'>
					<Image
						src='/logo.png'
						width={40}
						height={40}
						alt='Picture of the author'
					/>
					<span className='mt-1 ml-3 text-2xl font-bold align-middle h-8'>
						noted
					</span>
				</Link>

				<div className='flex items-center gap-x-5'>
					<ThemeToggle />

					<div className='flex items-center gap-x-5'>
						<Button>Sign In</Button>
						<Button variant='secondary'>Sign Up</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
