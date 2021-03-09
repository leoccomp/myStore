/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [name, setName] = useState('Olá, seja bem vindo!');
  const [logged, setLogged] = useState(false);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        logged,
        setLogged
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
