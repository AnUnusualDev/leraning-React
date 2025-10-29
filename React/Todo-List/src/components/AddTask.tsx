import { HStack, IconButton, Input, InputGroup } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const AddTask = () => {
  return (
    <HStack>
      <InputGroup
        endElement={
          <>
            <Input type="date" size={"sm"}></Input>
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
