const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Category, Condition, Photo, User, Bidding, Comment_User_Products,
    }) {
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.belongsTo(Condition, { foreignKey: 'condition_id' });
      this.hasMany(Photo, { foreignKey: 'product_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsToMany(User, {
        through: 'Comment_User_Products',
        foreignKey: 'product_id',
      });
      // this.hasMany(Comment_User_Products, { foreignKey: 'product_id' });
      this.hasOne(Bidding, { foreignKey: 'product_id' });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      info: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      condition_id: DataTypes.INTEGER,
      location: DataTypes.STRING,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
