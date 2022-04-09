const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bidding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, User, User_Bidding }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      this.belongsToMany(User, {
        through: 'User_Biddings',
        foreignKey: 'bidding_id',
      });
    }
  }
  Bidding.init(
    {
      product_id: DataTypes.INTEGER,
      price: DataTypes.STRING,
      price_step: DataTypes.STRING,
      end_bidding: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Bidding',
    },
  );
  return Bidding;
};
