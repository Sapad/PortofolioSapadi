import React from "react";
import WorkItems from "./WorkItems";
const Project = () => {
  const data = [
    {
      name: "E-Commerce Website Sederhana",
      years: "2024",
      detail: [
        "Website E-Commerce sederhana ini dibangun menggunakan Next.js dengan TypeScript dan SCSS, dilengkapi dengan fitur user & member management untuk pengalaman pengguna yang lebih terstruktur.",
        "Sebagai backend, website ini memanfaatkan Firebase sebagai database utama untuk menyimpan dan mengelola data secara real-time.",
        "Fitur utama yang tersedia meliputi CRUD (Create, Read, Update, Delete) serta manajemen produk dan pengguna. Pada sisi admin, terdapat sistem manajemen katalog dan member, memungkinkan pengelolaan yang efisien dan terorganisir.",
        "Selain itu, website ini telah terintegrasi dengan Midtrans Payment Gateway, menggunakan Midtrans API dengan metode pembayaran melalui sandbox environment, memastikan proses transaksi dapat diuji dengan aman sebelum diterapkan secara live.",
      ],
      bahasa: "NextJS, Firebase, Typescript, Scss, Midtrans",
    },
    {
      name: "Wedding Organizer",
      years: "2024",
      detail: [
        "Website Wedding Organizer ini dikembangkan menggunakan CodeIgniter dan MySQL, menghadirkan sistem manajemen pernikahan yang efisien dan terstruktur.",
        "Pada sisi admin, tersedia fitur CRUD untuk pengelolaan data, manajemen katalog paket pernikahan, serta laporan keuangan, memungkinkan administrasi yang lebih efektif.",
        "Sementara itu, pada sisi pelanggan, website ini menyediakan halaman detail paket pernikahan, memungkinkan pengguna untuk melihat informasi lengkap sebelum melakukan pemesanan. Proses pemesanan juga dilengkapi dengan fitur konfirmasi melalui email, memastikan pengalaman pengguna yang lebih praktis dan profesional.",
      ],
      bahasa: "CodeIgniter, Mysql",
    },
    {
      name: "Blog Jewepe Sederhana ",
      years: "2023",
      detail: [
        "Website Blog ini dikembangkan menggunakan HTML, CSS, JavaScript, PHP, dan MySQL, menghadirkan platform sederhana namun fungsional untuk menampilkan dan membaca artikel blog.",
        "Pada sisi admin, tersedia fitur CRUD (Create, Read, Update, Delete) serta sistem manajemen konten, memungkinkan pengelolaan blog yang lebih terstruktur dan efisien.",
      ],
      bahasa: "HTML, CSS, Javascript, PHP, Mysql",
    },
    {
      name: "Clone Youtebe",
      years: "2023",
      detail: [
        "Website Clone YouTube ini dikembangkan menggunakan React.js dan Tailwind CSS, dengan integrasi YouTube API untuk menghadirkan pengalaman menonton video yang interaktif.",
        "Fitur utama mencakup penayangan dan pemutaran video, serta kategori video yang memungkinkan pengguna menemukan konten sesuai minat mereka dengan mudah",
      ],
      bahasa: "React JS, Tailwind CSS, YouTube API",
    },
    {
      name: "Clone Disney+",
      years: "2023",
      detail: [
        "Website Clone Disney+ ini dikembangkan menggunakan React.js dan Tailwind CSS, dengan integrasi IMDb API untuk menampilkan informasi film dan serial.",
        "Website ini menghadirkan tampilan halaman utama Disney+, memberikan pengalaman visual yang menarik dan responsif.",
      ],
      bahasa: "React JS, Tailwind CSS, IMDb API",
    },
    {
      name: "Portofolio",
      years: "2023",
      detail: [
        "Portofolio ini dikembangkan menggunakan React.js dan Tailwind CSS, menghadirkan desain yang modern, responsif, dan interaktif untuk menampilkan karya serta pengalaman secara profesional.",
      ],
      bahasa: "React JS, Tailwind CSS",
    },
    {
      name: "Wisata Sleman DIY",
      years: "2022",
      detail: [
        "Wisata Sleman menawarkan pengalaman edukatif melalui Museum Gunung Api Merapi, yang menampilkan berbagai informasi tentang aktivitas vulkanik. Museum ini dilengkapi dengan ruangan simulasi erupsi Gunung Merapi tahun 2010, memberikan pengunjung pengalaman yang imersif dan mendalam mengenai salah satu letusan terbesar di Indonesia.",
      ],
      bahasa: "HTMl, CSS, Javascript",
    },
    {
      name: "Bookstore",
      years: "2021",
      detail: [
        "Sistem Manajemen Buku ini dikembangkan menggunakan Vue.js, dengan fitur CRUD (Create, Read, Update, Delete) yang memungkinkan pengelolaan data buku secara efisien dan interaktif.",
      ],
      bahasa: "Vue, Bootstrap",
    },
    {
      name: "Bookstore",
      years: "2021",
      detail: [
        "Sistem Manajemen Buku ini dikembangkan menggunakan React.js untuk frontend, dengan Express.js sebagai backend dan MongoDB sebagai database.",
        "Fitur utama mencakup CRUD (Create, Read, Update, Delete), memungkinkan pengelolaan data buku secara dinamis dan efisien dalam sebuah aplikasi berbasis web.",
      ],
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

export default Project;
