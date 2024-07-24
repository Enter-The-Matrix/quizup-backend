import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

// verified Routes

router.route('/logout').post(verifyJWT, loginUser)

export default router