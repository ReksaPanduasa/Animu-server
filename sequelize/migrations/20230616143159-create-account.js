'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      accountId: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        field: 'account_id'
      },
      userName: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
        field: 'username'
      },
      email: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: true,
        field: 'email'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        field: 'password'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};
//