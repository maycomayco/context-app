import { Container } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { MoviesProvider } from "./contexts/MoviesContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      {/* Envolvemos los components que queremos que utilicen la informacion*/}
      <UserProvider>
        <MoviesProvider>
          <Header />
          <Container maxWidth="container.xl" marginTop={5}>
            <Movies />
          </Container>
        </MoviesProvider>
      </UserProvider>
    </>
  );
}

export default App;
