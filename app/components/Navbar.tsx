import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	RegisterLink,
	LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ThemeToggle } from './theme-toggle'
import { UserNav } from './UserNav'
import Image from 'next/image'

export async function Navbar() {
	const { isAuthenticated, getUser } = getKindeServerSession()
	const user = await getUser()

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
						<UserNav
							email={user?.email as string}
							image={user?.picture as string}
							name={user?.given_name as string}
						/>
					) : (
						<div className='flex items-center gap-x-5'>
							<LoginLink>
								<Button>Sign In</Button>
							</LoginLink>

							<RegisterLink>
								<Button variant='secondary'>Sign Up</Button>
							</RegisterLink>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
