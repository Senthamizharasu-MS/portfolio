import React,{useState} from 'react';

const HireMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const ele=e.target;
        setName(ele.name.value);
        setEmail(ele.email.value);
        setMessage(ele.message.value);
        alert('Thank you for contacting me. I will get back to you soon.');
        console.log(name,email,message);
        ele.name.value='';
        ele.email.value='';
        ele.message.value='';
    }

    return (
        <div className='h-[35rem] flex justify-center items-center'>
            <div className=' h-[28rem] w-10/12 bg-gray-300 rounded-3xl flex flex-col justify-center items-center gap-5'>
                <h1 className='text-3xl font-semibold'>Hire Me</h1>
                <p className='text-center w-[40rem]'>I am a skilled developer with experience in React JS and other technologies. I am available for freelance work and would love to help you with your project. Please fill out the form below to get in touch with me.</p>
                <form onSubmit={handleSubmit}  className='flex flex-col gap-5'>
                    <div className='flex gap-2'>
                        <label className='w-20' htmlFor="name">Name :</label>
                        <input className='border-2 border-black w-96' type="text" id="name" name="name" required />
                    </div>
                    <div className='flex gap-2'>
                        <label className='w-20' htmlFor="email">Email :</label>
                        <input className='border-2 border-black w-96' type="email" id="email" name="email" required />
                    </div>
                    <div className='flex gap-2'>
                        <label className='w-20' htmlFor="message">Message :</label>
                        <textarea className='border-2 border-black w-96' id="message" name="message" required></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='h-10 w-20 bg-blue-600 rounded-2xl text-white' >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HireMe;
