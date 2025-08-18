"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <h2 className="mb-8 text-2xl font-bold text-white text-center">
        Sign Up
      </h2>

      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="p-3 rounded-full border focus:outline-none"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="p-3 rounded-full border focus:outline-none"
      />
      <input
        name="number"
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className="p-3 rounded-full border focus:outline-none"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="p-3 rounded-full border focus:outline-none"
      />

      <button
        type="submit"
        className="mx-auto bg-gradient-to-br from-orange-500/90 to-purple-950/90 hover:from-orange-600 text-white/80 w-40 p-3 mt-4 rounded-full font-semibold cursor-pointer"
      >
        Sign Up
      </button>
      <div className="flex items-center justify-between">
        <p>OR</p>
        <Link href="/signin" className="flex text-xs justify-end">
          Already have an account?
        </Link>
      </div>

      <hr className="border-[0.5] border-white opacity-40 w-full mx-auto" />

      <Link href="/signup" className="flex font-bold justify-center">
        google..
      </Link>
    </form>
  );
}
