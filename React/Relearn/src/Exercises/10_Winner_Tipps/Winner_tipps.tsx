import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import Leaderboard from "./components/Leaderboard";
import { useReducer, useState } from "react";
import UserList from "./components/UserList";

type Tip = {
  userId: number;
  driverId: string;
};

type User = {
  id: number;
  name: string;
  points: number;
};

export type State = {
  tips: Tip[];
  users: User[];
};

type Action =
  | { type: "SELECT_TIP"; userId: number; driverId: string }
  | {
      type: "END_RACE";
      raceResult: { raceId: string; raceName: string; winnerDriverId: string };
    };

const raceResult = {
  raceId: "monza-2025",
  raceName: "Italian Grand Prix",
  winnerDriverId: "ver",
};

const drivers = [
  { id: "ver", name: "Max Verstappen" },
  { id: "law", name: "Liam Lawson" },
  { id: "ham", name: "Lewis Hamilton" },
  { id: "lec", name: "Charles Leclerc" },
  { id: "nor", name: "Lando Norris" },
  { id: "pia", name: "Oscar Piastri" },
  { id: "rus", name: "George Russell" },
  { id: "ant", name: "Andrea Kimi Antonelli" },
  { id: "alo", name: "Fernando Alonso" },
  { id: "str", name: "Lance Stroll" },
  { id: "gas", name: "Pierre Gasly" },
  { id: "col", name: "Franco Colapinto" },
  { id: "oco", name: "Esteban Ocon" },
  { id: "bea", name: "Oliver Bearman" },
  { id: "lbd", name: "Arvid Lindblad" },
  { id: "had", name: "Isack Hadjar" },
  { id: "sai", name: "Carlos Sainz" },
  { id: "alv", name: "Alex Albon" },
  { id: "hul", name: "Nico Hülkenberg" },
  { id: "bor", name: "Gabriel Bortoleto" },
];

const startUsers = [
  { id: 1, name: "Marvin", points: 123 },
  { id: 2, name: "Jonas", points: 126 },
  { id: 3, name: "Stefan", points: 112 },
];

const Winner_tipps = () => {
  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "SELECT_TIP":
        return {
          ...state,
          tips: [
            ...state.tips.filter((tip) => tip.userId !== action.userId),
            { userId: action.userId, driverId: action.driverId },
          ],
        };
      case "END_RACE":
        return {
          users: state.users.map((user) => {
            const correct = state.tips.some(
              (tip) =>
                tip.userId === user.id &&
                tip.driverId === action.raceResult.winnerDriverId
            );
            return correct ? { ...user, points: user.points + 10 } : user;
          }),
          tips: [],
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    tips: [],
    users: startUsers,
  });

  const userSelectWinner = (userId: number, driverId: string) => {
    dispatch({ type: "SELECT_TIP", userId: userId, driverId: driverId });
  };

  return (
    <>
      <Grid
        templateColumns={"repeat(2, 1fr) "}
        gap={"10px"}
        width={"100%"}
        marginY={"20px"}
      >
        <GridItem colSpan={1}>
          <UserList
            users={state.users}
            drivers={drivers}
            userSelectWinner={userSelectWinner}
            tips={state}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Leaderboard users={state.users} />
        </GridItem>
      </Grid>
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          color={"white"}
          fontWeight={"extrabold"}
          backgroundColor={"#FF1E1E"}
          size={"2xl"}
          width={"70%"}
          height={"70px"}
          onClick={() => dispatch({ type: "END_RACE", raceResult: raceResult })}
        >
          End Race
        </Button>
      </Box>
    </>
  );
};

export default Winner_tipps;
