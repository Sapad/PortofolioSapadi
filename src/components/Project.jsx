import React from 'react'
import WorkItems from './WorkItems'
const Project = () => {
  const data = [
    {
        name: "Wisata Sleman DIY",
        years: "2022",
        detail: "Wisata Sleman terdiri dari museum gunung berapi. Tempat ini memiliki ruangan dan simulasi gunung merapi yang meletus pada tahun 2010.",
        bahasa: "HTMl, CSS, Javascript"
    },
    {
        name: "Bookstore",
        years: "2021",
        detail: "Manajemen buku Create, Read, Update dan Delete menggunakan vue.",
        bahasa: "Vue, Bootstrap"
    },
    {
        name: "Bookstore",
        years: "2021",
        detail: "Manajemen buku Create, Read, Update dan Delete menggunakan ReactJs dengan bantuan Express JS dan MonggoDB.",
        bahasa: "React JS, MonggoDB, Express JS"
    },
]
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Project</h1>
      {data.map((item, idx) => (
        <WorkItems key={idx} year={item.years} title={item.name} build={item.bahasa} detail={item.detail}/>
      ))}
    </div>
  )
}

export default Project