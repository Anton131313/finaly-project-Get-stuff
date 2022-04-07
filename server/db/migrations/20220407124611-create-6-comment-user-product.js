'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('6Comment_User_Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Users",
          key:"id"
        },
        onDelete: "cascade",
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Products",
          key:"id"
        },
        onDelete: "cascade",
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('6Comment_User_Products');
  }
};
