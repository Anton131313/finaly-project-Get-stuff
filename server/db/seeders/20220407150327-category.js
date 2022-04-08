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
          nameCategory: 'Телефоны и аксессуары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Компьютеры и оргтехника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Электроника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Бытовая техника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Всё для детей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Украшения и часы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Сумки и обувь',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Зоотовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Дом и сад',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Автотовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Красота и здоровье',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Спорт и развлечения',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Одежда для женщин',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Одежда для мужчин',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Канцтовары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Инструменты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCategory: 'Мебель',
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
