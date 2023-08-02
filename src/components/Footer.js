import React from 'react'
import {IoLogoGithub,IoLogoLinkedin,IoLogoTwitter,IoLogoInstagram} from 'react-icons/io5'

const Footer = () => {
    return (
        <div>
            <div className='mx-10  h-[97px] flex items-center '>
                <div className='w-screen flex justify-between'>
                    <div className=' text-4xl flex gap-8 items-center'>
                        <p className='w-70'>Follow Me</p>
                        <a href='https://github.com/Senthamizharasu-MS' className=' h-16 w-16 rounded-xl bg-gray-300 flex justify-center items-center'>
                            <IoLogoGithub className=' h-8 w-8' />
                        </a>
                        <a href='https://www.linkedin.com/in/senthamizharasu-m-s-4a4764205' className=' h-16 w-16 rounded-xl bg-gray-300 flex justify-center items-center'>
                            <IoLogoLinkedin className=' h-8 w-8' />
                        </a >
                        <a href='https://twitter.com/ArasuMS16' className=' h-16 w-16 rounded-xl bg-gray-300 flex justify-center items-center'>
                            <IoLogoTwitter className=' h-8 w-8' />
                        </a>
                        <a href='https://www.instagram.com/arasu_ms.official' className=' h-16 w-16 rounded-xl bg-gray-300 flex justify-center items-center'>
                            <IoLogoInstagram className=' h-8 w-8' />
                        </a>
                    </div>
                </div>
                <div>
                    <p className='text-2xl w-[20.1rem]'>© 2023 Senthamizharasu M S</p>
                </div>
            </div>
        </div>
    )
}

export default Footer