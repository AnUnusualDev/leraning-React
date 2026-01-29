import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Props {
  searchParams: { sortby: string };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortby } = await searchParams;
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortby={sortby} />
      </Suspense>
    </>
  );
};

export default UsersPage;
