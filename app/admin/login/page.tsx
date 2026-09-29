"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!/^\d{8}$/.test(password)) {
      setError("Password must contain exactly 8 digits.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Invalid password.");
        setIsLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Admin login error:", error);
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffaf6] px-6">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-[#ead9ca] bg-white p-8 shadow-xl sm:p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b2417] text-white">
            <LockKeyhole className="h-6 w-6" />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6040]">
              Admin Panel
            </p>

            <h1 className="mt-2 font-serif text-3xl font-semibold text-[#3b2417]">
              ShantaKumari Mehendi Art
            </h1>

            <p className="mt-3 text-sm text-stone-500">
              Enter your 8-digit admin password to continue.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#3b2417]"
              >
                Admin Password
              </label>

              <input
                id="password"
                type="password"
                inputMode="numeric"
                maxLength={8}
                value={password}
                onChange={(event) => {
                  const value = event.target.value.replace(/\D/g, "");
                  setPassword(value);
                  setError("");
                }}
                placeholder="Enter 8-digit password"
                className="w-full rounded-xl border border-[#ead9ca] bg-[#fffaf6] px-4 py-3 text-center text-lg tracking-[0.3em] text-[#3b2417] outline-none transition focus:border-[#7d4727] focus:ring-2 focus:ring-[#7d4727]/20"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || password.length !== 8}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3b2417] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5a3422] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking...
                </>
              ) : (
                "Enter Admin Panel"
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}