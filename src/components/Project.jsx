import React from "react";
import WorkItems from "./WorkItems";
const Project = () => {
  const data = [
    {
      name: "Wedding Organizer",
      years: "2024",
      detail:
        "Wedding organizer ini dibangun menggunakan CodeIgniter dan Mysql. Dalam Website ini terdapat fitur CRUD dan manajemen katalog paket pernikahan hingga laporan keuangan dalam sisi admin. Pada sisi pelanggan terdapat menu detail setiap paket untuk melakukan pesanan dan konfirmasi melalui email. ",
      bahasa: "CodeIgniter, Mysql",
    },
    {
      name: "Blog Jewepe Sederhana ",
      years: "2023",
      detail:
        "Blog ini dibangun menggunakan html, CSS, JavaScript, PHP, dan MySQL. Dalam Website sederhana ini dapat menampilkan dan membaca blog. pada sisi admin dapat CRUD dan manajemen blog website tersebut.",
      bahasa: "HTML, CSS, Javascript, PHP, Mysql",
    },
    {
      name: "Clone Youtebe",
      years: "2023",
      detail:
        "Clone Youtebe ini dibangun menggunakan ReactJs dan Tailwind CSS dengan API youtube. menampilkan video, memutar video, serta menampilkan sesuai kategori.",
      bahasa: "React JS, Tailwind CSS",
    },
    {
      name: "Clone Disney+",
      years: "2023",
      detail:
        "Clone Disney+ ini dibangun menggunakan ReactJs dan Tailwind CSS dan IMDb API. Website ini hanya menampilkan home disney+",
      bahasa: "React JS, Tailwind CSS",
    },
    {
      name: "Portofolio",
      years: "2023",
      detail:
        "Portofolio ini dibangun menggunakan ReactJs dan Tailwind CSS. Portofolio ini dibangun menggunakan ReactJs dan Tailwind CSS.",
      bahasa: "React JS, Tailwind CSS",
    },
    {
      name: "Wisata Sleman DIY",
      years: "2022",
      detail:
        "Wisata Sleman terdiri dari museum gunung berapi. Tempat ini memiliki ruangan dan simulasi gunung merapi yang meletus pada tahun 2010.",
      bahasa: "HTMl, CSS, Javascript",
    },
    {
      name: "Bookstore",
      years: "2021",
      detail: "Manajemen buku Create, Read, Update dan Delete menggunakan vue.",
      bahasa: "Vue, Bootstrap",
    },
    {
      name: "Bookstore",
      years: "2021",
      detail:
        "Manajemen buku Create, Read, Update dan Delete menggunakan ReactJs dengan bantuan Express JS dan MonggoDB.",
      bahasa: "React JS, MonggoDB, Express JS",
    },
  ];
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1
        id="project"
        className="text-4xl font-bold text-center text-[#001b5e] pb-5">
        Project
      </h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.years}
          title={item.name}
          build={item.bahasa}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default Project;
