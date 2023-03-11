import express from "express"

import * as controllers from "../controllers/auth.js"

const router =  express.Router();

router.get('/',controllers.welcome );
router.post('/pre-register', controllers.preRegister);
router.post('/register', controllers.register);
router.post('/login',controllers.login);
router.post('/forgot-password',controllers.forgotPassword);

export default router;