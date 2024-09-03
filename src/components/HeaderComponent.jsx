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

export default Header

