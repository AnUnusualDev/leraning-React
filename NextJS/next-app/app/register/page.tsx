"use client";
import React, { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { name, email, password };
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Successfully registered: ", data);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        console.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error on request: ", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Register</legend>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className="input"
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="input"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className="input"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
