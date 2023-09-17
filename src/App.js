import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Home } from './components/Home/Home';
import Qualification from './components/qualification/Qualification';
import ScrillUp from './components/scrollup/ScrillUp';
import Services from './components/services/Services';
import Skills from './components/Skills/Skills';

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
     <Contact/>
     </main>
     <Footer/>
     <ScrillUp/>
    
    </>
  );
}

export default App;
