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
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Антон',
        email: 'Altair3464@yandex.ru',
        password: '123',
        phone: '1234567890',
        photo: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Женя',
        email: 'Evgeniy@yandex.ru',
        password: '123',
        phone: '1234567890',
        photo: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Inga',
        email: 'Inga@yandex.ru',
        password: '123',
        phone: '1234567890',
        photo: 'DataTypes.STRING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jamila',
        email: 'Jamila@yandex.ru',
        password: '123',
        phone: '1234567890',
        photo: 'DataTypes.STRING',
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
