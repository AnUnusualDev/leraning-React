import { Button, List } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { BsList } from "react-icons/bs";

interface Props {
  category: string;
  selectedCategory: string;
  onClickCategory: (category: string) => void;
}

const Category = ({ category, selectedCategory, onClickCategory }: Props) => {
  const hoverColor = useColorModeValue("#d8d8d8ff", "#27272A");
  return (
    <List.Item>
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
  );
};

export default Category;
