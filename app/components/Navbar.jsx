import React from 'react'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div>
        {/* Logo */}
        <Logo/>
        {/* Auth */}
        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar