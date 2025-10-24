"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // ✅ inisialisasi router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /^[\w.-]+@(gmail|yahoo|mail)\.com$/.test(email);
  };

  const validatePassword = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setError("Email must end with @gmail.com, @yahoo.com, or @mail.com");
      setMessage("");
      return;
    }

    if (!validatePassword(form.password)) {
      setError(
        "Password must be at least 6 characters and contain both letters and numbers"
      );
      setMessage("");
      return;
    }

    // Simpan ke localStorage
    localStorage.setItem("user", JSON.stringify(form));
    localStorage.setItem("email", form.email);

    setError("");
    setMessage("Registration successful! Redirecting to login...");

    // ✅ Redirect otomatis setelah 2 detik
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>

        {error && <p className="mt-3 text-red-600 text-center">{error}</p>}
        {message && <p className="mt-3 text-green-600 text-center">{message}</p>}
      </form>
    </div>
  );
}
