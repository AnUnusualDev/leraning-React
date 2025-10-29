import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import SideBar from "./components/SideBar";
import { ColorModeButton } from "./components/ui/color-mode";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useState } from "react";

export interface Task {
  isDone: boolean;
  title: string;
  date?: Date;
}

function App() {
  const [tasks, setTasks] = useState<Task[] | null>([
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 1", date: new Date("2026-05-22") },
  ]);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr",
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
          <TaskList tasks={tasks} />
          <AddTask />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
