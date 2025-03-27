import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

const StartView = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        console.log('Redirecting to register route...');
        navigate('/register');
    };

    return (
        <div className='startView'>
            <div className='container'>
                <h2>Start</h2>
                <LoginForm />
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default StartView;