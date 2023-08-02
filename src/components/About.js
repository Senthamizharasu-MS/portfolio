import React from 'react'

const About = () => {
    return (
        <div className=''>
            <div className='flex flex-col gap-10'>
                <p className='text-3xl font-semibold text-center'>About Me</p>
                <div className='flex justify-center'>
                    <div className=' w-10/12 h-[30.28rem] flex flex-col justify-center items-center gap-8 bg-gray-100 rounded-3xl '>
                        <p className=' text-4xl font-bold'>Senthamizharasu M S</p>
                        <div className='w-11/12 flex flex-col gap-5'>
                            <p className='text-lg text-center'>Hi there! I am Senthamizharasu M S,a web and mobile app developer, as well as a UI/UX designer. With a passion for creating beautiful and functional digital experiences, I have honed my skills in front-end development, user interface design, and user experience research.

                                My expertise lies in developing responsive and user-friendly websites and mobile applications using the latest technologies and design trends. I am also skilled in creating intuitive and engaging user interfaces that provide a seamless user experience.

                                In my work, I strive to deliver high-quality products that meet the needs of my clients and their users. Whether it’s building a new website from scratch or improving an existing one, I am always up for a challenge and ready to bring my creativity and technical skills to the table.

                                Thank you for taking the time to learn more about me. If you’re interested in working together or just want to say hi, feel free to get in touch!</p>
                            <p><span className=' font-semibold'>Technologies and Tools I worked with </span>React, Nodejs, Expressjs, MongoDB, HTML, CSS, Javascript, Tailwind CSS, Figma, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About