import {
  Box,
  Portal,
  Select,
  Text,
  type ListCollection,
} from "@chakra-ui/react";
import type { State } from "../Winner_tipps";

interface Props {
  user: { id: number; name: string; points: number };
  drivers: ListCollection<{
    id: string;
    name: string;
  }>;
  userSelectWinner: (userId: number, driverId: string) => void;
  tips: State;
}

const UserElement = ({ user, drivers, userSelectWinner, tips }: Props) => {
  const userTip = tips.tips.find((tip) => tip.userId === user.id);
  return (
    <Box
      height={"100px"}
      backgroundColor={"#1F1F27"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginBottom={"10px"}
      borderRadius={"5px"}
      padding={"15px"}
    >
      <Box>
        <Text>{user.name}</Text>
      </Box>
      <Box>
        <Select.Root
          size={"md"}
          collection={drivers}
          width={"190px"}
          onValueChange={(e) => userSelectWinner(user.id, e.value[0])}
          value={userTip != undefined ? [userTip.driverId] : []}
        >
          <Select.HiddenSelect />
          <Select.Label>Winner</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder={"Select driver"} />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {drivers.items.map((item) => (
                  <Select.Item item={item} key={item.id}>
                    {item.name}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </Box>
    </Box>
  );
};

export default UserElement;
