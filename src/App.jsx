import './App.css'
import { useState } from 'react';

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

function Header({ showProjects, setShowProjects }) {

  function showPage() {
    setShowProjects(false);
  }

  function showProjectsSection() {
    setShowProjects(true);
  }

  return (
    <header className="header">
      <h1><span> &lt;C/&gt; </span>FurkanCosar</h1>

      <ul className='pageSections'>
        <li>
          <button onClick={showPage} className={!showProjects ? 'active' : ''}>Page</button>
        </li>

        <li>
          <button onClick={showProjectsSection} className={showProjects ? 'active' : ''}>Projects</button>
        </li>
      </ul>

      <ul className='headerSocials'>
        <li><a target="_blank" href="https://www.instagram.com/luchhass/"><img src="./assets/images/header/instagramHeader.png" alt="" /></a></li>
        <li><a target="_blank" href="http://discordapp.com/users/_luchhass"><img src="./assets/images/header/discordHeader.png" alt="" /></a></li>
        <li><a target="_blank" href="https://github.com/FurkanCosar00"><img src="./assets/images/header/githubHeader.png" alt="" /></a></li>
      </ul>
    </header>
  )
}

function PageBannerSection() {
  return (
    <div className="pageBannerSection">
      <h1 className='BannerSectionTitle'>developer</h1>

      <div className="developerInformationCard">
        <div className="myProfile">
          <img src="./assets/images/pageBanner/profilePicture.png" alt="" />
          <div className="profileTexts">
            <h3>Furkan</h3>
            <p>Frontend developer</p>
          </div>
        </div>
      
        <div className="cardSectionTexts">
          <ul className="myInformations">
            <li><img src="./assets/images/pageBanner/mail.png" alt="" />furkancosar2005@gmail.com</li>
            <li><img src="./assets/images/pageBanner/map.png" alt="" />Turkey</li>
            <li><img src="./assets/images/pageBanner/briefcase.png" alt="" />Full-time / Freelancer</li>
            <li><img src="./assets/images/pageBanner/link.png" alt="" />www.furkancosar.com.tr</li>
          </ul>

          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
          </ul>
        </div>

        <button>Download CV <img src="./assets/images/pageBanner/downloadLogo.png" alt="" /></button>
      </div>

      <div className="desktopResponsive">
        <div className="PageBannerTexts">
          <div className="bannerTitle">
            <span>&lt;h1&gt;</span>
            <h1>Hey<br />I’m <span>Furkan</span>,<br />Front-End developer</h1>
            <span>&lt;/h1&gt;</span>
          </div>

          <div className="bannerParagraph">
            <span>&lt;p&gt;</span>
            <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
            <span>&lt;/p&gt;</span>
          </div>

        <h1 className='letsTalkText'>let’s talk <img src="./assets/images/pageBanner/LetsTalk.png" alt="" /></h1>
        </div>

        <div className="yearsOfExperience">
          <div className="expItem">
            <h2>4</h2>
            <p>Programming Language</p>
          </div>

          <div className="expItem">
            <h2>6</h2>
            <p>Development Tools</p>
          </div>

          <div className="expItem">
            <h2>8</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div className="aboutMe">
      <h1>About Me</h1>

      <div className="aboutMeParagraph">
        <span>&lt;p&gt;</span>

        <h2>Hello! </h2>

        <p>
          My name is Furkan and I
          specialize in web developement
          that utilizes <span>HTML</span>, <span>CSS</span>, <span>JS</span>,
          and <span>REACT</span> etc. <br /><br />

          I am a highly motivated
          individual and eternal
          optimist dedicated to writing
          clear, concise, robust code
          that works. Striving to never
          stop learning and improving. <br /><br />

          When I'm not coding, I am
          <span>playing games</span>, reading, or
          picking up some new hands-on
          art project like <span>photography</span> <br /><br />

          I like to have my perspective
          and belief systems challenged
          so that I see the world
          through new eyes.
        </p>

        <span>&lt;/p&gt;</span>
      </div>
    </div>
  )
}

