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
      'Conditions',
      [
        {
          nameCondition: 'идеальное',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'удовлетворительное',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'среднее',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'требует ремонта',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'не годится для использования',
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
