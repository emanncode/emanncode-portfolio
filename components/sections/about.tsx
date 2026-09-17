"use client"

export default function About() {
    return (
        <section id="about" className="min-h-[90vh] pt-30 relative">
            <div className="flex justify-between">
                <h1 className="font-heading font-semibold text-2xl sticky">.../About me ...</h1>
                <p className="text-muted-foreground max-w-2xl leading-10 text-[18px]">
                    Hello, I'm Ifeoluwa Olajubaje, <span className="text-foreground italic">I'm a full-stack engineer.</span> <br />More than <span className="text-foreground italic">3 years</span> of experience in building
                </p>
                <span></span>
            </div>
            <div className="flex flex-1 justify-between ">
                <div className="flex flex-col gap-8">
                    <div className="bg-foreground text-background rounded-[29px] py-5 px-8 flex gap-4 flex-col">
                        <h1 className="text-[22px] font-bold">Front-end</h1>
                        <p className="max-w-135 font-semibold italic">Typescript / React / Vue/ VueX / NextJs / Redux Toolkit / Nuxt / React Native</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="border-muted-foreground border rounded-[29px] py-5 px-8 flex gap-4 flex-col">
                            d
                        </div>
                            <div className="border-muted-foreground border rounded-[29px] py-3 px-8 flex gap-4 flex-col">
                                d
                            </div>
                    </div>
                    <div>bycnuco</div>
                    <div>bycnuco</div>
                </div>
                <div>wefdded</div>
            </div>
        </section>
    )
}