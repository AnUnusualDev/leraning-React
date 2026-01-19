import { Box, createListCollection, Text } from "@chakra-ui/react";

import type { State } from "../Winner_tipps";
import UserElement from "./UserElement";

interface Props {
  users: { id: number; name: string; points: number }[];
  drivers: { id: string; name: string }[];
  userSelectWinner: (userId: number, driverId: string) => void;
  tips: State;
}

const UserList = ({ users, drivers, userSelectWinner, tips }: Props) => {
  const listDrivers = createListCollection({
    items: drivers,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id,
  });
  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"extrabold"}>
        Users
      </Text>
      {users.map((user, index) => (
        <UserElement
          user={user}
          drivers={listDrivers}
          userSelectWinner={userSelectWinner}
          key={index}
          tips={tips}
        />
      ))}
    </Box>
  );
};
export default UserList;
