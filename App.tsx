import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Session1 from './pages/Session1';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/session/1" element={<Session1 />} />
        {/* Placeholder for other sessions redirects to home for now */}
        <Route path="/session/*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;