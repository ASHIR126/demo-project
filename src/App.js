
import { Route, Routes } from 'react-router-dom'
import { ContactUs } from './Components/ContactUs';
import FeaturedPlaces from './Components/FeaturedPlaces';
import Home from './Components/Home';
import OurServices from './Components/OurServices';
import Navabar from './Components/Navabar';




function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Navabar /> */}
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blogs' element={<FeaturedPlaces />} />
        <Route path='/services' element={<OurServices />} />
      </Routes>
    </div>
  );
}

export default App;
