import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logging in with: ', username, password);
        // Lägg till autentisering här
        // AuthService fil?
        // Then go to /dashboard
        console.log('Redirecting to dashboard route...');
        navigate('/dashboard');
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="username" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            <input
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <br/>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;