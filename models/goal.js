'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Goal = loader.database.define(
  'goals',
  {
    goalId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    goalName: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endDate: {
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

module.exports = Goal;