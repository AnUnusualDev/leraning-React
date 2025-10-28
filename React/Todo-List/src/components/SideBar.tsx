import { List, Button } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";

const SideBar = () => {
  const categories = [
    { slug: "todo", name: "ToDo" },
    { slug: "done", name: "Done" },
  ];

  return (
    <List.Root
      width="100%"
      height="90vh"
      gap={3}
      backgroundColor="#F4F4F4"
      padding={1}
    >
      {categories.map((category) => (
        <List.Item id={category.slug}>
          <Button
            width="100%"
            justifyContent="flex-start"
            variant="subtle"
            value={category.slug}
          >
            <List.Indicator asChild color="blue.800">
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
