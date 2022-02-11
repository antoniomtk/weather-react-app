import React, { useContext } from 'react';
import { ResultContext } from '../context';

const Form = () => {

   const context = useContext(ResultContext);
   const { location, handleChange, handleSubmit, handleClear } = context;

   return (
      <>
         <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search location..." value={location} required onChange={handleChange} className="animate__animated animate__fadeInDown" />
            <div className="buttons">
               <input className="search-btn animate__animated animate__fadeInUp" type="submit" value="Search" />
               <input className="reset-btn animate__animated animate__fadeInUp" type="reset" onClick={handleClear} />
            </div>
         </form>
      </>
   )
}

export default Form;