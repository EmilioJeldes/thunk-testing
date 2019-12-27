import request from './request';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
  todos: {
    /**
     * This function gets a list of todos
     */
    getTodos: () => request(`${API_URL}/todos/`),
    /**
     * This function returns a todo by a given id
     * @param id of the todo
     */
    getTodo: id => request(`${API_URL}/todos/${id}`)
  },
  users: {
    getUsers: () => request(`${API_URL}/users/`),
    getUser: id => request(`${API_URL}/users/${id}`)
  },
  posts: {
    getPosts: () => request(`${API_URL}/posts/`),
    getPost: id => request(`${API_URL}/${id}`),
    create: (userId, title, body) => request(`${API_URL}/post`, 'POST', { userId, title, body })
  }
};
