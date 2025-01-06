import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About me</h2>
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
              <h5>Experience Working</h5>
              <small>5+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>10+ Project Selesai</small>
            </article>
          </div>
          <p>I am a graduate of S1 majoring in informatics engineering
(University of Kuningan). I started working
in 2019, and became a php developer in October 2021 until
now
.
          </p>
          <a href="#contact" className="btn btn-primary">Call Me</a>
        </div>
      </div>
    </section>
  )
}

export default Intro