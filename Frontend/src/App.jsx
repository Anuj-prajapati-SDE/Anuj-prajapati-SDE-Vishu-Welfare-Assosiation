import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import WhatSetsUsApart from './pages/WhatSetsUsApart/WhatSetsUsApart';
// import BlogPage from './pages/WhatSetsUsApart/BlogPage';
import { MissionVesionPage } from './pages/Mission&Vesion/MissionVesionPage';
import LeaderShipPage from './pages/LeaderShip/LeaderShipPage';
import ContactPage from './pages/Contact/ContactPage';
import GalleryPage from './pages/Gallery/GalleryPage';
import ErrorPage from './pages/Error/ErrorPage';
import PrivaryPage from './pages/Security/PrivaryPage';
import TermConditionPage from './pages/Security/TermConditionPage';
import UnderMaintenancePage from './pages/Error/UnderMaintenancePage';
import DonationPage from './pages/Donation/DonationPage';
import VolunterPage from './components/volunter/VolunterPage';
import PartnerPage from './pages/Partner/PartnerPage';
import OurWorkArea from './pages/OurWorkArea/OurWorkArea';
import Careers from './pages/Careers/CareersPage';
function App() {

  return (
    <Router>
            <Routes> 
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/what-sets-us-apart" element={<WhatSetsUsApart />} />
              {/* <Route path="/blogs" element={<BlogPage/>} /> */}
              <Route path="/mission-vesion" element={<MissionVesionPage/>} />
              <Route path="/our-leadership" element={<LeaderShipPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/careers" element={<Careers/>} />
              <Route path="/volunters" element={<VolunterPage/>} />
              <Route path="/gallery" element={<GalleryPage/>} />
              <Route path="/our-work-area" element={<OurWorkArea/>} />
              <Route path="/privary-policy" element={<PrivaryPage/>} />
              <Route path="/terms-condition" element={<TermConditionPage/>} />
              <Route path="/under-maintenance" element={<UnderMaintenancePage/>} />
              <Route path="/donate" element={<DonationPage/>} />
              <Route path="/partner-with-us" element={<PartnerPage/>} />

              <Route path="*" element={<ErrorPage/>} />


            </Routes>     
      </Router>
  )
}

export default App
