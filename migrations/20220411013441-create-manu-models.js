'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('manu_modelss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model_name: {
        type: Sequelize.STRING
      },
      drivetrain: {
        type: Sequelize.STRING
      },
      manu_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'manufacturer',
          key: 'id',
          as: 'manu_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('manu_modelss');
  }
};