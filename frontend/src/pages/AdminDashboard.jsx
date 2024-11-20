import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

const AdminDashboard = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdTokenResult();
        setRole(token.claims.role);
      }
    };
    fetchRole();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {role === 'SuperAdmin' && <p>Welcome, SuperAdmin!</p>}
      {role === 'GeneralAdmin' && <p>Welcome, GeneralAdmin!</p>}
    </div>
  );
};

export default AdminDashboard;
