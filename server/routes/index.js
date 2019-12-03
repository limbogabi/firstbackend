const AppNameController = require('../controllers').AppName;
console.log(AppNameController);
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the AppName API!',
  }));

  app.post('/api/AppName', AppNameController.create);
};