import Express from "express";
import { config } from "dotenv";
import { Logger, routeLogger } from "connect-utils";
import loginRoutes from "./app/Routes/loginRoutes.js";
import locationRoutes from "./app/Routes/locationRoutes.js";
config();
const { PORT } = process.env;
const app = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(routeLogger);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ status: 0, message: "Caught into some issue" });
});
const { log_initialization } = Logger;
app.use("/auth", loginRoutes);
app.use("/geo", locationRoutes);
app.listen(PORT, () => console.log(log_initialization(PORT)));
