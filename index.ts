import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import adminRouter from "./routes/admin.route";
import shopRouter from "./routes/shop.route";

dotenv.config({ path: ".env" });

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

//! Adding the 404 route
//
app.use((req: Request, res: Response, next: Function) => {
  res.status(404).send("Page not found");
  next();
});

//! Routes

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
