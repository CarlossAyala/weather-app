import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  function getFullYear() {
    const year = new Date().getFullYear();
    return year;
  }
  return (
    <>
      <div className='footer'>
        <div className='footer--item'>
          <h3 className='title-3'>Follow Me</h3>
          <ul>
            <li>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <i className='bx bxl-github' />
                GitHub
              </a>
            </li>
            <li>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <i className='bx bxl-twitter' />
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className='footer--item'>
          <h3 className='title-3'>Project Resources</h3>
          <ul>
            <li>
              <a href='https://developer.foreca.com/' target='_blank' rel='author noreferrer'>
                API Weather
              </a>
            </li>
            <li>
              <a href='https://haikei.app/' target='_blank' rel='author noreferrer'>
                Generate SVG Waves
              </a>
            </li>
            <li>
              <a
                href='https://fonts.google.com/specimen/Quicksand?query=Quicksand#standard-styles'
                target='_blank'
                rel='author noreferrer'
              >
                Font used
              </a>
            </li>
            <li>
              <a
                href='https://coolors.co/'
                target='_blank'
                rel='author noreferrer'
              >
                Color Palette Generator
              </a>
            </li>
          </ul>
        </div>
        <div className='msg-footer'>
          Copyright &copy;
          {' '}
          {getFullYear()}
          {' '}
          Carlos Ayala. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
