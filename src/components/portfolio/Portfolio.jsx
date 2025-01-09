import React from 'react';
import IMG1 from '../../assets/mms.png';
import IMG2 from '../../assets/iiec.png';
import IMG3 from '../../assets/mms.png';
import IMG4 from '../../assets/warteg.png';
import IMG5 from '../../assets/reenginering.png';
import IMG6 from '../../assets/Bank_Raya.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Bigpromo (PT Igoid Bisnis Global)',
      img: IMG1,
      desc:"Big promo is an application created to meet the needs of the Ministry of Tourism and Creative Economy's event in helping UMKM to market UMKM products throughout Indonesia.",
      tools:"Laravel, Mysql",
      year:"2020"
    },
    {
      id: 2,
      title: 'Warteg.ID (PT Igoid Bisnis Global)',
      img: IMG4,
      desc:"Warteg.ID is an application created to meet the needs of helping UMKM to market UMKM products.",
      tools:"Laravel, Mysql",
      year:"2020"
    },
    {
      id: 3,
      title: 'Management Sekolah International Islamic Education Council (IIEC) (PT Igoid Bisnis Global)',
      img: IMG2,
      desc:"It is an application built to facilitate the Management Information System and Student Registration System dynamically.",
      tools:"Laravel, Mysql",
      year:"2021"
    },
    {
      id: 4,
      title: 'Merchant Management System (Bank BRI from PT Lawencon International)',
      img: IMG3,
      desc:"It is used to manage BRI Bank QRIS Merchant registration",
      tools:"Laravel, Mysql, Codeigniter 3",
      year:"2021 - 2022"
    },
    {
      id: 5,
      title: 'Re-enginering Merchant Management System (Bank BRI from PT Lawencon International)',
      img: IMG5,
      desc:"It is used to manage BRI Bank QRIS Merchant registration, which has been re-engineered using more modern tools and changed the appearance to make it look user friendly.",
      tools:"Vue JS, Golang, Mysql, MMSQL",
      year:"2022"
    },
    {
      id: 6,
      title: 'Credit Service (Bank RAYA from PT Bringin Inti Teknologi)',
      img: IMG6,
      desc:"This is a service for Thrid Party Applications for Pinang Flexi loans and Bailout Funds which are Bank Raya Indonesia loan products",
      tools:"Golang (GRPC), Postgresql, Redis",
      year:"2023-2025"
    },
    {
      id: 7,
      title: 'Credit Scoring (Bank RAYA from PT Bringin Inti Teknologi)',
      img: IMG6,
      desc:"It is a system created for the process of calculating customer credit grades and characteristics for applying for Pinang Flexi loans and Dana Talangan which are Bank Raya Indonesia loan products",
      tools:"Pyhton, Postgresql",
      year:"2023-2025"
    },
    {
      id: 8,
      title: 'Prescreening Service SLIK Ojk (Bank RAYA from PT Bringin Inti Teknologi)',
      img: IMG6,
      desc:"This is a service for third parties to check SLIK on Pinang Flexi loan applications and Talangan Funds which are Bank Raya Indonesia loan products.",
      tools:"Golang (Fiber), Postgresql",
      year:"2023-2025"
    },
    {
      id: 9,
      title: 'Prescreening Service SLIK Pefindo (Bank RAYA from PT Bringin Inti Teknologi)',
      img: IMG6,
      desc:"This is a service for third parties for alternative SLIK checking on Pinang Flexi loan applications and Talangan Funds which are Bank Raya Indonesia loan products.",
      tools:"Golang (Fiber), Postgresql",
      year:"2023-2025"
    },
    {
      id: 10,
      title: 'Service API Whitelist (Bank RAYA from PT Bringin Inti Teknologi)',
      img: IMG6,
      desc:"This is a service for third parties to check whether customers are on the loan whitelist or not",
      tools:"Golang (Grpc), Postgresql",
      year:"2023-2025"
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>Work Experience</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>Project : {pro.title}</h3>
          <h5>Description : {pro.desc}</h5>
          <h5>Tools : {pro.tools}</h5>
          <h5>Year : {pro.year}</h5>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio