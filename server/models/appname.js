module.exports = (sequelize, DataTypes) => {
  const AppName = sequelize.define('AppName', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    QCName: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    }, {timestamps: false});
  AppName.associate = function(models) {   

  };
  return AppName;
};

