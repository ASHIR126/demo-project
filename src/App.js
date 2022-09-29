// import './App.css';
// import './assets/css/Bootstrapstyle.css'
// import FeaturedPlaces from './FeaturedPlaces';
import { ContactUs } from './Components/ContactUs';
import Foooter from './Components/Foooter';
import { Header } from "./Components/Header";
import Navabar from "./Components/Navabar";
import OurServices from './Components/OurServices';
import PopularPlace from './Components/PopularPlace';
import PricingSection from './Components/PricingSection';
import VideoPresentation from './Components/VideoPresentation';
import FeaturedPlaces from './Components/FeaturedPlaces';




function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Navabar />
      <Header />
      <PopularPlace />
      <FeaturedPlaces />
      <OurServices />
      <VideoPresentation />
      <PricingSection />
      <ContactUs />
      <Foooter />
    </div>
  );
}

export default App;
