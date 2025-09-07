"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In with:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold text-white text-center mb-10">
        Sign In
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 rounded-full border focus:outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-3 rounded-full border focus:outline-none"
      />
      <Link
        href="/forgetPassword"
        className="flex text-xs justify-end hover:underline"
      >
        Forgot Password?
      </Link>

      <button
        type="submit"
        className="mx-auto bg-gradient-to-br from-orange-500/90 to-purple-950/90 hover:from-orange-600 text-white/80 w-40 p-3 rounded-full font-semibold cursor-pointer"
      >
        Sign In
      </button>
      <div className="flex items-center justify-between">
        <p>OR</p>
        <Link
          href="/signup"
          className="flex text-xs justify-end hover:underline"
        >
          {"Don't have an account?"}
        </Link>
      </div>
      <hr className="border-[0.5] border-white opacity-40 w-full mb-1 mx-auto" />

      <Link
        href="/signup"
        className="flex rounded-full hover:shadow-xl transform duration-300 ease-in-out bg-purple-100/5 p-2 justify-center"
      >
        Sign Up
      </Link>
    </form>
  );
}
