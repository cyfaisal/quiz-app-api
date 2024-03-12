import express from "express";
import { ResultController } from "../controllers/result.controller";

const router = express.Router();

const resultController = new ResultController();

router.post("/", resultController.createResult.bind(resultController));

router.get("/", resultController.getAllResults.bind(resultController));

router.get("/:id", resultController.getResult.bind(resultController));

router.patch("/:id", resultController.updateResult.bind(resultController));

router.delete("/:id", resultController.deleteResult.bind(resultController));

export default router;
