import { useState } from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        console.log('Register with: ', username, password, email);
        // Lägg till kod för att kontrollera username/email + hasha lösenord
        // --> Gör en inloggning
        // --> Gå till dashboard
    };

    return (
        <form onSubmit={handleRegister}>
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
            <input
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;