function MySkills() {
  return (
    <div className="mySkills">
      <div className="allSectionTitle">
        <h1>Skills</h1>
        <p>I am striving to never stop learning and improving</p>
      </div>

      <div className="developmentCards">
        <div className="devCard">
          <img src="./assets/images/mySkills/developmentCardDesktop.png" alt="" />
          <h3>web developement</h3>
          <p>HTML·CSS·JS·REACT</p>
        </div>

        <div className="devCard">
          <img src="./assets/images/mySkills/developmentCardMobile.png" alt="" />
          <h3>web developement</h3>
          <p>HTML·CSS·JS·REACT</p>
        </div>
      </div>

      <div className="ProgrammingLanguages">
        <div className="language">
          <img src="./assets/images/mySkills/htmlLogo.png" alt="" />
          <p>HTML</p>
        </div>

        <div className="language">
          <img src="./assets/images/mySkills/cssLogo.png" alt="" />
          <p>CSS</p>
        </div>

        <div className="language">
          <img src="./assets/images/mySkills/jsLogo.png" alt="" />
          <p>JS</p>
        </div>

        <div className="language">
          <img src="./assets/images/mySkills/reactLogo.png" alt="" />
          <p>REACT</p>
        </div>
      </div>
    </div>
  )
}

function MyWorks() {
  return (
    <div className="MyWorks">
      <div className="allSectionTitle">
        <h1>Works</h1>
        <p>I had the pleasure of working with these awesome projects</p>
      </div>

      <div className="MyWorksLink">
        <div className="viewProjectsLink">
          <a href="">View Projects</a>
          <img src="./assets/images/myWorks/pointerLogo.png" alt="" />
        </div>

        <img src="./assets/images/myWorks/myWorksContent.png" alt="" />
      </div>
    </div>
  )
}

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="allSectionTitle">
        <h1>Contact</h1>
        <p>I’m currently available for freelance work</p>
      </div>

      <form className="formGroup">
        <h1>Send Me A Message</h1>

        <label>Your name * <input type="text" name='yourName' placeholder='Enter your name'/></label>
        <label>Your email * <input type="text" name='yourEmail' placeholder='Enter your email'/></label>
        <label>Your message * <input type="text" name='yourMessage' placeholder='Enter your needs'/></label>

        <button>Send Message <img src="./assets/images/contactUs/sendMessage.png" alt="" /></button>
      </form>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">

      <ul className='footerSocials'>
        <li><a target="_blank" href="https://www.instagram.com/luchhass/"><img src="./assets/images/footer/InstagramFooter.png" alt="" /></a></li>
        <li><a target="_blank" href="http://discordapp.com/users/_luchhass"><img src="./assets/images/footer/DiscordLogo.png" alt="" /></a></li>
        <li><a target="_blank" href="https://github.com/FurkanCosar00"><img src="./assets/images/footer/GithubFooter.png" alt="" /></a></li>
      </ul>

      <ul className='footerTexts'>
        <li>© 2023 SinanTokmak. All rights reserved.</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>

      <p>Design By <span>JohannLeon</span></p>
    </footer>    
  )
}

