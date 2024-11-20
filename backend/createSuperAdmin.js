import { auth } from './firebaseConfig.js';

async function createSuperAdmin() {
  try {
    const user = await auth.createUser({
      email: 'tpp@gmail.com',
      password: 'codeTribe@123', // Use a strong password
      displayName: 'Super Admin',
    });

    // Assign the Super-Admin role using custom claims
    await auth.setCustomUserClaims(user.uid, { role: 'SuperAdmin' });

    console.log(`Super-Admin created successfully: ${user.email}`);
  } catch (error) {
    console.error('Error creating Super-Admin:', error.message);
  }
}

createSuperAdmin();
