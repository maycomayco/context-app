import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Film = ({ film }) => {
  const { id, title, imageUrl } = film;

  const { user, toggleMovieFav } = useContext(UserContext);

  // utilizando conditional chain prevengo errores por nulos cuando no controlo completamente la informacion con la que trabajo
  const isFavoriteMovie = user?.favs?.includes(id);

  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Image
        src={imageUrl}
        alt={title}
        width="100%"
        maxH="170px"
        objectFit="cover"
      />
      <Box p={2}>
        <Text fontSize="lg">{title}</Text>
        {user?.id && (
          <Button
            colorScheme={isFavoriteMovie ? "green" : "gray"}
            onClick={() => toggleMovieFav(id)}
          >
            Fav
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Film;
