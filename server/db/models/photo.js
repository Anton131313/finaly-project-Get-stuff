const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Photo.init(
    {
      product_id: DataTypes.INTEGER,
      photo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  );
  return Photo;
};
