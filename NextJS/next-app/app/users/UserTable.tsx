import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

interface Props {
  sortby: string;
}

const UserTable = async ({ sortby }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = [...users].sort((a, b) => {
    if (sortby === "name") return a.name.localeCompare(b.name);
    if (sortby === "email") return a.email.localeCompare(b.email);
    return 0;
  });

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortby=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortby=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
