const { sequelize } = require('./student');

(async () => {
  await sequelize.sync({ force: true });
  await sequelize.close();
})();