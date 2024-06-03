import React from 'react'
import coursesData from '@/data/music_course.json';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';

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

function page() {
    return (
        <div className='min-h-screne bg-black py-12 pt-36 flex flex-col items-center'>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
            text-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                {`All Courses (${coursesData.courses.length})`}
            </h1>

            <div className="max-w-5xl gap-y-0 gap-x-10 flex flex-wrap justify-center px-3">
                {
                    coursesData.courses.map((course: Course) =>
                        (<CardContainer key={course.id} className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  
                            dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                            dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
                            w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 
                                    dark:text-white"
                                >
                                    {course.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 
                                    dark:text-neutral-300"
                                >
                                    {course.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={course.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl 
                                        group-hover/card:shadow-xl"
                                        alt={course.title}
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href="/course"
                                        className="px-4 py-2 rounded-xl text-xs font-normal 
                                        dark:text-white"
                                    >
                                        Try now →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black 
                                        dark:bg-white dark:text-black text-white 
                                        text-xs font-bold"
                                    >
                                        Sign up
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>)
                    )
                }
            </div>
        </div>
    )
}

export default page