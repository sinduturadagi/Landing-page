import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work.js';
import Testimonial from './components/Testimonial.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Work />
     <Testimonial />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
