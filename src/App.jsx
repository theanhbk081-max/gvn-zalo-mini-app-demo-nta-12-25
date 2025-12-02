import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Utilities from './pages/Utilities';
import Rewards from './pages/Rewards';
import Profile from './pages/Profile';
import Layout from './components/Layout';

// Placeholder components for now
const DashboardPlaceholder = () => <div style={{ padding: '20px' }}>Dashboard Content</div>;
const UtilitiesPlaceholder = () => <div style={{ padding: '20px' }}>Utilities Content</div>;
const RewardsPlaceholder = () => <div style={{ padding: '20px' }}>Rewards Content</div>;
const ProfilePlaceholder = () => <div style={{ padding: '20px' }}>Profile Content</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="utilities" element={<Utilities />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
