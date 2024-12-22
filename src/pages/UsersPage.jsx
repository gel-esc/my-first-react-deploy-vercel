import { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Users</h1>
            <ul className="space-y-4">
                {users.map(user => (
                    <li key={user.id} className="border rounded p-4">
                        <h2 className="text-lg font-bold">{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{user.website}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
