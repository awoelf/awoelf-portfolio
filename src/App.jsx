// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

// Component imports
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='App h-100 d-flex flex-column'>
      <AppHeader />
      <AboutMe />
      <AppFooter />
    </div>
  );
}

export default App;
