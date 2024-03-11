import About from './About.jsx';
import './App.css';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Header from "./Header.jsx"
import Home from "./Home.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

function App() {
  return (
   <BrowserRouter>
   
       <Header />
       <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/About' element={ <About/>}/>
       <Route path='/Contact' element={<Contact />}/>
       </Routes>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
