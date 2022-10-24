import { Router } from "express";
import loginController from "../Controller/locationController.js";
const router = new Router();

router.post("/country", loginController.getCountry);

export default router;
