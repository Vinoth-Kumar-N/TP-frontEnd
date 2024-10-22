import React from 'react'
import { User2, CircleX } from 'lucide-react'
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [visible, setVisible] = useState(false);

    const NavLinks = [
        { title: "Home", path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
    ];

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const queryref = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            query: queryref.current.value
        };
        try {
            console.log(formData);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };
    return (
        <>
            <div className='h-auto md:h-[4rem] z-50 bg-[#657cba] md:flex items-center text-black justify-between rounded-b-lg sticky top-0 '>
                <div className='flex ml-6' >
                    <a href="/" className=""><p className='cursor-pointer text-[27px] font-bold'>Trip Planner</p></a>
                </div>
                <div className='flex space-x-3 mr-3'>
                    <ul className='flex space-x-6 mr-6'>
                        <li className='text-[18px] cursor-pointer hover:font-bold active:text-gray-700'> Home</li>
                        <li className='text-[18px] cursor-pointer hover:font-bold active:text-gray-700'>About us</li>
                        <li className='text-[18px] cursor-pointer hover:font-bold active:text-gray-700' onClick={() => setVisible(true)} >Contact</li>
                    </ul>
                    <div className='w-[4rem] h-[2rem] text-white rounded-md bg-gray-800 justify-center items-center flex hover:bg-black'>
                        <a href="/login" className=""><p className="" >Sign In</p></a>
                    </div>
                </div>
            </div>
            {
                visible && (
                    <div className="h-screen w-screen fixed top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                        <div className="h-auto w-[90%] md:w-[40%] px-[3%] py-[2%] rounded-2xl bg-white shadow-lg">
                            <div className='px-[3%] flex justify-between items-center mb-2 top-0'>
                                <h2 className="text-2xl font-semibold text-[#657cba]">Mail Us</h2>
                                <CircleX className='text-red-500 cursor-pointer' onClick={() => setVisible(false)} />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <p className='text-red-500 mb-4'>*All fields are mandatory</p>
                                <div className="mb-4">
                                    <input
                                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                                        placeholder="Enter your name *"
                                        type="text"
                                        name="name"
                                        ref={nameRef}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                                        placeholder="Enter your Email ID *"
                                        name="email"
                                        id="email"
                                        type="email"
                                        ref={emailRef}
                                        required
                                    />
                                </div>
                                <textarea className='h-[4rem] w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300' placeholder='Enter your query *' name="query" id="query" ref={queryref} required></textarea>
                                <div className="flex justify-center p-[6%]">
                                    <button
                                        className="px-5 py-2 bg-neutral-700 text-white rounded-3xl hover:neutral-700 transition duration-300"
                                        type="submit">Send Mail
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )

            }
        </>
    )
}

export default Navbar