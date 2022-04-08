module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Biddings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bidding_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Biddings',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      users_bid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Biddings');
  },
};
