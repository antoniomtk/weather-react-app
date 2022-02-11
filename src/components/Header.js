import React from 'react';

const Header = () => {
   return (
      <>
         <header className="header">
            <h1 className="header-text animate__animated animate__zoomIn"><span className="w">W</span>eather<span className="slash"> / </span>AP<span className="seven">7</span></h1>
            <p className="header-info animate__animated animate__fadeInUp">This is a simple Weather application powered by React App and OpenWeatherMap API.</p>
            <p className="header-info animate__animated animate__fadeInUp">You can enter location name for results below...</p>
         </header>
      </>
   )
}

export default Header;