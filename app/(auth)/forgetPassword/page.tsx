"use client";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot Password for:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold text-white text-center mb-5">
        Forgot Password
      </h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 rounded-full border focus:outline-none"
      />

      <button
        type="submit"
        className="mx-auto bg-gradient-to-br from-orange-500/90 to-purple-950/90 hover:from-orange-600 text-white/80 w-50 p-3 rounded-full font-semibold cursor-pointer"
      >
        Send Reset Link
      </button>
    </form>
  );
}
