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
          name: 'Телефоны и аксессуары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Компьютеры и оргтехника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Электроника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Бытовая техника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Всё для детей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Украшения и часы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Сумки и обувь',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Зоотовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Дом и сад',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Автотовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Красота и здоровье',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Спорт и развлечения',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Одежда для женщин',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Одежда для мужчин',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Канцтовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Инструменты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мебель',
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
