import Link from "next/link";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <div>Racing Tips!</div>
    </>
  );
}
