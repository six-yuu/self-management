'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Diary = loader.database.define(
  'diaries',
  {
    diaryId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    diaryName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    diary: {
      type: Sequelize.STRING,
      allowNull: false
    },
    diaryDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    createBy: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['diaryDate']
      }
    ]
  }
);

module.exports = Diary;