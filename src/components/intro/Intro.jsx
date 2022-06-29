import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>Tentang Saya</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Pengalaman</h5>
              <small>2 Tahun</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>10+ Project Selesai</small>
            </article>
          </div>
          <p>Saya lulusan S1 jurusan teknik informatika
            (Universitas Kuningan). Saya mulai bekerja
            pada tahun 2019, dan menjadi developer
            php di Tahun 2021 bulan oktober sampai
            saat ini.
          </p>
          <a href="#contact" className="btn btn-primary">Hubungi Saya</a>
        </div>
      </div>
    </section>
  )
}

export default Intro