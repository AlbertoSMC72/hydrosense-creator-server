import { Router } from "express";
import datasRouter from "./datas.router.js";
import reportRouter from "./reports.router.js";

const router = Router();
const prefijo = "app";

router.use(`/${prefijo}/data`, datasRouter)
router.use(`/${prefijo}/report`, reportRouter)


export default router;
