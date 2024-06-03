"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export default function UpcommingWebinars() {
    return (
        <div className="w-full bg-dot-white/[0.09] py-4">
            <div className="max-w-5xl mx-auto px-8">
                <div className='text-center mt-10'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                        FEATURED WEBINARS
                    </h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white
                sm:text-4xl'>
                        Learn With the Best
                    </p>
                </div>

                <HoverEffect items={projects.map(webinar => (
                    {
                        ...webinar,
                        link: `/commingsoon`
                    }
                ))} />

                <div className='mt-1 text-center'>
                    <Link href={"/commingsoon"}>
                        <button className="inline-flex h-12 animate-shimmer items-center 
                        justify-center rounded-xl border border-slate-800 
                        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                        bg-[length:200%_100%] px-6 font-medium text-teal-300 transition-colors 
                        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
                        focus:ring-offset-slate-50">
                            View All Webinars
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export const projects = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
    },
];
