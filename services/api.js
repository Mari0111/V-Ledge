import axios from 'axios';

// const api = axios.create({
//   headers: {'Content-Type': 'application/json'},
// });

// export const requestSource = function () {
//   return axios.CancelToken.source();
// };

// export default api;

export default axios.create({
  baseURL: "https://us-central1-v-ledge-22350.cloudfunctions.net/vledge"
})