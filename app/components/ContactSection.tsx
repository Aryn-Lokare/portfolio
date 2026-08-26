"use client";

import React, { useState } from 'react';
import { submitContactForm } from '../actions/contact';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await submitContactForm(formData.name, formData.email, formData.message);
      if (res.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMsg(res.error || "An error occurred.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#09090b] py-16 sm:py-20 md:py-24 border-t border-zinc-900" id="contact">
      <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        
        {/* Left Column: Title, Subtitle, and Resume */}
        <ScrollReveal direction="left">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="font-sans font-medium text-white text-[32px] sm:text-[38px] md:text-[45px] tracking-[-1.5px] sm:tracking-[-2px] leading-none">
              Reach Out
            </h2>
            <p className="font-sans text-[14px] sm:text-[16px] leading-relaxed text-zinc-400 font-light max-w-[450px]">
              Have a project in mind, want to discuss a collaboration, or just want to say hi? Feel free to drop a message, or download my resume below.
            </p>

            {/* Resume Linkholder Button */}
            <div className="mt-2 sm:mt-4">
              <a
                href="#"
                download="Aryan_Lokare_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-zinc-950 text-[14px] sm:text-[15px] font-semibold font-sans transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-md"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-950" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Contact Form */}
        <ScrollReveal direction="right" delay={0.15}>
          <div className="bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-2xl shadow-black/40 w-full transition-all duration-300">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-900/50 flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-[20px] sm:text-[22px] text-white mb-2">Message Sent!</h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-zinc-400 font-light max-w-[320px]">
                  Thanks for reaching out! I will review your message and get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 sm:mt-6 font-sans text-xs font-mono font-bold tracking-wider text-zinc-500 hover:text-white uppercase transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/70 border border-zinc-800 text-white placeholder-zinc-500 font-sans text-[14px] sm:text-[15px] focus:outline-none focus:bg-zinc-950 focus:border-white focus:ring-1 focus:ring-white transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/70 border border-zinc-800 text-white placeholder-zinc-500 font-sans text-[14px] sm:text-[15px] focus:outline-none focus:bg-zinc-950 focus:border-white focus:ring-1 focus:ring-white transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/70 border border-zinc-800 text-white placeholder-zinc-500 font-sans text-[14px] sm:text-[15px] focus:outline-none focus:bg-zinc-950 focus:border-white focus:ring-1 focus:ring-white transition-all resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="text-red-400 font-sans text-[13px] sm:text-[14px] font-medium text-center p-2 rounded-xl bg-red-950/30 border border-red-900/50">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white disabled:bg-zinc-800 text-zinc-950 disabled:text-zinc-500 text-[14px] sm:text-[15px] font-semibold font-sans transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-md mt-1 sm:mt-2"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && (
                    <svg className="w-4 h-4 text-zinc-950" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ContactSection;