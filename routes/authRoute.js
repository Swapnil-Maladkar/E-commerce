import express from 'express'
import { registerController ,loginController ,testController,forgotPasswordController} from '../controllers/authController.js'

import { isAdmin, requireSignIn } from '../middlewares/authMIddleware.js';
// router object
const router=express.Router();

//Routing
//Register
router.post('/register',registerController);

router.post('/login',loginController);

router.get('/test',requireSignIn,isAdmin,testController);

//Forgot Password
router.post('/forgot-password',forgotPasswordController);
//User Route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
//Admin Route
  router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router;