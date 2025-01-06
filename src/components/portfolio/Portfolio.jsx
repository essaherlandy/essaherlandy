import React from 'react';
import IMG1 from '../../assets/mms.png';
import IMG2 from '../../assets/iiec.png';
import IMG3 from '../../assets/mms.png';
import IMG4 from '../../assets/warteg.png';
import IMG5 from '../../assets/reenginering.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Bigpromo',
      img: IMG1,
      github: 'https://github.com/Meri-MG/bookstore---react',
    },
    {
      id: 2,
      title: 'Warteg.ID',
      img: IMG4,
    },
    {
      id: 3,
      title: 'Management Sekolah International Islamic Education Council (IIEC)',
      img: IMG2,
    },
    {
      id: 4,
      title: 'Merchant Management System',
      img: IMG3,
    },
    {
      id: 5,
      title: 'Re-enginering Merchant Management System',
      img: IMG5,
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
          <h3>{pro.title}</h3>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio