import { List, Button, IconButton } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";
import { LuPlus } from "react-icons/lu";
import Category from "./Category";

interface Props {
  categories: string[];
  selectedCategory: string;
  onClickCategory: (category: string) => void;
}

const SideBar = ({ onClickCategory, selectedCategory, categories }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.900");

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
      <List.Item key="addCategory" display="flex" justifyContent="center">
        <IconButton color="blue.800" variant="subtle" size="sm">
          <LuPlus />
        </IconButton>
      </List.Item>
    </List.Root>
  );
};

export default SideBar;
