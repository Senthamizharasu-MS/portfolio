import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div >
            <div className='h-28 flex items-center '>
                <div className='mx-10 w-screen flex justify-between'>
                    <div className=' w-96 flex items-center'>
                        <div className=' h-25 w-60 rounded-xl bg-gray-300 flex justify-center'>
                            <Link to='/'><img className=' h-20 w-30' src={logo} alt='Logo' /></Link>
                        </div>
                    </div>
                    <div className=' w-5/12 flex justify-between items-center'>
                        <div className=''>
                            <ul className='flex gap-5 text-xl'>
                                <li><Link to='/projects'><button>Project</button></Link></li>
                                <li><Link to='/about'><button>About Me</button></Link></li>
                                <li><Link to='/contact'><button>Contact</button></Link></li>
                            </ul>
                        </div>
                        <div className='flex gap-10'>
                            <div>
                                <button className=' h-10 w-20 bg-blue-600 rounded-2xl text-white'>Hire Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar