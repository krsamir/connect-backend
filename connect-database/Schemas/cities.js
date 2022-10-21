import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const Cities = sequelize.define(
  "cities",
  {
    name: {
      type: DataTypes.STRING,
    },
    state_code: {
      type: DataTypes.STRING,
    },
    country_code: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    flag: {
      type: DataTypes.INTEGER,
      defaultValue: "1",
    },
    wikiDataId: {
      type: DataTypes.STRING,
    },
  },
  {}
);

export { Cities };
