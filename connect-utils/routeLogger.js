import { config } from "dotenv";
config();
const { NODE_ENV } = process.env;
export const routeLogger = (req, res, next) => {
  const { url, method, body } = req;
  if (url.match("/auth") || url.match("/geo")) {
    console.log(
      `[ METHOD: ${method}  ROUTE: ${url} at ${new Date().toLocaleString()} ]`
    );
  }
  NODE_ENV === "development" &&
    method !== "GET" &&
    console.log("PAYLOAD: ", body);
  next();
};
