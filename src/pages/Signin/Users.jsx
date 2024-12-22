import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Fake API for user data
const fakeUsers = [
    { id: 1, email: 'user1@example.com', password: 'password123' },
    { id: 2, email: 'user2@example.com', password: 'password456' },
];

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();

        // Check user credentials against the fake API
        const user = fakeUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            alert('Login Successful!');
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/'); // Redirect to the home page
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="signin-container flex flex-col items-center">
            <h2 className="text-2xl mb-5">Sign In</h2>
            <form onSubmit={handleSignin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded"
                    required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="bg-green-500 text-white p-2 rounded">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Signin;
