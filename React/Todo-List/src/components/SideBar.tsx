import { List, Button, IconButton, Input } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";
import { LuPlus } from "react-icons/lu";
import Category from "./Category";
import { useEffect, useRef, useState, type FormEvent } from "react";

interface Props {
  categories: string[];
  selectedCategory: string;
  onClickCategory: (category: string) => void;
  onAddCategory: (category: string) => void;
}

const SideBar = ({
  onAddCategory,
  onClickCategory,
  selectedCategory,
  categories,
}: Props) => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const hoverColor = useColorModeValue("#d8d8d8ff", "#27272A");

  const [addStatus, setAddStatus] = useState<Boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (addStatus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [addStatus]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    inputRef.current && onAddCategory(inputRef.current?.value);
    if (inputRef.current) inputRef.current.value = "";
    setAddStatus(false);
  };
  return (
    <List.Root
      width="100%"
      height="100vh"
      gap={1}
      backgroundColor={bg}
      padding={1}
    >
      {categories.map((category) => (
        <Category
          key={categories.indexOf(category)}
          selectedCategory={selectedCategory}
          category={category}
          onClickCategory={(category) => onClickCategory(category)}
        />
      ))}

      {/*This thing is the input for new categories and only shows when the plus is clicked*/}
      {addStatus && (
        <List.Item>
          <Button
            width="100%"
            justifyContent="flex-start"
            variant="subtle"
            _hover={{ bg: hoverColor }}
          >
            <List.Indicator asChild color="blue.700">
              <BsList />
            </List.Indicator>
            <form onSubmit={onSubmit}>
              <Input ref={inputRef} type="text" size="sm"></Input>
            </form>
          </Button>
        </List.Item>
      )}
      {/*Category input end*/}

      <List.Item
        onClick={() => setAddStatus(true)}
        key="addCategory"
        display="flex"
        justifyContent="center"
      >
        <IconButton color="blue.800" variant="subtle" size="sm">
          <LuPlus />
        </IconButton>
      </List.Item>
    </List.Root>
  );
};

export default SideBar;
