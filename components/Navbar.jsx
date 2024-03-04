import React from 'react'
import Logo from './Logo'
import UserMenu from './UserMenu'
import Container from './Container'

const Navbar = () => {
  return (
    <div className='w-full bg-white shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className='flex justify-between item-center'>
                    <Logo />
                    <UserMenu />
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar