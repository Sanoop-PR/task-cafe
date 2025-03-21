import { Link } from 'react-router'
import Logo from '../assets/Logo.png'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "../components/ui/menubar"
import { Menu } from 'lucide-react'

function NavBar() {
    return (
        <nav className="bg-black text-white h-16 relative flex justify-end items-end pr-3 sm:pr-20">
            <div className='absolute h-16 top-1/2 left-1/2 max-sm:-translate-x-1/2 sm:left-20 flex items-center z-50'>
                <img src={Logo} alt="logo" className='h-full' />
                <p className=' text-3xl text-white max-sm:hidden'><span className=' text-blue-500'>DEEP</span> NET <br /> <span className='text-gray-400'>SOFT</span></p>
            </div>
            <div className='space-x-3 text-sm max-sm:hidden'>
                <Link to={'/'}>HOME</Link>
                <Link to={'/'} className='text-blue-500'>MENU</Link>
                <Link to={'/'}>MAKE A RESERVATION</Link>
                <Link to={'/'}>CONTACT US</Link>
                <Link to={'/all-menu'}>CREATE ITEMS</Link>
            </div>
            <Menubar className='sm:hidden border-0 bg-transparent focus:bg-transparent'>
                <MenubarMenu>
                    <MenubarTrigger><Menu /></MenubarTrigger>
                    <MenubarContent align='end'>
                        <Link to={'/'}><MenubarItem>HOME</MenubarItem></Link>
                        <Link to={'/'}><MenubarItem>MENU</MenubarItem></Link>
                        <MenubarItem>MAKE A RESERVATION</MenubarItem>
                        <MenubarItem>CONTACT US</MenubarItem>
                        <Link to={'/all-menu'}><MenubarItem>CREATE ITEMS</MenubarItem></Link>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </nav>
    )
}

export default NavBar