import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import des pages
import Home from './pages/Home';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
// Import des fichiers CSS
import "./styles/headerNav.css";
import "./styles/app.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/logement.css";
import "./styles/aPropos.css";
import "./styles/error.css";

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
