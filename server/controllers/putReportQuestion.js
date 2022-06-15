const { putReportQuestionModel } = require('../models');

module.exports = function putQuestionHelpful(req, res) {
  putReportQuestionModel(req.params.question_id)
    .then(() => res.status(204).send('NO CONTENT'))
    .catch((error) => console.log(error));
};
