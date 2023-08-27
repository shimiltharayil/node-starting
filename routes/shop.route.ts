import express from "express";
import path from "path";
const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});
router;

export default router;
