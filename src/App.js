import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <Header/>
      <Home />
      <Contact />
      <About />
      <Footer/>
      </>

  );
}

export default App;