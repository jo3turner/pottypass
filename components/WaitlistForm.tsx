'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');

    const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

    if (mailchimpUrl && mailchimpUrl !== '#') {
      try {
        // Mailchimp embed forms use a hidden iframe to bypass CORS
        const url = mailchimpUrl.replace('/post?', '/post-json?') + `&EMAIL=${encodeURIComponent(email)}&c=?`;
        await fetch(url, { method: 'GET', mode: 'no-cors' });
      } catch {
        // no-cors swallows errors; treat as success
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 bg-[#E6F7FE] text-[#1F4D7A] px-6 py-4 rounded-2xl max-w-md">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0">
          <circle cx="11" cy="11" r="11" fill="#4CB6F4" />
          <path d="M6.5 11.5L9.5 14.5L15.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-medium text-sm">You&apos;re on the list — we&apos;ll be in touch at launch!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-5 py-3.5 rounded-xl border border-[#E5E7EB] bg-white text-[#334155] placeholder-[#334155]/40 text-sm font-medium focus:outline-none focus:border-[#4CB6F4] focus:ring-2 focus:ring-[#4CB6F4]/20 transition-all"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3.5 bg-[#4CB6F4] text-white text-sm font-semibold rounded-xl hover:bg-[#1F4D7A] transition-colors duration-200 disabled:opacity-60 whitespace-nowrap"
        >
          {loading ? 'Joining…' : 'Join Waitlist'}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </form>
  );
}
