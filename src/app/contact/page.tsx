"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data = ", { email, message });
  };

  return (
    <div className="min-h-screen w-full rounded-md bg-gray-900 relative flex flex-col items-center 
    justify-center antialiased py-12 pt-36">

      <BackgroundBeams className="absolute left-0 top-0 w-full h-full z-0" />

      <div className="w-[43rem] max-w-3xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold
        mb-8">
          Contact Us
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We're here to help with any questions about our courses, programs, or events.
          Reach out and let us know how we can assist you in your musical journey.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            required
            placeholder="Your email address"
            type="email"
            className="bg-neutral-950 placeholder:text-neutral-700 w-full h-[4rem]
            text-base rounded-lg"
          />

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="h-[10rem] flex items-start rounded-lg border border-neutral-800 focus:ring-2 
            focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-base"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-br relative group/btn from-black 
            dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block 
            dark:bg-zinc-800 text-white rounded-md h-full font-semibold 
            shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
            dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
            self-start justify-self-start p-4"
          >
            Send Message
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
