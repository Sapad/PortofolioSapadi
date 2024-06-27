import React from "react";
import WorksItems from "./WorkItems";
const Work = () => {
  const data = [
    {
      perusahaan: "BTPN Syariah",
      tanggal: "December 2023 - January 2024",
      title: "Magang Fullstack Developer",
      detail:
        "Membuat, merancang antarmuka web menggunakan Vue JS.Menulis yang efisien dan mengelola dasar codingan. Mempelajari Java dan Golang dengan konsep dasar. Melakukan commit, push, dan pull pada git dan github. Membuat database dengan case real. Final Project membuat API menggunakan Golang dengan case real dan membuat upload dan hapus gambar. ",
    },
  ];
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1
        id="Experience"
        className="text-4xl font-bold text-center text-[#001b5e] pb-5">
        Experience
      </h1>
      {data.map((item, idx) => (
        <WorksItems
          key={idx}
          year={item.tanggal}
          title={item.title}
          build={item.perusahaan}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default Work;
