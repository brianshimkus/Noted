import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function Navbar() {
	const { isAuthenticated } = getKindeServerSession()
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

					{(await isAuthenticated()) ? (
						<LogoutLink>
							<Button>Log out</Button>
						</LogoutLink>
					) : (
						<div className='flex items-center gap-x-5'>
							<LoginLink postLoginRedirectURL='/dashboard'>
								<Button>Sign in</Button>
							</LoginLink>
							<RegisterLink postLoginRedirectURL='/welcome'>
								<Button variant='secondary'>Sign up</Button>
							</RegisterLink>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
