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
      <h1>
        <span> &lt;C/&gt; </span>
        FurkanCosar
      </h1>

      <ul className='pageSections'>
        <li>
          <button 
            onClick={showPage} 
            className={!showProjects ? 'active' : ''}
          >
            Page
          </button>
        </li>
        <li>
          <button 
            onClick={showProjectsSection} 
            className={showProjects ? 'active' : ''}
          >
            Projects
          </button>
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
  return(
    <>
      <div className="projectsSection">
        <div className="projectSectionTexts">
          <h1>Projects</h1>

          <ul className='filterTags'>
            <li><button>All</button></li>
            <li><button>Reactive</button></li>
            <li><button>Designs</button></li>
          </ul>
        </div>

        <div className="allProjects"> 
          <div class="ProjectsItem">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p class="title">card title</p>
            <div class="overlay"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>

          <div class="ProjectsItem">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p class="title">card title</p>
            <div class="overlay"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>

          <div class="ProjectsItem">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p class="title">card title</p>
            <div class="overlay"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>

          <div class="ProjectsItem">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p class="title">card title</p>
            <div class="overlay"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>

          <div class="ProjectsItem">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p class="title">card title</p>
            <div class="overlay"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>

          <div class="ProjectsItem">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p class="title">card title</p>
            <div class="overlay"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>

          <div class="ProjectsItem">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p class="title">card title</p>
            <div class="overlay"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
