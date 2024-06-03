"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TestimonialCards() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black 
        dark:bg-grid-white/[0.05] bg-grid-black/[0.2] items-center justify-center relative 
        overflow-hidden px-10">
            <p className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
                Hear our Harmony: Voices of Success
            </p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
        name: 'Alex Johnson',
        title: 'Guitar Student',
    },
    {
        quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
        name: 'Samantha Lee',
        title: 'Piano Student',
    },
    {
        quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
        name: 'Michael Chen',
        title: 'Vocal Student',
    },
    {
        quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
        name: 'Emily Taylor',
        title: 'Violin Student',
    },
    {
        quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
        name: 'Chris Morales',
        title: 'Music Production Student',
    },
];
