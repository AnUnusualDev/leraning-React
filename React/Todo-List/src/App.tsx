import { Grid, GridItem, Show, useBreakpoint } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "250px 1fr",
        }}
      >
        <GridItem area={"nav"} backgroundColor="green">
          Nav
        </GridItem>
        <GridItem
          area={"aside"}
          backgroundColor="red"
          display={{ base: "none", md: "block" }}
        >
          Aside
        </GridItem>
        <GridItem area={"main"} backgroundColor="yellow">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
