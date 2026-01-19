import type { User } from "../Mini_Leaderboard";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

interface Props {
  user: User;
  addPoint: (id: number) => void;
  subtractPoint: (id: number) => void;
  position: number;
}

const UserListItem = ({ position, user, addPoint, subtractPoint }: Props) => {
  let textColor = "white";

  if (position === 1) textColor = "gold";
  else if (position === 2) textColor = "silver";
  else if (position === 3) textColor = "#cd7f32";

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      height={"55px"}
      borderStyle={"solid"}
      borderColor={"white"}
      borderWidth={"1px"}
      borderRadius={"10px"}
      alignItems={"center"}
      paddingX={"10px"}
      marginY={"15px"}
    >
      <Box display={"flex"}>
        <Text marginRight={"5px"} color={textColor}>
          {position}.
        </Text>
        <Text color={textColor}>{user.name}</Text>
      </Box>

      <Box display={"flex"} alignItems={"center"}>
        <IconButton
          backgroundColor={"transparent"}
          color={"white"}
          onClick={() => subtractPoint(user.id)}
        >
          <CiSquareMinus />
        </IconButton>
        <Text color={textColor}>{user.points}</Text>
        <IconButton
          backgroundColor={"transparent"}
          color={"white"}
          onClick={() => addPoint(user.id)}
        >
          <CiSquarePlus />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserListItem;
