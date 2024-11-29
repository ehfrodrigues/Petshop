import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import userService from "../services/userService";

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Token presente -> autenticado
    }
  }, []);

  const login = async (email, senha) => {
    try {
      const { token } = await userService.login(email, senha);
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      navigate("/admin");
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await userService.logout();
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
