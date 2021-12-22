'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Task = loader.database.define(
  'tasks',
  {
    tasksId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    taskName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    endline: {
      type: Sequelize.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['endline','created']
      }
    ]
  }
);

module.exports = Task;