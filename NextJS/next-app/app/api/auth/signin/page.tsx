import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Pfad zu deiner Config
import { redirect } from "next/navigation";
import Link from "next/link";
import ProviderButton from "@/app/components/ProviderButton";
import SignInForm from "@/app/components/SignInForm";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card w-96  shadow-xl p-8 border border-base-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Anmelden</h2>

        <div className="flex flex-col gap-3">
          {providers &&
            Object.values(providers).map(
              (provider) =>
                provider.id !== "credentials" && (
                  <ProviderButton
                    key={provider.name}
                    providerId={provider.id}
                    providerName={provider.name}
                  />
                ),
            )}
        </div>

        <div className="divider text-xs text-base-content/50">ODER</div>

        <SignInForm />

        <div className="mt-8 text-center text-sm">
          <span>Noch kein Konto? </span>
          <Link href="/register" className="link link-primary font-semibold">
            Jetzt registrieren
          </Link>
        </div>
      </div>
    </div>
  );
}
