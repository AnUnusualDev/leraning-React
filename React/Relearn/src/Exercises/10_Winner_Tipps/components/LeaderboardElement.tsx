import { Box, Text } from "@chakra-ui/react";

interface Props {
  user: { id: number; name: string; points: number };
  pos: number;
}

const LeaderboardElement = ({ user, pos }: Props) => {
  return (
    <Box
      height={"40px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottomWidth={"1px"}
      borderColor={"gray"}
      marginBottom={"10px"}
    >
      <Box display={"flex"} gap={"10px"}>
        <Text fontWeight={"extrabold"}>{pos}</Text>
        <Text>{user.name}</Text>
      </Box>

      <Text color={"#e10600"} fontWeight={"extrabold"}>
        {user.points}
      </Text>
    </Box>
  );
};

export default LeaderboardElement;
