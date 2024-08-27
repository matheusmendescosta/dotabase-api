import { Router } from "express";
import { ListHeroes } from "../controllers/get-heroes";

const router = Router();

router.get("/heroes", (req, res) => ListHeroes(req, res));

export default router;
