import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const formattedUsername = username.toLowerCase().trim();

    if (formattedUsername === "cliente" && password === "cliente123") {
      setUser({ role: "cliente" });
    } else if (formattedUsername === "repartidor" && password === "repartidor123") {
      setUser({ role: "repartidor" });
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
