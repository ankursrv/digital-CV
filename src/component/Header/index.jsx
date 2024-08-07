import { useState } from "react";
import { Link, NavLink } from "react-router-dom";   // NavLink active class ko add krta hai  
import { FiPhone } from 'react-icons/fi';
import { CiMail } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const navLink = [
    {
        link: 'Home',
        href: '/'
    },
    {
        link: 'about me',
        href: '/aboutme'
    },
    {
        link: 'experience',
        href: '/experience'
    },
    {
        link: 'my skills',
        href: '/skills'
    },
    {
        link: 'portfolio',
        href: '/portfolio'
    },
    {
        link: 'services',
        href: '/services'
    },
]
const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <header className="sticky bg-gray z-[999] top-0 md:px-[100px] px-8 py-7 md:py-4 shadow-shadowSecondary">

            <nav className="flex items-center justify-between">
                <Link to="/" className="flex items-center justify-center font-poppins text-4xl font-bold gap-2"><span className="bg-gradient-to-r from-green-400 to-blue w-12 h-12 rounded-full flex items-center justify-center text-white text-3xl">A</span>NKUR</Link>
                <span className="md:hidden text-3xl" onClick={() => (setShow(!show))}><GiHamburgerMenu /></span>
                <ul className="md:flex font-semibold space-x-8 hidden">

                    {
                        navLink.map((navItem, index) => (
                            <li key={index} className="py-2 text-black text-sm uppercase">
                                <NavLink to={navItem.href}>{navItem.link}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className="text-blue font-medium text-base hidden xl:flex gap-6 ">
                    <label className="flex items-center gap-1">
                        <span><FiPhone /></span>
                        <h6> +91 7071779807</h6>
                    </label>
                    <label className="flex items-center gap-1">
                        <span><CiMail /> </span>
                        <h6>ankursrv1091@gmail.com</h6>
                    </label>
                </div>
                {/* Mobile Nav Start  */}
                {
                    show && (
                        <ul className="flex flex-col font-semibold gap-4 md:hidden bg-white fixed h-full bottom-0 top-0 left-0 w-auto px-8 pb-6 pt-3">
                            <span className="md:hidden text-3xl justify-end flex items-center pt-2" onClick={() => (setShow(false))}><IoMdClose /></span>
                            {
                                navLink.map((navItem, index) => (
                                    <li key={index} className="py-2 text-black text-sm uppercase">
                                        <NavLink
                                            to={navItem.href}
                                            className={({ isActive }) => isActive ? 'active' : ''}  // This sets the class name for active state
                                            // exact={navItem.href === '/'}  // Adjust exact based on your needs
                                        >
                                            {navItem.link}
                                        </NavLink>
                                    </li>
                                ))
                            }
                            <div className="text-blue font-medium text-base flex flex-col md:hidden gap-6">
                                <label className="flex items-center  pb-4 pt-2 gap-1 border-b-2 border-grayLight">
                                    <span><FiPhone /></span>
                                    <h6> +91 7071779807</h6>
                                </label>
                                <label className="flex items-center  pb-4 pt-2 gap-1 border-b-2 border-grayLight">
                                    <span><CiMail /> </span>
                                    <h6>ankursrv1091@gmail.com</h6>
                                </label>
                            </div>
                        </ul>
                    )
                }
                {/* Mobile Nav End  */}
            </nav>
        </header>
    )
}
export default Header

