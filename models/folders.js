'use strict';
module.exports = (sequelize, DataTypes) => {
  const folders = sequelize.define('folders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
  }, {});
  folders.associate = function(models) {
    // associations can be defined here
    folders.hasMany(models.views,{
      foreignKey : 'folder_id',
      onDelete : 'SET NULL',
      onUpdate : 'CASCADE'
    })
  };
  return folders;
};