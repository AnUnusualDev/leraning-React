import { Heading } from "@chakra-ui/react";
import Leaderboard from "./components/Leaderboard";
import { useLeaderboard } from "./hooks/useLeaderboard";

export type User = {
  id: number;
  name: string;
  points: number;
};

const Mini_Leaderboard = () => {
  const { users, addPoint, removePoint } = useLeaderboard();

  return (
    <div>
      <Heading size={"4xl"}>Mini Leaderboard</Heading>
      <Leaderboard
        users={users}
        addPoint={addPoint}
        subtractPoint={removePoint}
      ></Leaderboard>
    </div>
  );
};

export default Mini_Leaderboard;
