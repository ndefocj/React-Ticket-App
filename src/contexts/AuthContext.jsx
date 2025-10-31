import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("ticketapp_session");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(
        `multi-framework-ticket-web-app-kam7.vercel.app/users?email=${email}&password=${password}`
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      if (data.length > 0) {
        const userToken = data[0].token;
        setToken(userToken);
        localStorage.setItem("ticketapp_session", userToken);
        navigate("/dashboard");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  const signup = async (email, password) => {
    try {
      const response = await fetch("multi-framework-ticket-web-app-kam7.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          token: `fake-jwt-token-for-${email}`,
        }),
      });
      return response.ok;
    } catch (error) {
      console.error("Signup failed:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};