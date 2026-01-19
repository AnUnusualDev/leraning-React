import { Box, createListCollection, Portal, Text } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { Select } from "@chakra-ui/react";

type Action =
  | {
      type: "HASLOADED";
      data: { championship: { championshipName: string }; races: any[] };
    }
  | { type: "ERROR"; error: string };

type State = {
  championship: {
    championshipName: string;
  };
  races: {
    raceName: string;
    winner: {
      name: string;
      surname: string;
    };
  }[];
  loading: boolean;
  error: string | null;
};

const API_Tests = () => {
  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "HASLOADED":
        return {
          ...state,
          championship: action.data.championship,
          races: action.data.races,
          loading: false,
        };
      case "ERROR":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    championship: { championshipName: "" },
    races: [
      {
        raceName: "",
        winner: { name: "", surname: "" },
      },
    ],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch("https://f1api.dev/api/2025")
      .then((res) => {
        if (!res.ok) throw new Error(`Server-Fehler: ${res.status}`);
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "HASLOADED",
          data: { championship: data.championship, races: data.races },
        })
      )
      .catch((error) => dispatch({ type: "ERROR", error: error.message }));
  }, []);

  const races = createListCollection({
    items: state.races,
    itemToString: (item) => item.raceName,
    itemToValue: (item) => item.raceName,
  });

  const [value, setValue] = useState<string[]>([""]);

  const selectedRace = state.races.find((race) => race.raceName === value[0]);
  return (
    <>
      {state.loading && !state.error ? (
        <Text>Loading</Text>
      ) : !state.error ? (
        <>
          <Select.Root
            collection={races}
            size="lg"
            width="500px"
            value={value}
            onValueChange={(e) => setValue(e.value)}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger borderColor={"white"}>
                <Select.ValueText placeholder="Select Race" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content backgroundColor={"#15151E"}>
                  {races.items.map((race) => (
                    <Select.Item item={race} key={race.raceName}>
                      {race.raceName}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          {value[0].length > 0 && (
            <Box
              marginTop={"10px"}
              width={"500px"}
              display={"flex"}
              justifyContent={"space-between"}
              padding={"30px"}
              borderColor={"white"}
              borderWidth={"1px"}
              borderRadius={"5px"}
            >
              <Text>Winner: </Text>
              <Text>
                {selectedRace.winner.name} {selectedRace.winner.surname}
              </Text>
            </Box>
          )}
        </>
      ) : (
        <Text>{state.error}</Text>
      )}
    </>
  );
};

export default API_Tests;
