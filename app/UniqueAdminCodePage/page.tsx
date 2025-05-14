'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineVpnKey } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';

export default function UniqueCodePage() {
  const [codeInput, setCodeInput] = useState('');
  const [newPassword, setNewPassword] = useState('');       // ← make sure you have this!
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (/^\d{0,5}$/.test(v)) setCodeInput(v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const code = parseInt(codeInput, 10);
    if (isNaN(code) || codeInput.length !== 5) {
      setError('Enter a valid 5‑digit code.');
      return;
    }

    const res = await fetch('/api/verifyAdminCode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: Number(codeInput),
        newPassword,      // make sure this state is populated from a password input!
      }),
    });  // ← CLOSE fetch here

    if (res.ok) {
      router.push('/AdminConfirmationPage');
    } else if (res.status === 404) {
      setError('Code not found. Try again.');
    } else {
      const body = await res.json();
      setError(body.error || 'Unexpected server error.');
    }
  };  // ← CLOSE handleSubmit here



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-4">
      {/* Back Arrow */}
      <Link
        href="/SignInPage"
        className="absolute top-4 left-4 p-2 border-2 border-blue-950 rounded-full text-blue-950 hover:bg-blue-950 hover:text-white transition"
      >
        <FaArrowLeft />
      </Link>

      {/* Centered Card (wider now) */}
      <div className="rounded-2xl shadow-2xl bg-white w-full max-w-lg p-20">

        <form onSubmit={handleSubmit} className="space-y-6 text-center">
        <p className="text-gray-600 text-sm">
        A verfication code has been sent from ezefood09@gmail.com. Check your spam folder.
        </p>
          <div className="bg-gray-100 p-3 rounded-2xl flex items-center">

            <MdOutlineVpnKey className="text-gray-400 mr-3" />

            <input
              type="text"
              value={codeInput}
              onChange={handleInputChange}
              placeholder="Enter 5‑digit code"
              maxLength={5}
              inputMode="numeric"
              required
              className="bg-gray-100 outline-none flex-1 text-lg"
            />
          </div>

          <button
            type="submit"
            className="border-2 border-blue-950 rounded-full px-8 py-2 text-blue-950 hover:bg-blue-950 hover:text-white transition text-lg font-medium"
          >
            Confirm
          </button>

          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
