import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import "./styles/headernav.css";
import "./styles/App.css";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/logement" element={<Logement />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
