const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const getTodosByIds = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    let responses = await Promise.all(requests);  
    const dataResults = responses.map((data) => data.json());
    const allTasks = await Promise.all(dataResults);
    console.log(allTasks);
  } catch (error) {
    console.log(error.message);
  }
};
getTodosByIds([43, 21, 55, 100, 10]);
