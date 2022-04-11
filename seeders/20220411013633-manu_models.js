'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('manu_modelss', [
     {
      model_name: 'Aventador SVJ',
      drivetrain: 'AWD',
      manu_id: 1
     },
     {
      model_name: 'Pista',
      drivetrain: 'RWD',
      manu_id: 2
     },
     {
      model_name: '765LT',
      drivetrain: 'RWD',
      manu_id: 3
     },
     {
      model_name: 'Agera RS',
      drivetrain: 'RWD',
      manu_id: 4
     },
     {
      model_name: 'GT3 RS',
      drivetrain: 'AWD',
      manu_id: 5
     },
  
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
