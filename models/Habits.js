'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Habits = loader.database.define(
  'habitses',
  {
    habitsId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    habitsName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    where: {
      type: Sequelize.STRING,
      allowNull: ture
    },
    whatTime: {
      type: Sequelize.STRING,
      allowNull: ture
    },
    howLong: {
      type: Sequelize.STRING,
      allowNull: ture
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

module.exports = Habits;