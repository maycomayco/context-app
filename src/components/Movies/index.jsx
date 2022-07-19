import { SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import MoviesContext from "../../contexts/MoviesContext";
import Film from "../Film";

const Movies = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {movies.map((m) => (
          <Film key={m.id} film={m} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Movies;
