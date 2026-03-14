import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Aptitude from './pages/Aptitude';
import Coding from './pages/Coding';
import Mock from './pages/Mock';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/mock" element={<Mock />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
