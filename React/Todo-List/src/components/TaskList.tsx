import type { Task } from "@/App";
import { List, ScrollArea, Text, VStack } from "@chakra-ui/react";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  currentCategory: string;
  onDeleteTask: (taskKey: string) => void;
}

const TaskList = ({ tasks, currentCategory, onDeleteTask }: Props) => {
  let tasksToDisplay: Task[] = tasks;
  if (currentCategory !== "All" && tasksToDisplay)
    tasksToDisplay = tasksToDisplay?.filter(
      (task) => task.category === currentCategory
    );

  return (
    <VStack height="calc(100vh - 120px)" paddingTop={{ base: 5, md: 10 }}>
      <ScrollArea.Root height="100%" marginBottom="20px">
        <ScrollArea.Viewport>
          <List.Root gap={1.5}>
            {tasksToDisplay?.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                date={task.date}
                title={task.title}
                category={currentCategory === "All" ? task.category : ""}
                onDeleteTask={(id) => onDeleteTask(id)}
              />
            ))}
          </List.Root>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </VStack>
  );
};

export default TaskList;
