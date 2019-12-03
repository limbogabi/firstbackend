const AppName = require('../models').AppName;

module.exports = {
  create(req, res) {
    return AppName
      .create({
        Name: req.body.Name,
        QCName: req.body.QCName
      })
      .then(AppName => res.status(201).send(AppName))
      .catch(error => res.status(400).send(error));
  },
};