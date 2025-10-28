import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import SideBar from "./components/SideBar";

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
        <GridItem area={"aside"} display={{ base: "none", md: "block" }}>
          <SideBar></SideBar>
        </GridItem>
        <GridItem area={"main"} backgroundColor="yellow">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
