import { List, Button } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";

const SideBar = () => {
  const categories = [
    { slug: "homework", name: "Homework" },
    { slug: "work", name: "Work" },
  ];

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
        <List.Item key={category.slug}>
          <Button
            width="100%"
            justifyContent="flex-start"
            variant="subtle"
            value={category.slug}
          >
            <List.Indicator asChild color="blue.700">
              <BsList />
            </List.Indicator>
            {category.name}
          </Button>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default SideBar;
