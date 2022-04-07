'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class 6 Comment_User_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  6 Comment_User_Product.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: '6Comment_User_Product',
  });
  return 6 Comment_User_Product;
};