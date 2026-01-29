"use client";
import { signIn } from "next-auth/react";

export default function ProviderButton({
  providerId,
  providerName,
}: {
  providerId: string;
  providerName: string;
}) {
  return (
    <button
      onClick={() => signIn(providerId, { callbackUrl: "/" })}
      className="btn btn-outline w-full"
    >
      Mit {providerName} anmelden
    </button>
  );
}
