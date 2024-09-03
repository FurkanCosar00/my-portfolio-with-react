import { useState } from 'react';

function Projects() {
    const [filter, setFilter] = useState('all');
  
    const handleFilterChange = (filterType) => {
      setFilter(filterType);
    };
  
    const projects = [
      {
        id: 34,
        title: 'Job Listing',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/job-listing.png',
        buttonLink: 'https://furkancosar-joblisting.netlify.app',
      },
      {
        id: 33,
        title: 'Desserts',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/desserts.png',
        buttonLink: 'https://furkancosar-productwishlist.netlify.app',
      },
      {
        id: 32,
        title: 'Mortgage',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/mortgage-calc.png',
        buttonLink: 'https://furkancosar-mortgagecalculator.netlify.app',
      },
      {
        id: 31,
        title: 'Qulak Case',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/qulak-case.png',
        buttonLink: 'https://qulakcaseadmindashboard.netlify.app',
      },
      {
        id: 30,
        title: 'Tic Tac Toe',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/tic-tac-toe.png',
        buttonLink: 'https://furkancosartictactoe.netlify.app',
      },
      {
        id: 29,
        title: 'Pricing',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/pricing-system.png',
        buttonLink: 'https://furkancosar-pricing.netlify.app',
      },
      {
        id: 28,
        title: 'Countries',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/rest-countries.png',
        buttonLink: 'https://furkancosar-restcountries.netlify.app',
      },
      {
        id: 27,
        title: 'Contact Form',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/contact-form.png',
        buttonLink: 'https://furkancosar-contactform.netlify.app',
      },
      {
        id: 26,
        title: 'RPM',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/rock-paper-scissors.png',
        buttonLink: 'https://furkancosar-rpm.netlify.app',
      },
      {
        id: 25,
        title: 'Advice',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/advice-generator.png',
        buttonLink: 'https://furkancosar-advice.netlify.app',
      },
      {
        id: 24,
        title: 'Age Calculator',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/age-calculator.png',
        buttonLink: 'https://furkancosar-agecalc.netlify.app',
      },
      {
        id: 23,
        title: 'Tip Calculator',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/tip-calculator.png',
        buttonLink: 'https://furkancosar-tipcalculator.netlify.app',
      },
      {
        id: 22,
        title: 'Calculator',
        category: 'reactive',
        imgSrc: './assets/images/screenshots/calculator-blue.png',
        buttonLink: 'https://furkancosar-calculator.netlify.app',
      },
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
      },
      {
        id: 39,
        title: 'Devjobs',
        category: 'designs',
        imgSrc: './assets/images/screenshots/devjobs.png',
        buttonLink: 'https://furkancosar-devjobs.netlify.app',
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

export default Projects