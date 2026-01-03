
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Installation from './pages/Installation.tsx';
import Repair from './pages/Repair.tsx';
import Maintenance from './pages/Maintenance.tsx';
import Admin from './pages/Admin.tsx';
import { Page } from './types.ts';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={Page.HOME} element={<Home />} />
          <Route path={Page.INSTALLATION} element={<Installation />} />
          <Route path={Page.REPAIR} element={<Repair />} />
          <Route path={Page.MAINTENANCE} element={<Maintenance />} />
          <Route path={Page.ADMIN} element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
