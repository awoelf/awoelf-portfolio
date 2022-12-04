// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

// Component imports
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
// import AboutMe from './components/AboutMe';
import PortfolioCard from './components/PortfolioCard';


function App() {
  return (
    <div className='App h-100 d-flex flex-column'>
      <AppHeader />

      <PortfolioCard />
      <AppFooter />
    </div>
  );
}

export default App;
