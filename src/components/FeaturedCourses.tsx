'use client'
import React from 'react'
import courseData from '@/data/music_course.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'

interface Course {
    "id": number,
    "title": string,
    "slug": string,
    "description": string,
    "price": number,
    "instructor": string,
    "isFeatured": boolean,
    "image": string,
}

function FeaturedCourses() {
    return (
        <div className="py-12 px-6 bg-gray-900">
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                    FEATURED COURSES
                </h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white
                sm:text-4xl'>
                    Learn With the Best
                </p>
            </div>
            <div className='max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    courseData.courses.filter((course: Course) => course.isFeatured).
                        map((course: Course) => (
                            <div key={course.id} className='flex justify-center'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 
                                bg-white dark:bg-zinc-900 flex flex-col items-start">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        height="400"
                                        width="400"
                                        className="object-contain"
                                    />
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 
                                    dark:text-neutral-200">
                                        {course.title}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {`${course.description.substring(0, 80)}...`}
                                    </p>
                                    <Link href={`/course`}>
                                        <button className="mt-4 px-8 py-2 rounded-full relative 
                                        bg-slate-700 text-teal-300 text-sm hover:shadow-2xl 
                                        hover:shadow-white/[0.1] transition duration-200 border 
                                        border-slate-600">
                                            <div className="absolute inset-x-0 h-px w-1/2 mx-auto 
                                            -top-px shadow-2xl  bg-gradient-to-r from-transparent 
                                            via-teal-500 to-transparent" />
                                            <span className="relative z-20">
                                                Learn More
                                            </span>
                                        </button>
                                    </Link>
                                </BackgroundGradient>
                            </div>
                        ))
                }
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/courses"}>
                    <button className="inline-flex h-12 animate-shimmer items-center 
                    justify-center rounded-xl border border-slate-800 
                    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] px-6 font-medium text-teal-300 transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
                    focus:ring-offset-slate-50">
                        View All Courses
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses