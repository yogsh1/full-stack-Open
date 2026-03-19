import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

// The modifies getAll function still returns a promise, as the then method of a promise also returns a promise.
const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 12323,
    content: "This note is not saved to server",
    important: true,
  };

  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => {
    return response.data;
  });
};

// Since the names of the keys and the assigned variables are the same, we can write the object definition with a more compact syntax:
export default { getAll, create, update };
