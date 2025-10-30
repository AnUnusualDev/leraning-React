import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import SideBar from "./components/SideBar";
import { ColorModeButton } from "./components/ui/color-mode";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useState } from "react";

export interface Task {
  id: string;
  isDone: boolean;
  title: string;
  date?: Date;
  category?: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [categories, setCategories] = useState<string[]>([
    "All",
    "Homework",
    "Work",
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const deleteTask = (id: string) => {
    if (tasks) setTasks(tasks?.filter((task) => task.id !== id));
  };

  const handleAddTask = (title: string, date?: Date) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      isDone: false,
      title,
      date,
      category: currentCategory,
    };
    setTasks([...tasks, newTask]);
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
          <SideBar
            categories={categories}
            selectedCategory={currentCategory}
            onClickCategory={(category) => setCurrentCategory(category)}
          />
        </GridItem>
        <GridItem
          area={"main"}
          backgroundColor="#141416ff"
          paddingX={{ base: 5, md: 10 }}
          marginTop={{ base: "-30px", md: "0px" }}
        >
          <TaskList
            tasks={tasks}
            currentCategory={currentCategory}
            onDeleteTask={(key) => deleteTask(key)}
          />
          <AddTask
            currentCategory={currentCategory}
            onAdd={(title, date) => handleAddTask(title, date)}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
