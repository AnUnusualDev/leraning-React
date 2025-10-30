import { List, Button } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  categories: string[];
  selectedCategory: string;
  onClickCategory: (category: string) => void;
}

const SideBar = ({ onClickCategory, selectedCategory, categories }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const hoverColor = useColorModeValue("#d8d8d8ff", "#27272A");

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
              selectedCategory === category ? hoverColor : "transparent"
            }
            _hover={{ bg: hoverColor }}
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
