import { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvier = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const submitUser = (input) => {};

  return (
    <UserContext.Provider value={{ user, setUser, submitUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvier;
