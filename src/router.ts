import {Router} from 'express';
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysContoller = new SurveysController();

router.post("/users", userController.create);
router.post("/surveys", surveysContoller.create);
router.get("/surveys", surveysContoller.show);

export { router };