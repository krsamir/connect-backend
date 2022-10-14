import { Router } from "express";
import loginController from "../Controller/loginController.js";
const router = new Router();

router.post("/login", loginController.login);
router.post("/register", loginController.register);
router.post("/verify", loginController.verification);
router.post("/reset", loginController.resetPassword);
router.post("/reset/final", loginController.resetPasswordFinal);
router.post("/reset/verify", loginController.resetPasswordVerification);

export default router;
