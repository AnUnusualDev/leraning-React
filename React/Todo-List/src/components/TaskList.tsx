import type { Task } from "@/App";
import {
  Box,
  Checkbox,
  HStack,
  List,
  ScrollArea,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  tasks: Task[] | null;
}

const TaskList = ({ tasks }: Props) => {
  return (
    <VStack height="calc(100vh - 120px)">
      <Text>Tasks</Text>
      <ScrollArea.Root height="100%" marginBottom="20px">
        <ScrollArea.Viewport>
          <List.Root gap={1.5}>
            {tasks?.map((task) => (
              <List.Item key={tasks.indexOf(task)} display="flex">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  background="gray.800"
                  padding={3}
                  borderRadius={10}
                  width="100%"
                >
                  <HStack>
                    <Checkbox.Root
                      size="sm"
                      variant="solid"
                      colorPalette="blue"
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                    </Checkbox.Root>
                    <Text marginBottom="5px">{task.title}</Text>
                  </HStack>
                  <Text marginBottom="5px">
                    {task.date?.toLocaleDateString()}
                  </Text>
                </Box>
              </List.Item>
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
