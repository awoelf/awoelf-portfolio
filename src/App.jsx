// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

// React Imports
import React, { useState } from 'react';

// Component imports
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import PageContent from './components/PageContent';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  return (
    <div className='App h-100 d-flex flex-column'>
      <AppHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage}/>
      <AppFooter />
    </div>
  );
}

export default App;
