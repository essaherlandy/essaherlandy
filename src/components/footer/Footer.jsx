import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

import moment from 'moment'
const dateTime = new Date()

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Mohamad Essa Herlandy</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/essaherlandy/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/essaherlandy" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; M.E.H {moment(dateTime).format('YYYY')}. All rights reserved.</small>
      </div>
    </footer>
  )
}


export default Footer