'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      userId: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        field: 'user_id'
      },
      name: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: false,
        field: 'name'
      },
      gender: {
        type: Sequelize.STRING(15),
        allowNull: true,
        unique: false,
        field: 'gender'
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: true,
        unique: false,
        field: 'about'
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
      },
      accountId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'account_id'
      }
    });
    await queryInterface.addConstraint('users', {
      fields: ['account_id'],
      type: 'foreign key',
      references: {
        table: 'accounts',
        field: 'account_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};