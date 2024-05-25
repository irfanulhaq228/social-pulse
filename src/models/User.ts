import { DataTypes } from "sequelize";
import sequelize from "@/utils/sequelize";

const User = sequelize.define("users", {
  username: {
    type: DataTypes.STRING(32),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(32),
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
});

export default User;
