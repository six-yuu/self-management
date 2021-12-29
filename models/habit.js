'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Habit = loader.database.define(
  'habits',
  {
    habitId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    habitName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    place: {
      type: Sequelize.STRING,
      allowNull: false
    },
    whatTime: {
      type: Sequelize.STRING,
      allowNull: false
    },
    howLong: {
      type: Sequelize.STRING,
      allowNull: false
    },
    frequency: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  }
);

module.exports = Habit;