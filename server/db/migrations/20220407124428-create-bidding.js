module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Biddings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      price: {
        type: Sequelize.STRING,
      },
      price_step: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_bidding: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Biddings');
  },
};
