import { createContext } from "react";
import initialMovies from "../data";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const data = { movies: initialMovies };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export { MoviesProvider };
export default MoviesContext;
