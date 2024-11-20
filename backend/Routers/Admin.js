import express from 'express';
import { authorize } from '../middlware/AuthMiddleware.js';

const router = express.Router();

router.post('/add-general-admin', authorize('SuperAdmin'), (req, res) => {
  // Code to add a general admin
  res.send('General Admin added');
});

export default router;
