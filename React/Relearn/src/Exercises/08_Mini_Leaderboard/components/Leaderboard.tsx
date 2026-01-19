import type { User } from "../Mini_Leaderboard";
import UserListItem from "./UserListItem";

interface Props {
  users: User[];
  addPoint: (id: number) => void;
  subtractPoint: (id: number) => void;
}

const Leaderboard = ({ users, addPoint, subtractPoint }: Props) => {
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);
  return [...sortedUsers].map((user, index) => (
    <UserListItem
      user={user}
      key={user.id}
      addPoint={addPoint}
      subtractPoint={subtractPoint}
      position={index + 1}
    />
  ));
};

export default Leaderboard;
