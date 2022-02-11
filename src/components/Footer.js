import React from 'react';

const Footer = () => {

   const year = new Date().getFullYear(); 

   return (
      <>
         <footer className="footer animate__animated animate__backInUp">
             <p className="footer-info">AP<span className="seven">7</span> &copy; <span className="year">{year}</span> </p>
         </footer>
      </>
   )
}

export default Footer;