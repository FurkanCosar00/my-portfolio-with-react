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

export default PageBannerSection