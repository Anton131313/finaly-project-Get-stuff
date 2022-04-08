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
          nameCondition: 'ИДЕАЛЬНОЕ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'УДОВЛЕТВОРИ́ТЕЛЬНОЕ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'СРЕДНЕЕ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'ТРЕБУЕТ РЕМОНТА',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCondition: 'НЕ ГОДИТСЯ ДЛЯ ИСПОЛЬЗОВАНИЯ',
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
