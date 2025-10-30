import { HStack, IconButton, Input, InputGroup } from "@chakra-ui/react";
import { useRef, type FormEvent } from "react";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  currentCategory: string;
  onAdd: (title: string, date?: Date) => void;
}

const AddTask = ({ currentCategory, onAdd }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const titleValue = titleRef.current?.value;
    const dateValue =
      dateRef.current?.value !== "" && dateRef.current?.value
        ? new Date(dateRef.current?.value)
        : undefined;

    if (titleValue) onAdd(titleValue, dateValue);
    console.log("Added " + titleValue, dateValue);

    //empty the fields again
    if (titleRef.current) titleRef.current.value = "";
    if (dateRef.current) dateRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <HStack>
        <InputGroup
          endElement={
            <>
              <Input ref={dateRef} type="date" size={"sm"}></Input>
              <IconButton variant="subtle" size={"sm"} type="submit">
                <FiArrowRight />
              </IconButton>
            </>
          }
        >
          <Input ref={titleRef} placeholder="Add a task" variant="subtle" />
        </InputGroup>
      </HStack>
    </form>
  );
};

export default AddTask;
