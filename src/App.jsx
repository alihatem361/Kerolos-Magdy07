import "./App.css";
import About from "./Components/About/About";
import Chair from "./Components/ChairLocation/Chair";
import Contact from "./Components/Contact/Contact";
import Coworking from "./Components/Coworking/Coworking";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Latest from "./Components/Latest/Latest";
import Location from "./Components/Location/Location";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Recent from "./Components/Recent/Recent";
import Shared from "./Components/Shared/Shared";
import Subscribe from "./Components/Subscribe/Subscribe";





function App() {
  return (
<>
<Navbar/>
<Header/> 
<About/>
<Latest/>
<Shared/>
<Coworking/>
<Chair/>
<Explore/>
<Pricing/>
<Recent/>
<Contact/>
<Location/>
<Subscribe/>
<Footer/>
</>
    
  );
}

export default App;
