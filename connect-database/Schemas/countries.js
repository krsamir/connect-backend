import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { States } from "./states.js";
import { Cities } from "./cities.js";
const Countries = sequelize.define(
  "countries",
  {
    name: {
      type: DataTypes.STRING,
    },
    iso3: {
      type: DataTypes.STRING(5),
    },
    numeric_code: {
      type: DataTypes.STRING(5),
    },
    iso2: {
      type: DataTypes.STRING(5),
    },
    phonecode: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    currency: {
      type: DataTypes.STRING,
    },
    currency_name: {
      type: DataTypes.STRING,
    },
    currency_symbol: {
      type: DataTypes.STRING,
    },
    tld: {
      type: DataTypes.STRING,
    },
    native: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    timezones: {
      type: DataTypes.TEXT,
    },
    translations: {
      type: DataTypes.TEXT,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    emoji: {
      type: DataTypes.STRING,
    },
    emojiU: {
      type: DataTypes.STRING,
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
Countries.hasMany(States, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: { name: "country_id", field: "id" },
});
Countries.hasMany(Cities, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: { name: "country_id", field: "id" },
});
States.belongsTo(Countries);
Cities.belongsTo(Countries);
export { Countries };
