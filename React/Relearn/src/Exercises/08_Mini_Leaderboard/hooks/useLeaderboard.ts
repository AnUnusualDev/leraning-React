import { useCallback, useReducer } from "react";
import type { User } from "../Mini_Leaderboard";

type Action =
  | { type: "ADD_POINT"; id: number }
  | { type: "REMOVE_POINT"; id: number };

type State = {
  users: User[];
};

export function useLeaderboard() {
  const INITIALSTATE: State = {
    users: [
      { id: 1, name: "Marvin", points: 12 },
      { id: 2, name: "Jonas", points: 14 },
      { id: 3, name: "Stefan", points: 11 },
    ],
  };

  const userReducer = (state: State, action: Action) => {
    switch (action.type) {
      case "ADD_POINT":
        return {
          users: state.users.map((user) =>
            user.id === action.id ? { ...user, points: user.points + 1 } : user
          ),
        };

      case "REMOVE_POINT":
        return {
          users: state.users.map((user) =>
            user.id === action.id && user.points > 0
              ? { ...user, points: user.points - 1 }
              : user
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(userReducer, INITIALSTATE);

  const addPoint = useCallback((id: number) => {
    dispatch({ type: "ADD_POINT", id: id });
  }, []);

  const removePoint = useCallback((id: number) => {
    dispatch({ type: "REMOVE_POINT", id: id });
  }, []);

  return {
    users: state.users,
    addPoint,
    removePoint,
  };
}
