// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

// Component imports
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <AppFooter />
    </div>
  );
}

export default App;
