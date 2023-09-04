import React from 'react'
import ProjectsItem from './ProjectsItem'
import Sleman from '../assets/Image/Sleman.png'
import ReactJS from '../assets/Image/ReactJS.png'
import Vue from '../assets/Image/Vue.png'
import Portofolio from '../assets/Image/Portofolio.png'


function Projects() {
  return (
    <div id='website' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Website</h1>
        <p className='text-center py-8'>
            Website yang dibuat untuk mengukur keterampilan saya dalam web developer dengan menggunakan bahasa pemrograman HTML, CSS, JavaScrpit, React, ExpressJs, Vue. 
              
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectsItem img={Sleman} title='Wisata Sleman' bahasa='HTML, CSS, Javascript' url='https://wisatasleman.netlify.app/' github='https://github.com/Sapad/WisataSleman' />
            <ProjectsItem img={ReactJS} title='Bookstore' bahasa='React, ExpressJS, Bootstrap' github='' />
            <ProjectsItem img={Vue} title='Bookstore' bahasa='Vue, Boostrap' url='https://bookstorevue.netlify.app/' github='https://github.com/Sapad/vue'/>
            <ProjectsItem img={Portofolio} title='First Portofolio' bahasa='ReactJS, Boostrap, EmailJS' url='https://saptoadiyanto.netlify.app/' github='https://github.com/Sapad/Portofolio' />
        </div>
    </div>
  )
}

export default Projects