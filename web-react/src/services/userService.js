import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";


const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/usuarios/login`, {
      email,
      senha,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Falha no login");
  }
};

const logout = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/usuarios/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Falha ao sair");
  }
};

const me = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("Falha ao obter dados do usuário");
  }
};

export default {
  login,
  logout,
  me,
};
