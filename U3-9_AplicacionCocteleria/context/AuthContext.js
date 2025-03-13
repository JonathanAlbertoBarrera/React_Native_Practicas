import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'user' && password === 'user123') {
      setUser({ role: 'usuario' });
    } else if (username === 'coctelero' && password === 'coctelero123') {
      setUser({ role: 'coctelero' });
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};