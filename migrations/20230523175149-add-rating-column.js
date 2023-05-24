'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Games', 'rating', { type: Sequelize.INTEGER })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Games', 'rating')
  }
};
