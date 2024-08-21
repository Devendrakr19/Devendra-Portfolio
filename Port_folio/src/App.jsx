import { useEffect } from 'react';
import './App.css'
import Home from './Components/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      // duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
       <Home/>
    </>
  )
}

export default App
