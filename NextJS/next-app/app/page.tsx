export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import car from "../public/images/car.jpg";
import { Metadata } from "next";
import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Image
        src="https://soggiorno.at/wp-content/uploads/2023/07/soggiorno_illu2-1_DS-2.png"
        alt="Car"
        height={300}
        width={300}
        className="object-contain"
        quality={75}
        priority
      />
      <HeavyComponent />
    </main>
  );
}

/* So würde es aussehen, wenn man die Metadaten abhängig von gewissen Daten machen will:
export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");
  return {
    title: "product.title",
    description: "product.description",
  };
}
*/
