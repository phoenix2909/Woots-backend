'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('views', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4()
      },
      name: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      folder_id: {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'folders',
          key: 'id'
        }
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('views');
  }
};