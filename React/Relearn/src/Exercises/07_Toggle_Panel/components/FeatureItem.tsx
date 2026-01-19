import { Box, IconButton, Input, Switch, Text } from "@chakra-ui/react";
import type { Feature } from "../Toggle_Panel";
import { FiTrash } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  feature: Feature;
  onCheckedChange: (id: number) => void;
  deleteFeature: (id: number) => void;
  updateFeatureName: (id: number, name: string) => void;
}

const FeatureItem = ({
  updateFeatureName,
  deleteFeature,
  feature,
  onCheckedChange,
}: Props) => {
  const [isEditing, setEditing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const [tempName, setTempName] = useState("");

  const saveName = () => {
    if (tempName.length >= 3) {
      updateFeatureName(feature.id, tempName);
      setTempName("");
      setEditing(false);
    } else {
      alert("Der Name muss mindestens drei Zeichen lang sein!");
    }
  };

  const stopEditing = () => {
    setTempName("");
    setEditing(false);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

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
      height={"70px"}
    >
      {isEditing ? (
        <Box display={"flex"} alignItems={"space-between"} width={"100%"}>
          <Input
            value={tempName}
            onChange={(e) => setTempName(e.currentTarget.value)}
            ref={inputRef}
            onKeyDown={(e) =>
              e.key === "Enter"
                ? saveName()
                : e.key === "Escape" && stopEditing()
            }
          ></Input>
          <IconButton onClick={() => stopEditing()}>
            <IoCloseOutline />
          </IconButton>
        </Box>
      ) : (
        <>
          <Text onDoubleClick={() => setEditing(true)}>{feature.name}</Text>
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
        </>
      )}
    </Box>
  );
};

export default FeatureItem;
