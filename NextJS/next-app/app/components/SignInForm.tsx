"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // signIn gibt bei redirect: false ein Objekt zurück, kein Error-Throw
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Login fehlgeschlagen. Daten prüfen!");
    } else {
      router.push("/");
      router.refresh(); // Wichtig, damit Server Components merken, dass du nun eingeloggt bist
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="text-error text-sm text-center font-medium">
          {error}
        </div>
      )}

      <input
        type="email"
        className="input input-bordered"
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="input input-bordered"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-primary">
        Einloggen
      </button>
    </form>
  );
}
