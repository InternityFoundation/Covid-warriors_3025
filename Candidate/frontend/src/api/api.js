import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/details",
});

export const createAcademic = (payload) => api.post(`/academic`, payload);
export const getAcademic = () => api.get(`/academicdetails`);

const apis = {
  createAcademic,
  getAcademic,
};

export default apis;
