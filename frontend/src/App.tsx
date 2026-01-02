import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AgentApp from './pages/AgentApp';
import Layout from './components/Layout';
import TeamManagement from './pages/TeamManagement';
import CustomerManagement from './pages/CustomerManagement';
import SalesManagement from './pages/SalesManagement';
import UserManagement from './pages/UserManagement';

function App() {
  const { isAuthenticated, user, loadFromStorage } = useAuthStore();

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {user?.role === 'agent' ? (
          <>
            <Route path="/" element={<AgentApp />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="teams" element={<TeamManagement />} />
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="sales" element={<SalesManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
