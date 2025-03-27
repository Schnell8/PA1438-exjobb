import LoginForm from '../components/LoginForm';

const StartView = () => {
    const handleRegister = () => {
        console.log('Redirecting to registration route...');
        // Lägg till navigering till registreringssida
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