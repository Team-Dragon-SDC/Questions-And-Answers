const express = require('express');
require('dotenv').config();
const {
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  putQuestionHelpful,
  putReportQuestion,
  putAnswerHelpful,
  putReportAnswer,
} = require('./controllers');

const app = express();

app.use(express.json());

app.get('/qa/questions', getQuestions);
app.get('/qa/questions/:question_id/answers', getAnswers);

app.post('/qa/questions', postQuestion);
app.post('/qa/questions/:question_id/answers', postAnswer);

app.put('/qa/questions/:question_id/helpful', putQuestionHelpful);
app.put('/qa/questions/:question_id/report', putReportQuestion);
app.put('/qa/answers/:answer_id/helpful', putAnswerHelpful);
app.put('/qa/answers/:answer_id/report', putReportAnswer);

app.listen(process.env.port, () => {
  console.log(`listening on Port: ${process.env.port}`);
});
