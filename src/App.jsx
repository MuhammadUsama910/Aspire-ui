import AboutUs from "./components/AboutUs";
import Customers from "./components/Customers";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Achievement from './components/Achievement';
import GetStartedToday from "./components/GetStartedToday";
import OurTeam from "./components/OurTeam";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Customers/>
      <AboutUs/>
      <Achievement/>
      <GetStartedToday/>
      <OurTeam/>
      <FrequentlyAsked/>
      <Footer/>
    </>
  )
}

export default App;