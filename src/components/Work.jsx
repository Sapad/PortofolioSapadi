import React from "react";
import WorksItems from "./WorkItems";

const Work = () => {
  const data = [
    {
      perusahaan: "Percetakan Uang Republik Indonesia",
      tanggal: "Agustus - Desember 2024",
      title: "Seksi Pemeliharaan Sistem Teknologi Informasi (Intern)",
      detail: [
        "Melakukan pemeriksaan server secara rutin dan mempelajari Grafana untuk pemeliharaan.",
        "Mempelajari Linux untuk konfigurasi server.",
        "Membantu sebagai Customer Service ketika ada masalah dengan E-materai.",
        "Membuat aplikasi monitoring user yang tidak aktif maupun yang aktif sebagai tugas akhir dengan framework Laravel sebagai frontend dan Spring Boot dengan bahasa Java sebagai backend.",
        "Mempelajari bahasa pemrograman Java dan JRuby serta membuat API sederhana.",
      ],
    },
    {
      perusahaan: "BTPN Syariah",
      tanggal: "Desember 2023 - Januari 2024",
      title: "Fullstack Developer (Intern)",
      detail: [
        "Membuat dan merancang antarmuka web menggunakan Vue JS.",
        "Mempelajari Java dan Golang dengan konsep dasar.",
        "Melakukan commit, push, dan pull pada Git dan GitHub.",
        "Final Project membuat API menggunakan Golang dengan case real dan membuat upload dan hapus gambar.",
      ],
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
          detail={
            <ol className="list-disc pl-5">
              {item.detail.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ol>
          }
        />
      ))}
    </div>
  );
};

export default Work;
