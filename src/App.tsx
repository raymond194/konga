import React from 'react';
import GeneralPage from './pages/Generalpage.tsx/GeneralPage';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <GeneralPage />
      </BrowserRouter>

    </>
  );
}

export default App;
