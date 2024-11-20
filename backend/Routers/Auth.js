import express from 'express';
import { auth } from '../firebaseConfig.js';

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await auth.createUser({
      email,
      password,
    });

    await auth.setCustomUserClaims(user.uid, { role });

    res.status(201).send({ message: 'User created', uid: user.uid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = await auth.verifyIdToken(token);
    res.status(200).send({ message: 'Login successful', user: decodedToken });
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized' });
  }
});

export default router;
