'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('manufacturers', [
      {
        name: 'Lamborghini',
        origin: 'Italy'
      },
      {
        name: 'Ferrari',
        origin: 'Italy'
      },
      {
        name: 'McLaren',
        origin: 'United Kingdom'
      },
      {
        name: 'Koenigsegg',
        origin: 'Sweden'
      },
      {
        name: 'Porsche',
        origin: 'Germany'  
      }

  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
