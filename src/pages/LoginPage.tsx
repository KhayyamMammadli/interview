// src/pages/LoginPage.tsx
import { Card, Typography } from 'antd';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const { Title } = Typography;

const LoginPage = ({ onLogin }: { onLogin: (user: any) => void }) => {
  const handleSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      const decoded: any = jwtDecode(credentialResponse.credential);
      onLogin(decoded); 
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f2f5',
    }}>
      <Card style={{ width: 400, textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Title level={3}>Hesabınıza daxil olun</Title>
        <p>Giriş üçün Google istifadə edin</p>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log('Login failed')}
        />
      </Card>
    </div>
  );
};

export default LoginPage;
