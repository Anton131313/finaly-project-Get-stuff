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
    await queryInterface.bulkInsert('User_Biddings', [
      {
        bidding_id: 12,
        user_id: 1,
        users_bid: '130',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 11,
        user_id: 1,
        users_bid: '120',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 10,
        user_id: 1,
        users_bid: '110',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 9,
        user_id: 2,
        users_bid: '100',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 8,
        user_id: 2,
        users_bid: '90',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 7,
        user_id: 2,
        users_bid: '80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 6,
        user_id: 3,
        users_bid: '70',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 5,
        user_id: 3,
        users_bid: '60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 4,
        user_id: 3,
        users_bid: '50',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 3,
        user_id: 4,
        users_bid: '40',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 2,
        user_id: 4,
        users_bid: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bidding_id: 1,
        user_id: 4,
        users_bid: '20',
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
