import React from 'react'
import { useState, useRef } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [visible, setVisible] = useState(false);

    const NavLinks = [
        { title: "Home", path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
    ];


    return (
        <>
            <div className='h-auto md:h-[4rem] z-50 bg-[#657cba] flex items-center text-black justify-between rounded-b-lg sticky top-0 px-6 '>
                <div className='flex' >
                    <Link to={'/'} ><p className='cursor-pointer text-[27px] font-bold'>Trip Planner</p></Link>
                </div>
                <div className='hidden sm:flex space-x-3 mr-3'>
                    <ul className='flex space-x-6 mr-6'>
                        {
                            NavLinks.map((navdata, index) => {
                                return (
                                    <li key={index} className="">
                                        <NavLink to={navdata.path} className='text-[18px] cursor-pointer' activeClassName="font-bold" >{navdata.title}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="absolute top-2 right-4 z-50">
                    <button onClick={() => setOpenSideBar(!openSideBar)} className='sm:hidden'>
                        {openSideBar ? <XMarkIcon className='h-6 w-6 font-semibold ' /> : <Bars3Icon className='h-6 w-6 ' />}
                    </button>
                </div>
            </div>

            <div className={`sm:hidden flex flex-col items-center justify-start bg-[#6278b5] h-[100vh] w-[50%] fixed top-0 right-0 z-39 transition-transform duration-300 ease-in-out ${openSideBar ? 'translate-x-0' : 'translate-x-full'} `}>
                <div className='flex flex-col space-y-3 mt-16 '>
                    {
                        NavLinks.map((navdata, index) => {
                            return (
                                <li key={index} className="list-none hover:bg-[#8295c8] text-center rounded-lg">
                                    <NavLink to={navdata.path} className='text-[18px] cursor-pointer z-40 px-5 transition-transform duration-1000 ease-out hover:text-yellow-50' onClick={() => setOpenSideBar(!openSideBar)}>{navdata.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar