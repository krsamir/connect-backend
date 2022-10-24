export const responseHandler = (res, { message, responseStatus, data }) => {
  res.status(responseStatus).send({ message, data });
};
