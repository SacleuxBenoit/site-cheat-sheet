'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    models.Message.belongsTo(models.User,{
      foreignKey:{
        allowNull:false
      }
    })
  };
  return Article;
};