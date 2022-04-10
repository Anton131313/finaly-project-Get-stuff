module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Вещь Антона 1',
        info: 'Информация о вещи 1',
        user_id: 1,
        category_id: 1,
        condition_id: 1,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Антона 2',
        info: 'Информация о вещи 2',
        user_id: 1,
        category_id: 2,
        condition_id: 2,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Антона 3',
        info: 'Информация о вещи 3',
        user_id: 1,
        category_id: 3,
        condition_id: 3,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Жени 1',
        info: 'Информация о вещи 1',
        user_id: 2,
        category_id: 1,
        condition_id: 1,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Жени 2',
        info: 'Информация о вещи 2',
        user_id: 2,
        category_id: 2,
        condition_id: 2,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Жени 3',
        info: 'Информация о вещи 3',
        user_id: 2,
        category_id: 3,
        condition_id: 3,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Инги 1',
        info: 'Информация о вещи 1',
        user_id: 3,
        category_id: 1,
        condition_id: 1,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Инги 2',
        info: 'Информация о вещи 2',
        user_id: 3,
        category_id: 2,
        condition_id: 2,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Инги 3',
        info: 'Информация о вещи 3',
        user_id: 3,
        category_id: 3,
        condition_id: 3,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Джами 1',
        info: 'Информация о вещи 1',
        user_id: 4,
        category_id: 1,
        condition_id: 1,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Джами 2',
        info: 'Информация о вещи 2',
        user_id: 4,
        category_id: 2,
        condition_id: 2,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вещь Джами 3',
        info: 'Информация о вещи 3',
        user_id: 4,
        category_id: 3,
        condition_id: 3,
        location: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
