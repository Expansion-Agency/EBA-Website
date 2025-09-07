"use client";

import { useRouter } from "next/navigation";

export default function SignInButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/signin")}
      className="rounded-l-full rounded-r-full w-26 h-13 text-sm bg-gradient-to-b from-red-900/50 to-purple-900/50 cursor-pointer hover:from-red-900 transform duration-300 transition ease-in-out"
    >
      Sign in
    </button>
  );
}
