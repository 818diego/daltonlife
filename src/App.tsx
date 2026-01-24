import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaquetesVipPage from './pages/PaquetesVipPage';
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import { NotificationProvider } from './utils/Notification/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paquetes-vip" element={<PaquetesVipPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
}

export default App;
