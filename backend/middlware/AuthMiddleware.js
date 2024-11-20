import { auth } from '../firebaseConfig.js';

export const authorize = (requiredRole) => async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  try {
    const decodedToken = await auth.verifyIdToken(token);
    if (decodedToken.role === requiredRole) {
      return next();
    }
    return res.status(403).send({ error: 'Access denied' });
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized' });
  }
};
