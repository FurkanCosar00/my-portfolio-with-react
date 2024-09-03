import './App.css'
import { useState } from 'react';

import Header from './components/HeaderComponent.jsx';
import PageBannerSection from './components/PageBannerComponent.jsx';
import AboutMe from './components/AboutMeComponent.jsx';
import MySkills from './components/MySkillsComponent.jsx';
import MyWorks from './components/MyWorksComponent.jsx';
import ContactUs from './components/ContactUsComponent.jsx';
import Footer from './components/FooterComponent.jsx';
import Projects from './components/ProjectsComponent.jsx';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <Header showProjects={showProjects} setShowProjects={setShowProjects} />

      <div className="Page" style={{ display: showProjects ? 'none' : 'block' }}>
        <PageBannerSection />
        <AboutMe />
        <MySkills />
        <MyWorks />
        <ContactUs />
      </div>

      <div className="projects" style={{ display: showProjects ? 'block' : 'none' }}>
        <Projects />
      </div>

      <Footer />
    </>
  )
}

export default App
