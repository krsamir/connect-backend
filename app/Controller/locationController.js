import { Cities, Countries } from "connect-database";
const locationController = {};

locationController.getCountry = async (req, res) => {
  await Cities.findAndCountAll({
    where: {
      countryId: 101,
      stateID: 4025,
    },
  })
    .then((data) => {
      res.send({ data });
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    });
};
export default locationController;
