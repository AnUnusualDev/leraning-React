import { HStack, IconButton, Input, InputGroup } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";

const AddTask = () => {
  return (
    <HStack>
      <InputGroup
        endElement={
          <>
            <IconButton variant="subtle" size={"sm"}>
              <IoCalendarOutline />
            </IconButton>
            <IconButton variant="subtle" size={"sm"}>
              <FiArrowRight />
            </IconButton>
          </>
        }
      >
        <Input placeholder="Add a task" variant="subtle" />
      </InputGroup>
    </HStack>
  );
};

export default AddTask;
