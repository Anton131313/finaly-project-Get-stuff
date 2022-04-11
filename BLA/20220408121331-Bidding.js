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
    await queryInterface.bulkInsert('Biddings', [
      {
        price: '10',
        price_step: '10',
        product_id: 1,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '20',
        price_step: '10',
        product_id: 2,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '30',
        price_step: '10',
        product_id: 3,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '40',
        price_step: '10',
        product_id: 4,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '50',
        price_step: '10',
        product_id: 5,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '60',
        price_step: '10',
        product_id: 6,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '70',
        price_step: '10',
        product_id: 7,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '80',
        price_step: '10',
        product_id: 8,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '90',
        price_step: '10',
        product_id: 9,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '110',
        price_step: '10',
        product_id: 10,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '110',
        price_step: '10',
        product_id: 11,
        end_bidding: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: '120',
        price_step: '10',
        product_id: 12,
        end_bidding: new Date(),
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
