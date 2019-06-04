'use strict';
module.exports = (sequelize, DataTypes) => {
  const views = sequelize.define('views', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    data: DataTypes.TEXT
  }, {});
  views.associate = function(models) {
    // associations can be defined here
    views.belongsTo(models.folders,{
      foreignKey : 'folder_id',
      onDelete : 'SET NULL',
      onUpdate : 'CASCADE'
    })
  };
  return views;
};