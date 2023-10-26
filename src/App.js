import './App.css';
import Navbar_content from './components/navbar_content';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import Productdetailpage from './components/productdetailpage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar_content/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetail/:productID" element={<Productdetailpage />} />
        </Routes>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
