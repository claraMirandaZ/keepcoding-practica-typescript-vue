import axios from 'axios'; // { AxiosHeaders }

const fakeStoreAPI = axios.create({
  // URL común a todas las peticiones
  baseURL: 'https://api.escuelajs.co/api/v1',
});

// fakeStoreAPI.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
//   }

//   return config;
// });

export default fakeStoreAPI;
