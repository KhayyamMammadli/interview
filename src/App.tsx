import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <h1>Online Müsahibə Sorğusu</h1>
      <Outlet />
    </div>
  );
}

export default App;
