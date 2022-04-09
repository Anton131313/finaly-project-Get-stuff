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
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          nameCategory: 'Товары для дома',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Одежда',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Автотовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Текхника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Зоотовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Товары для детей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
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
