import React from 'react'
import background from '../assets/Image/1692347361363.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <div className="flex">
        <img src={background} className='w-full h-screen object-cover object-right ' />
        </div>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl text-bold text-gray-800'>Sapto Adiyanto</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    I'm a 
                
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Mahasiswa Semester 7',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    style={{ fontSize: '1em', paddingLeft:'5px' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-4 max-w-[200px] w-full'>
                <a href="https://www.linkedin.com/in/sapto-adiyanto-787351207/" target='_blank' rel="noreferrer"><FaLinkedin className='cursor-pointer'/></a>
            <a href="https://www.instagram.com/sap.adi28/"  target='_blank' rel="noreferrer"><FaInstagram className='cursor-pointer'/></a>
            <a href="https://github.com/Sapad"  target='_blank' rel="noreferrer"><FaGithub className='cursor-pointer'/></a>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Main