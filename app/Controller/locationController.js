import { QueryTypes } from "sequelize";
import sequelize from "connect-database";
import { responseHandler, TEXT, RESPONSE_STATUS } from "connect-utils";
const locationController = {};

locationController.getCountry = async (req, res) => {
  const query = req.body?.query ?? "";
  if (query.length === 0) {
    responseHandler(res, {
      message: "Please enter the query.",
      responseStatus: RESPONSE_STATUS.OK,
      status: 1,
      data: [],
    });
  } else if (query.length < TEXT.MINIMUM_LENGTH) {
    responseHandler(res, {
      message: "Minimum length not met.",
      responseStatus: RESPONSE_STATUS.OK,
      status: 1,
      data: [],
    });
  } else {
    await sequelize
      .query(
        `
    SELECT
      *
  FROM
      (SELECT
          bigtable.*, t3.name AS country
      FROM
          (SELECT
          t1.name AS city,
              t1.state_code,
              t1.stateId,
              t1.countryID,
              t1.latitude,
              t1.longitude,
              t2.name AS state
      FROM
          cities AS t1
      INNER JOIN states AS t2 ON t1.stateId = t2.id) AS bigtable
      INNER JOIN countries AS t3 ON bigTable.countryID = t3.id) AS finalTable
  WHERE
      concat(finalTable.city,finalTable.state,finalTable.country) like ("%${
        query ?? ""
      }%")
    `,
        { type: QueryTypes.SELECT }
      )
      .then((response) => {
        responseHandler(res, {
          message: "",
          responseStatus: RESPONSE_STATUS.OK,
          data: response,
          status: 1,
        });
      })
      .catch((e) => {
        next(e);
      });
  }
};
export default locationController;
