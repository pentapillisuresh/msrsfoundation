import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './components/About/AboutUs';
import CSRProjects from './components/CSR/CSRProjects';
import ComplianceGovernance from './components/Compliance/ComplianceGovernance';
import BoardManagement from './components/Board/BoardManagement';
import GetInvolved from './components/GetInvolved/GetInvolved';
import KnowledgeHub from './components/Knowledge/KnowledgeHub';
import DigitalMedia from './components/Media/DigitalMedia';
import StatutoryCertificates from './components/Certificates/StatutoryCertificates';
import GetInTouch from './components/Contact/GetInTouch';
import DonateNow from './components/Donate/DonateNow';
import ScheduleMeeting from './components/Schedule/ScheduleMeeting';
import EventsInitiatives from './components/Events/EventsInitiatives';
// Import individual Get Involved components
import IndividualSupport from './components/GetInvolved/IndividualSupport';
import CorporatePartnership from './components/GetInvolved/CorporatePartnership';
import VolunteerForm from './components/GetInvolved/VolunteerForm';
import AuditReports from "./components/Audit/AuditReports"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/csr-projects" element={<CSRProjects />} />
          <Route path="/compliance" element={<ComplianceGovernance />} />
          <Route path="/board-management" element={<BoardManagement />} />
          
          {/* Get Involved Routes - Separate Pages */}
          <Route path="/get-involved/individual" element={<IndividualSupport />} />
          <Route path="/get-involved/corporate" element={<CorporatePartnership />} />
          <Route path="/get-involved/volunteer" element={<VolunteerForm />} />
          <Route path="/get-involved" element={<Navigate to="/get-involved/individual" replace />} />
          
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/digital-media" element={<DigitalMedia />} />
          <Route path="/certificates" element={<StatutoryCertificates />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
          <Route path="/events" element={<EventsInitiatives />} />
          <Route path="/audit-reports" element={<AuditReports />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;