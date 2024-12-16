import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axiosDefaults"; // Asegúrate de que esta ruta sea correcta

// Contextos para el usuario actual y el setter del usuario
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// Hooks para acceder al contexto en cualquier componente
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Función para obtener el usuario actual al montar el componente
  const fetchCurrentUser = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/"); //
      setCurrentUser(data);
    } catch (err) {
      console.error("Error fetching current user:", err);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
