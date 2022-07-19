import { createContext, useState } from "react";

// esto posee dos propiedaddes que nos importan un provider y un consumer, cuando trabajamos con hooks nos interesa el provider ya que para consumir el estado utilizamos el hook que nos ofrece react
const UserContext = createContext();

const initialUser = { id: 1, name: "John", favs: [1, 2, 4] };

// HAciendo este custom provider vamos a prevenir el renderizado de todos los componentes que este provider envuelva
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => setUser(initialUser);
  const logout = () => setUser(null);

  // add or remove movie id
  const toggleMovieFav = (id) => {
    const isFavorite = user.favs.includes(id);
    const updatedFavs = isFavorite
      ? user.favs.filter((favId) => favId !== id) //delete
      : [...user.favs, id]; // add;

    setUser({ ...user, favs: updatedFavs });
  };

  const data = { user, login, logout, toggleMovieFav };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
