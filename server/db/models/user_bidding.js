"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Bidding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Bidding.init(
    {
      bidding_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      users_bid: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_Bidding",
    }
  );
  return User_Bidding;
};
