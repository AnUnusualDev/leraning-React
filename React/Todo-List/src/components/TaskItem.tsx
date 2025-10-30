import {
  Box,
  Checkbox,
  HStack,
  IconButton,
  List,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  id: string;
  isDone?: boolean;
  title: string;
  date?: Date;
  onDeleteTask: (id: string) => void;
}

const TaskItem = ({ id, title, date, onDeleteTask }: Props) => {
  const deleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <List.Item display="flex">
      <Box
        display="flex"
        justifyContent="space-between"
        background={useColorModeValue("gray.100", "gray.800")}
        padding={3}
        borderRadius={10}
        width="100%"
      >
        <HStack>
          <Checkbox.Root size="sm" variant="solid" colorPalette="blue">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
          <Text marginBottom="5px">{title}</Text>
        </HStack>
        <HStack>
          <IconButton
            onClick={() => deleteTask()}
            variant="ghost"
            size="sm"
            _hover={{ color: "red.500" }}
          >
            {" "}
            <RiDeleteBinLine />
          </IconButton>
          <Text>{date?.toLocaleDateString()}</Text>
        </HStack>
      </Box>
    </List.Item>
  );
};

export default TaskItem;
