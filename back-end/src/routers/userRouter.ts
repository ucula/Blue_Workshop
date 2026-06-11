import express from "express";
import controllers from "../controllers/user/index";

const router = express.Router();

router.get("/user", controllers.getUser);
router.get("/user/:id", controllers.getUserById);
router.post("/user", controllers.createUser);
router.patch("/user/:id", controllers.updateUserById);
router.delete("/user/:id", controllers.deleteuserById);

export default router;
