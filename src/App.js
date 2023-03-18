import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import { Home } from './components/Home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/Skills/Skills';
import Testimonials from './components/testimonials.jsx/Testimonials';

function App() {
  return (
    <>
     <Header/>
     <main className='main'>
     <Home/>
     <About/>
     <Skills/>
     <Services/>
     <Qualification/>
     <Testimonials/>
     <Contact/>
     </main>
    
    </>
  );
}

export default App;
