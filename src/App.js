import React  from 'react';
import { MyProvider } from './context';
import Header from './components/Header';
import Result from './components/Result';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

const App = () => {
   return (
      <MyProvider>
         <div className="App">
            <Header />
            <Form />
            <Result />
            {/* <Footer /> */}
         </div>
      </MyProvider>
   );
}

export default App;


