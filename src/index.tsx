





import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockSection from './pages/stock';
import TeslaSection from './pages/tesla';
import AmazonSection from './pages/amazon';
import GoogleSection from './pages/google';
import AppleSection from './pages/apple';
import  MetaSection from './pages/ meta'
import MicrosoftSection from './pages/microsoft';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App:React.FC = () => {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<StockSection />}/>
      <Route path='/tesla' element={<TeslaSection />}/>
      <Route path='/amazon' element={<AmazonSection />}/>
      <Route path="/google" element={<GoogleSection />}/>
      <Route path='/apple' element={<AppleSection />}/>
      <Route path='/meta' element={<MetaSection />}/>
      <Route path='/microsoft' element={<MicrosoftSection />}/>
    </Routes>
   </Router>


    </>
  )
}
root.render( <App />);


