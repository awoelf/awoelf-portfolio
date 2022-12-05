// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

// Component imports
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className='App h-100 d-flex flex-column'>
      <AppHeader />
      <Portfolio />
      <AppFooter />
    </div>
  );
}

export default App;
