import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

function PageContent({ currentPage }) {
  switch (currentPage) {
    case 'AboutMe':
      return <AboutMe />;
    case 'Portfolio':
      return <Portfolio />;
    case 'Resume':
      return <Resume />;
    case 'Contact':
      return <Contact />;
    default:
      return <AboutMe />;
  }
}

export default PageContent;
