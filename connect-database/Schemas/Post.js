import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const Post = sequelize.define(
  "post",
  {
    text: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    lastLogin: {
      type: DataTypes.DATE,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    validTill: {
      type: DataTypes.DATE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    invalidLogins: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
  },
  {}
);

export { Post };
