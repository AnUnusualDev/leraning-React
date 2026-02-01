"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else {
      setMessage("Login erfolgreich!");
    }
  };

  const register = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage("Registrierung erfolgreich! Bitte Login.");
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setMessage("Logout erfolgreich");
  };

  return (
    <>
      <main className="flex justify-center items-center h-dvh">
        <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login / Registrieren</legend>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <p className="label">
            You can edit page title later on from settings
          </p>
          <button className="btn" onClick={login}>
            Login
          </button>
          <button className="btn" onClick={register}>
            Registrieren
          </button>
          <button className="btn" onClick={logout}>
            Abmelden
          </button>
          {message && <p>{message}</p>}
        </fieldset>
      </main>
    </>
  );
};

export default LoginPage;
