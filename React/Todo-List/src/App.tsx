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
    { isDone: false, title: "Task number 2", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 3", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 4", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 5", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 6", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 7", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 8", date: new Date("2026-05-22") },
    { isDone: false, title: "Task number 9", date: new Date("2026-05-22") },
  ]);

  const deleteTask = (taskKey: number) => {
    if (tasks)
      setTasks(tasks?.filter((task) => tasks.indexOf(task) !== taskKey));
  };

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
          <TaskList tasks={tasks} onDeleteTask={(key) => deleteTask(key)} />
          <AddTask
            onAdd={(title, date) =>
              tasks &&
              setTasks([...tasks, { isDone: false, title: title, date: date }])
            }
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
