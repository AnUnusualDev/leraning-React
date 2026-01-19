import { Box, IconButton, Switch, Text } from "@chakra-ui/react";
import type { Feature } from "../Toggle_Panel";
import { FiTrash } from "react-icons/fi";

interface Props {
  feature: Feature;
  onCheckedChange: (id: number) => void;
  deleteFeature: (id: number) => void;
}

const FeatureItem = ({ deleteFeature, feature, onCheckedChange }: Props) => {
  return (
    <Box
      padding={"20px"}
      borderColor={"black"}
      borderWidth={"1px"}
      marginY={"5px"}
      borderRadius={"5px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text>{feature.name}</Text>
      <Box>
        <Switch.Root
          colorPalette={"green"}
          checked={feature.enabled}
          onCheckedChange={() => onCheckedChange(feature.id)}
        >
          <Switch.HiddenInput />
          <Switch.Control />
        </Switch.Root>
        <IconButton
          marginLeft={"5px"}
          colorPalette={"black"}
          variant={"ghost"}
          rounded={"full"}
          size={"md"}
          onClick={() => deleteFeature(feature.id)}
        >
          <FiTrash />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FeatureItem;
