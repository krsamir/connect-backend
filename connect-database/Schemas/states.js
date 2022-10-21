import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { Countries } from "./countries.js";
import { Cities } from "./cities.js";
const States = sequelize.define(
  "states",
  {
    name: {
      type: DataTypes.STRING,
    },
    country_code: {
      type: DataTypes.STRING,
    },
    fips_code: {
      type: DataTypes.STRING,
    },
    iso2: {
      type: DataTypes.STRING(5),
    },
    type: {
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
States.hasMany(Cities, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: { name: "state_id", field: "id" },
});

export { States };
