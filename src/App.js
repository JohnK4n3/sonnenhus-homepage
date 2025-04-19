import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Hauptseite from './pages/Hauptseite';
import Hus1 from './pages/Hus1';
import Hus2 from './pages/Hus2';
import Infos from './pages/Infos';
import GTC from './pages/GTC';
// import Booking from './pages/Booking';
import Data_Protection from './pages/Data_Protection';
import Imprint from './pages/Imprint';
import Navbar from './components/navbar';
import Booknow from './components/booknow1';
import Footer from './components/footer';
import Slideshow from './slideshow';
import ScrollToTop from './components/scrollToTop';
import MobileNavbar from "./components/mobileNavbar";
// import Request from "./pages/Request";
import Booking_Hus1 from "./pages/Booking_Hus1";
import Booking_Hus2 from "./pages/Booking_Hus2";
import Request_Hus1 from "./pages/Request_Hus1";
import Request_Hus2 from "./pages/Request_Hus2";
import Contact from "./pages/Contact";

function App() {
 
 function componentDidMount() {
    window.scrollTo(0, 0);
}

  return (
    <div className="App">
        
<Router> 
<ScrollToTop/>
  <Navbar/>
  <MobileNavbar/>
    <Routes>
        <Route path = "/" element = {<Hauptseite/>}>Hauptseite</Route>
        <Route path = "/hus1" element = {<Hus1/>}>Hus1</Route>
        <Route path = "/hus2" element = {<Hus2/>}>Hus2</Route>
        <Route path = "/infos" element = {<Infos/>}>Informationen</Route>
        <Route path = "/buchung_hus1" element = {<Booking_Hus1/>}>Buchung Hus1</Route>
        <Route path = "/buchung_hus2" element = {<Booking_Hus2/>}>Buchung Hus2</Route>
        <Route path = "/anfrage_hus1" element = {<Request_Hus1/>}>Buchungsanfrage Hus1</Route>
        <Route path = "/anfrage_hus2" element = {<Request_Hus2/>}>Buchungsanfrage Hus2</Route>
        <Route path = "/kontakt" element = {<Contact/>}>Kontakt</Route>
        <Route path = "/impressum" element = {<Imprint/>}>Impressum</Route>
        <Route path = "/agb" element = {<GTC/>}>AGB</Route>
        <Route path = "/datenschutz" element = {<Data_Protection/>}>Datenschutz</Route>
    </Routes>
  <Footer/>
</Router>
      
    </div>
  );
}

export default App;
