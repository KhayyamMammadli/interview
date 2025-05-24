=import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';


interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}


const clientId = '520953093652-oro7mg9doml4f7c78jdblfuuli6ko881.apps.googleusercontent.com';

function App() {
  const [user, setUser] = useState<GoogleUser | null>(null);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {user ? (
        <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
          <h1>Online Müsahibə Sorğusu</h1>
          <Outlet />
        </div>
      ) : (
        <LoginPage onLogin={(userData: any) => setUser(userData)} />
      )}
    </GoogleOAuthProvider>
  );
}

export default App;
