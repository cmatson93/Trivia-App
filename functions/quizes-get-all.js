/* Import faunaDB sdk */
const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = (event, context) => {
  console.log("Function `quiz-read-all` invoked");
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
  });
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/allQuizes"))))
    .then(response => {
      const quizRefs = response.data;
      console.log("Quiz refs", quizRefs);
      console.log(`${quizRefs.length} quizes found`);
      // create new query out of quiz refs. http://bit.ly/2LG3MLg
      const getAllQuizDataQuery = quizRefs.map(ref => {
        return q.Get(ref);
      });
      // then query the refs
      return client.query(getAllQuizDataQuery).then(ret => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret),
        };
      });
    })
    .catch(error => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
