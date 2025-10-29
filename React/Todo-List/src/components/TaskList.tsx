import type { Task } from "@/App";
import { List, ScrollArea, Text, VStack } from "@chakra-ui/react";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[] | null;
  onDeleteTask: (taskKey: number) => void;
}

const TaskList = ({ tasks, onDeleteTask }: Props) => {
  return (
    <VStack height="calc(100vh - 120px)">
      <Text>Tasks</Text>
      <ScrollArea.Root height="100%" marginBottom="20px">
        <ScrollArea.Viewport>
          <List.Root gap={1.5}>
            {tasks?.map((task) => (
              <TaskItem
                taskKey={tasks.indexOf(task)}
                key={tasks.indexOf(task)}
                date={task.date}
                title={task.title}
                onDeleteTask={(key) => onDeleteTask(key)}
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
