import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MyGear from './pages/MyGear';
import Services from './pages/Services';
import Community from './pages/Community';
import Member from './pages/Member';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/my-gear" replace />} />
        <Route path="my-gear" element={<MyGear />} />
        <Route path="services" element={<Services />} />
        <Route path="community" element={<Community />} />
        <Route path="member" element={<Member />} />
      </Route>
    </Routes>
  );
}

export default App;
