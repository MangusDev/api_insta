'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { // Corrigido de 'nome' para 'name'
        type: Sequelize.STRING,
        allowNull: false
      },
      username: { // Corrigido de 'user_nome' para 'username'
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      avatar: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.STRING,
      },
      gender:{
        type: Sequelize.STRING,
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: { // Adicionado (Obrigatório para o Sequelize)
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: { // Adicionado (Obrigatório para o Sequelize)
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};