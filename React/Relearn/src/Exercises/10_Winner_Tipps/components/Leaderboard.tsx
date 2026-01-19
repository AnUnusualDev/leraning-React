import { Box, Text } from "@chakra-ui/react";
import LeaderboardElement from "./LeaderboardElement";

interface Props {
  users: { id: number; name: string; points: number }[];
}

const Leaderboard = ({ users }: Props) => {
  return (
    <Box height={"100%"}>
      <Text fontSize={"2xl"} fontWeight={"extrabold"}>
        Leaderboard
      </Text>
      {[...users]
        .sort((a, b) => b.points - a.points)
        .map((user, index) => (
          <LeaderboardElement key={user.id} user={user} pos={index + 1} />
        ))}
    </Box>
  );
};

export default Leaderboard;
