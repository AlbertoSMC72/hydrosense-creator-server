import { Router } from "express";
import datasRouter from "./datas.router.js";
import reportRouter from "./reports.router.js";
import engineRouter from "./engines.router.js";

const router = Router();
const prefijo = "app";

router.use(`/${prefijo}/data`, datasRouter)
router.use(`/${prefijo}/report`, reportRouter)
router.use(`/${prefijo}/engine`, engineRouter)

export default router;
