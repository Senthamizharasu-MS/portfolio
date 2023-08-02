import React from 'react'
import project from '../data'


const Project = () => {
    return (
        <div>
            <div className=' flex flex-col gap-10 mb-10 '>
                <p className='text-3xl font-semibold text-center'>My Projects</p>
                <div className=' flex justify-center'>
                    <div className='grid grid-cols-2 gap-10'>
                        {project.map((item, index) => {
                            return (
                                <div key={index} className=' w-[27rem] h-[32rem] flex flex-col items-center gap-5 bg-gray-600 text-white rounded-3xl '>
                                    <p className=' mt-6 font-semibold text-2xl text-center'>{item.name}</p>
                                    <div className='w-[20rem] flex flex-col gap-5'>
                                        <p className='text-center '>{item.discription}</p>
                                        <p className='text-center'>{item.technology}</p>
                                        <a className='flex justify-center' href={item.url}><button className='bg-blue-500 h-10 w-28 rounded-2xl text-white'>Visit</button></a>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project