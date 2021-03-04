import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = props => {
  const [name, setName] = useState('Leonardo Vieira');

  return (
    <UserContext.Provider
      value={{
        name,
        setName
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  const { name, setName } = context;
  return { name, setName };
}
