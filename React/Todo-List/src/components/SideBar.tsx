import { List, Button } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  categories: string[];
  selectedCategory: string;
  onClickCategory: (category: string) => void;
}

const SideBar = ({ onClickCategory, selectedCategory, categories }: Props) => {
  const bg = useColorModeValue("#F4F4F4", "gray.900");

  return (
    <List.Root
      width="100%"
      height="100vh"
      gap={1}
      backgroundColor={bg}
      padding={1}
    >
      {categories.map((category) => (
        <List.Item key={categories.indexOf(category)}>
          <Button
            onClick={() => onClickCategory(category)}
            width="100%"
            justifyContent="flex-start"
            variant="subtle"
            value={category}
            backgroundColor={
              selectedCategory === category ? "#27272A" : "transparent"
            }
            _hover={{ bg: "#27272A" }}
          >
            <List.Indicator asChild color="blue.700">
              <BsList />
            </List.Indicator>
            {category}
          </Button>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default SideBar;
