
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  email:string|null;
  setToken: (token: string | null) => void;
  setEmail:(email: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('firebaseToken'));
  const [email,setEmail]=useState<any>()

  useEffect(() => {
      setToken(localStorage.getItem('firebaseToken'));  
      setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken ,email,setEmail}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
