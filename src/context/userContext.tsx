import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authEmail, setAuthEmail] = useState('');

  return (
    <UserContext.Provider value={{ authEmail, setAuthEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
