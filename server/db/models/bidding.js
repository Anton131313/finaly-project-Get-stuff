'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bidding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, User}) {
      this.hasOne(Product, {foreignKey:"bidding_id"}),
      this.belongsToMany(User, { through: 'User_Biddings', foreignKey: 'bidding_id' }),
    }
  }
  Bidding.init({
    price: DataTypes.STRING,
    price_step: DataTypes.STRING,
    end_bidding: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bidding',
  });
  return Bidding;
};
