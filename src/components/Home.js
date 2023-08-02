import React from 'react'
import FileSaver from 'file-saver'



const Home = () => {



    const downloadResume = () => {
        const resumeUrl = process.env.REACT_APP_RESUME_ID
        FileSaver.saveAs(resumeUrl, 'Senthamizharasu M S.pdf')
    }


    return (
        <div className='flex justify-center'>
            <div className='w-10/12 flex justify-between' >
                <div className=' w-[30rem] flex flex-col gap-5 justify-center '>
                    <p className='text-3xl'> Hi👋, Iam <span>Senthamizharasu M S</span> </p>
                    <p className='text-2xl'>I am a <span className=' font-semibold '>Web and Mobile app developer, UI/UX designer</span> </p>
                    <div>
                        <button className='bg-blue-500 h-10 w-28 rounded-2xl text-white ' onClick={downloadResume}>
                            My Resume
                        </button>
                    </div>
                </div>
                <div>
                    <img className='h-[35rem] w-[53rem]' src='https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif' alt='coder' />
                </div>
            </div>
        </div >
    )
}

export default Home