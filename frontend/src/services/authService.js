export const registerUser = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/auth/register', { // Make dynamical
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }

        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/auth/login', { // Make dynamical
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        localStorage.setItem('token', data.token);
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};
