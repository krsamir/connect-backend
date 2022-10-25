import { responseHandler, RESPONSE_STATUS } from "connect-utils";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

export const isAuthenticated = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    token = token.replace("Bearer ", "");
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.id;
    req.email = decoded.email;
    next();
  } catch (e) {
    console.log({ error: "Authentication Required. Please login again." });
    res.clearCookie("sid", { path: "/" });
    responseHandler(res, {
      message: "Authentication Required. Please login again.",
      responseStatus: RESPONSE_STATUS.UNAUTHORIZED_401,
      status: 0,
      data: [],
    });
  }
};
