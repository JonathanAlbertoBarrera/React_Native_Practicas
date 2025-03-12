import { createContext, useState } from "react";
import api from "../config/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await api.post("/login", {
        email: email.toLowerCase().trim(),
        password: password,
      });
  
      if (response.data.token) {
        const role = email.includes("admin") || email.includes("moderador") ? "moderador" : "user";
        setUser({ role, token: response.data.token });
      }
    } catch (error) {
      alert("No se pudo iniciar sesión. Verifica tu email y contraseña.");
    }
  };
  

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
