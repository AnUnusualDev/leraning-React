import Link from "next/link";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <a href="/dashboard">Dashboard</a>
      <div>Racing Tips!</div>
    </>
  );
}
