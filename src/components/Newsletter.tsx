import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F0E7] border-t border-[#D8D1C5]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#92947A]">
          07 / Roastery Notes
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[#24382E] font-medium">
          Stories, brewing notes, and early roast releases.
        </h2>

        <p className="text-xs sm:text-sm text-[#5C5E54] font-light max-w-lg mx-auto">
          Join our small community of home brewers. We send one thoughtfully written digest every fortnight. No noise, ever.
        </p>

        {/* Form Container */}
        <div className="max-w-md mx-auto pt-2">
          {status === 'success' ? (
            <div className="bg-[#24382E] text-[#F5F0E7] p-4 rounded-xs text-xs flex items-center justify-center space-x-3 animate-fade-in border border-[#92947A]/30">
              <CheckCircle2 className="w-4 h-4 text-[#92947A] shrink-0" />
              <span>Thank you. You’ve been added to our demo subscriber list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full bg-[#FAF7F2] border border-[#D8D1C5] focus:border-[#24382E] px-4 py-3 text-xs text-[#24251F] placeholder-[#92947A] rounded-xs focus:outline-hidden transition-colors"
                  disabled={status === 'submitting'}
                  aria-label="Email Address for newsletter"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[#24382E] hover:bg-[#1A2A22] text-[#F5F0E7] px-6 py-3 text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center justify-center space-x-2 rounded-xs cursor-pointer shrink-0"
              >
                <span>{status === 'submitting' ? 'Submitting...' : 'Join List'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          {status === 'error' && (
            <div className="mt-2 text-left flex items-center space-x-1.5 text-[0.72rem] text-red-700">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="text-[0.62rem] text-[#92947A] mt-3 tracking-wide uppercase">
            Demonstration Form · No real marketing emails will be sent.
          </p>
        </div>
      </div>
    </section>
  );
};
