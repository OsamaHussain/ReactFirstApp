import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './Logo.png'

function Header(){
  return (
    <header>
        <nav className='nav'>
            <img src={logo} alt='LOGO' className='nav-logo' />
            <ul className='nav-items'>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
        </nav>
      </header>
  );
}

function Footer(){
  return (
      <footer>
      <small>&copy;2022 CodeWithOsama. All rights reserved.</small>
      </footer>
  );
}

function Content(){
  return (
    <div className='content'>
      <h1>Why to Learn React</h1>
      <ul>
        <li>It's Powerful to have skills on</li>
        <li>It's requied by most of the companies</li>
        <li>It's Composible and resusable</li>
        <li>It's Lightweight and Descriptive Tool</li>
      </ul>
    </div>
  );
}

function Page(){
  return (
      <>
      <Header />
      <Content />
      <Footer />
      </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page />
);