function Projects() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const projects = [
    {
      id: 21,
      title: 'Lnading Page',
      category: 'designs',
      imgSrc: './assets/images/screenshots/landing-page.png',
      buttonLink: 'https://furkancosar-landingpage.netlify.app',
    },
    {
      id: 20,
      title: 'My Portfolio',
      category: 'designs',
      imgSrc: './assets/images/screenshots/my-portfolio.png',
      buttonLink: 'https://furkancosar-portfolio.netlify.app',
    },
    {
      id: 19,
      title: 'Help Support',
      category: 'designs',
      imgSrc: './assets/images/screenshots/help-support.png',
      buttonLink: 'https://furkancosar-helpsupport.netlify.app',
    },
    {
      id: 18,
      title: 'Designo',
      category: 'designs',
      imgSrc: './assets/images/screenshots/designo.png',
      buttonLink: 'https://furkancosar-designo.netlify.app',
    },
    {
      id: 17,
      title: 'Single Page',
      category: 'designs',
      imgSrc: './assets/images/screenshots/single-page-design.png',
      buttonLink: 'https://furkancosar-singlepage.netlify.app',
    },
    {
      id: 16,
      title: 'Dine',
      category: 'designs',
      imgSrc: './assets/images/screenshots/dine-restaurant.png',
      buttonLink: 'https://furkancosar-dine.netlify.app',
    },
    {
      id: 15,
      title: 'Blog Page',
      category: 'designs',
      imgSrc: './assets/images/screenshots/blog-page-lookscout.png',
      buttonLink: 'https://furkancosar-bloglookscout.netlify.app',
    },
    {
      id: 14,
      title: 'Audiphile',
      category: 'designs',
      imgSrc: './assets/images/screenshots/audiophile.png',
      buttonLink: 'https://furkancosar-audiophile.netlify.app',
    },
    {
      id: 13,
      title: 'Ecommerce',
      category: 'designs',
      imgSrc: './assets/images/screenshots/ecommerce.png',
      buttonLink: 'https://furkancosar-ecommerce.netlify.app',
    },
    {
      id: 12,
      title: 'Shop Your Way',
      category: 'designs',
      imgSrc: './assets/images/screenshots/shop-your-way.png',
      buttonLink: 'https://furkancosar-shopyourway.netlify.app',
    },
    {
      id: 11,
      title: 'Order Summary',
      category: 'designs',
      imgSrc: './assets/images/screenshots/order-summary.png',
      buttonLink: 'https://furkancosar-ordersummary.netlify.app',
    },
    {
      id: 10,
      title: 'Muze',
      category: 'designs',
      imgSrc: './assets/images/screenshots/muze.png',
      buttonLink: 'https://furkancosar-muze.netlify.app',
    },
    {
      id: 9,
      title: 'Foundations',
      category: 'designs',
      imgSrc: './assets/images/screenshots/html-css-foundations.png',
      buttonLink: 'https://furkancosar-foundations.netlify.app',
    },
    {
      id: 8,
      title: 'Furniture',
      category: 'designs',
      imgSrc: './assets/images/screenshots/furniture.png',
      buttonLink: 'https://furkancosar-furniture.netlify.app.app',
    },
    {
      id: 7,
      title: 'Feeling Lost',
      category: 'designs',
      imgSrc: './assets/images/screenshots/feeling-lost.png',
      buttonLink: 'https://furkancosar-feelinglost.netlify.app',
    },
    {
      id: 6,
      title: 'Accordion',
      category: 'designs',
      imgSrc: './assets/images/screenshots/faq-accordion.png',
      buttonLink: 'https://furkancosar-faqacordion.netlify.app',
    },
    {
      id: 5,
      title: 'Dashboard',
      category: 'designs',
      imgSrc: './assets/images/screenshots/fabrx-admin-dashboard.png',
      buttonLink: 'https://furkancosar-fabrxadmin.netlify.app',
    },
    {
      id: 4,
      title: 'Collabration',
      category: 'designs',
      imgSrc: './assets/images/screenshots/collabration-made-easy.png',
      buttonLink: 'https://furkancosar-madeeasy.netlify.app',
    },
    {
      id: 3,
      title: 'Blog Page',
      category: 'designs',
      imgSrc: './assets/images/screenshots/blog-page.png',
      buttonLink: 'https://furkancosar-blogpage.netlify.app',
    },
    {
      id: 2,
      title: 'Biggy Burger',
      category: 'designs',
      imgSrc: './assets/images/screenshots/biggy-burger.png',
      buttonLink: 'https://furkancosar-biggyburger.netlify.app',
    },
    {
      id: 1,
      title: 'Amarachi',
      category: 'designs',
      imgSrc: './assets/images/screenshots/amarachi-nkechi.png',
      buttonLink: 'https://furkancosaramarachinkechi.netlify.app',
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') {
      return true;
    }
    return project.category === filter;
  });

  return (
    <>
      <div className="projectsSection">
        <div className="projectSectionTexts">
          <h1>Projects</h1>

          <ul className="filterTags">
            <li><button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button></li>
            <li><button onClick={() => handleFilterChange('reactive')} className={filter === 'reactive' ? 'active' : ''}>Reactive</button></li>
            <li><button onClick={() => handleFilterChange('designs')} className={filter === 'designs' ? 'active' : ''}>Designs</button></li>
          </ul>
        </div>

        <div className="allProjects">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`ProjectsItem ${project.category}`}>
              <img src={project.imgSrc} alt={project.title} />
              <p className="title">{project.title}</p>
              <div className="overlay"></div>
              <div className="button"><a target="_blank" href={project.buttonLink}>Siteye Git</a></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
