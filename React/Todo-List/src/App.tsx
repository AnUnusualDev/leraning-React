import { Grid, GridItem, Input } from "@chakra-ui/react";
import "./App.css";
import SideBar from "./components/SideBar";
import { ColorModeButton } from "./components/ui/color-mode";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

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
        height="100vh"
        overflow="hidden"
      >
        <GridItem
          area={"nav"}
          backgroundColor="gray.900"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          paddingX="10px"
        >
          Awesome Todo App
          <ColorModeButton />
        </GridItem>
        <GridItem area={"aside"} display={{ base: "none", md: "block" }}>
          <SideBar></SideBar>
        </GridItem>
        <GridItem area={"main"} backgroundColor="#141416ff" paddingX={10}>
          <TaskList />
          <AddTask />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
