import React from 'react';
import GeneralPage from './pages/Generalpage.tsx/GeneralPage';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GeneralPage />
      </BrowserRouter>

    </>
  );
}

export default App;
