"use client"

import Image from "next/image"
import { useRef } from "react"
import { GithubIcon, type GithubIconHandle } from "@/components/ui/github"
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/ui/arrow-right"

export default function About() {
    const githubRef = useRef<GithubIconHandle>(null)
    const arrowRef = useRef<ArrowRightIconHandle>(null)
    return (
        <section id="about" className="min-h-screen pt-10 relative">
            <span className="border border-muted-foreground/50 w-180 rounded-full aspect-square absolute -right-45 z-0"></span>
            <div className="flex flex-col">
                <div className="flex justify-between relative px-[8%]">
                    <h1 className="font-heading font-semibold text-2xl sticky">.../About me ...</h1>
                    <p className="text-muted-foreground max-w-150 leading-10 text-[18px]">
                        Hello, I'm Ifeoluwa Olajubaje, <span className="text-foreground italic">a full-stack engineer.</span> 3 years as a developer, <span className="text-foreground italic">1 year</span> of experience in <span className="text-foreground italic">building as an engineer</span>
                    </p>
                    <span></span>
                </div>
                <div className="flex justify-between pt-20 px-[8%]">
                    <div className="flex flex-col gap-12">
                        <div className="bg-foreground text-background rounded-[29px] py-5 px-8 flex gap-4 flex-col">
                            <h1 className="text-[22px] font-bold">Front-end</h1>
                            <p className="max-w-145 font-medium italic">Typescript / React / Vue/ VueX / NextJs / Redux Toolkit / Nuxt / React Native / Javascript</p>
                        </div>
                        <div className="flex justify-between items-center pr-12">
                            <div className="border-muted-foreground/50 border rounded-[29px] py-5 px-8 flex gap-4 flex-col">
                                <h1 className="text-[22px] font-bold">Styles</h1>
                                <p className="max-w-63 font-medium italic">SCSS / SASS / POSTCSS / MUI / Material UI</p>
                            </div>
                            <a
                                href="https://github.com/emanncode"
                                target="_blank"
                                className="flex -space-x-6"
                                onMouseEnter={() => {
                                    githubRef.current?.startAnimation()
                                    arrowRef.current?.startAnimation()
                                }}
                                onMouseLeave={() => {
                                    githubRef.current?.stopAnimation()
                                    arrowRef.current?.stopAnimation()
                                }}
                            >
                                <GithubIcon ref={githubRef} className="border-muted-foreground/50 border rounded-full p-5" />
                                <ArrowRightIcon ref={arrowRef} size={28} className="rounded-full bg-foreground p-5 text-background -rotate-45" />
                            </a>
                        </div>
                        <div className="border-muted-foreground/50 border rounded-[29px] py-5 px-8 flex gap-4 flex-col">
                            <h1 className="text-[22px] font-bold">Back-end & Database</h1>
                            <p className="max-w-145 font-medium italic">GoLang / Gin / GORM / PostgreSQL/ MySQL / MongoDB / Node / PHP / Microservices / Supabase / REST APIs</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div
                            className="relative bg-blend-luminosity bg-emann w-200 bg-center bg-cover bg-no-repeat bg-primary rounded-4xl"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}