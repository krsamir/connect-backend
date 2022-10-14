import Express from "express";
import { config } from "dotenv";
import { Logger } from "connect-utils";
import loginRoutes from "./app/Routes/loginRoutes.js";
config();
const { PORT, NODE_ENV } = process.env;
const app = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use((req, res, next) => {
  const { url, method, body } = req;
  if (url.match("/auth")) {
    console.log(
      `[ METHOD: ${method}  ROUTE: ${url} at ${new Date().toLocaleString()} ]`
    );
  }
  NODE_ENV === "development" &&
    method !== "GET" &&
    console.log("PAYLOAD: ", body);
  next();
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ status: 0, message: "Caught into some issue" });
});
const { log_initialization } = Logger;
app.use("/auth", loginRoutes);
app.listen(PORT, () => console.log(log_initialization(PORT)));
// loginController needs to be relooked
