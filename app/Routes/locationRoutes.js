import { isAuthenticated } from "../MiddleWares/Authentication.js";
import { Router } from "express";
import loginController from "../Controller/locationController.js";
const router = new Router();

router.use(isAuthenticated);
router.post("/country", loginController.getCountry);

export default router;
