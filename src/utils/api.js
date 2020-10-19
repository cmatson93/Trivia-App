const createQuiz = data => {
  return fetch("/.netlify/functions/quizes-create", {
    body: JSON.stringify(data),
    method: "POST",
  }).then(response => {
    return response.json();
  });
};

const getAll = () => {
  return fetch("/.netlify/functions/quizes-get-all").then(response => {
    return response.json();
  });
};

const getAllQuestions = () => {
  return fetch("/.netlify/functions/questions-get-all").then(response => {
    return response.json();
  });
};

export default {
  createQuiz,
  getAll,
  getAllQuestions,
};
