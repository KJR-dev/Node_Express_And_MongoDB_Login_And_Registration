import express from 'express';
import loginRegistrationController from '../controllers/loginRegistrationController.js';
const router=express.Router();

router.get('/', loginRegistrationController.loginForm)
router.post('/', loginRegistrationController.verifyUserLogin)
router.get('/registration', loginRegistrationController.registrationForm)
router.post('/registration', loginRegistrationController.userRegistration)

export default router