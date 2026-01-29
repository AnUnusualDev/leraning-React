"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { updatePasswordAction } from "../api/auth/resetPassword/action";

const ResetPasswordForm = () => {
  const { data: session } = useSession();
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (session?.user?.email) {
      updatePasswordAction(session?.user?.email, newPassword);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reset Password</h1>
      <input
        className="input"
        type="password"
        placeholder="new Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      ></input>
      <button className="btn btn-primary mt-2 w-full">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
