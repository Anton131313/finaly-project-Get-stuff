const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Bidding }) {
      this.hasMany(Product, { foreignKey: 'user_id' });
      this.belongsToMany(Product, {
        through: 'Comment_User_Products',
        foreignKey: 'user_id',
      });
      this.belongsToMany(Bidding, {
        through: 'User_Biddings',
        foreignKey: 'user_id',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      phone: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
