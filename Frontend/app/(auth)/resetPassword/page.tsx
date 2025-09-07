"use client";
import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    console.log("Reset with:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold text-white text-center mb-5">
        Reset Password
      </h2>

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-3 rounded-full border focus:outline-none"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
        className="p-3 rounded-full border focus:outline-none"
      />

      <button
        type="submit"
        className="mx-auto bg-gradient-to-br from-orange-500/90 to-purple-950/90 hover:from-orange-600 text-white/80 w-50 p-3 mt-2 rounded-full font-semibold cursor-pointer"
      >
        Reset Password
      </button>
    </form>
  );
}
