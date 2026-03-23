'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { IMAGES } from '@/assets/images';

export function Heritage() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section ref={sectionRef} id="heritage" className="py-24 md:py-40 px-6 md:px-10 relative z-10 bg-gradient-to-b from-pearl via-pearl/95 to-pearl dark:from-midnight dark:via-midnight/95 dark:to-midnight transition-colors duration-[1.5s]">
            <div className="max-w-[90rem] mx-auto">

                <div className="text-center mb-20 md:mb-32 max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="font-serif text-4xl md:text-7xl font-light tracking-tight text-navy dark:text-shell mb-6 md:mb-8">
                            A Sacred Horizon
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="font-sans text-sm md:text-lg leading-[2] md:leading-[2.2] text-charcoal dark:text-champagne max-w-3xl mx-auto px-4">
                            Infina rests in the embrace of Murdeshwara, home to the world's second-tallest Lord Shiva statue.
                            Here, the eternal ocean meets divine serenity—where every sunrise is a blessing and every wave whispers ancient mantras.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="font-sans text-[9px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-terracotta dark:text-teal mt-6">
                            Spiritual Heritage · Divine Tranquility
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
                    <Reveal className="md:col-span-7 rounded-[2rem] md:rounded-[3rem] img-wrap aspect-[16/10] md:aspect-[4/3] overflow-hidden">
                        <motion.div style={{ y: y1 }} className="w-full h-full relative">
                            <Image
                                src={IMAGES.heritage.murudeshwar1}
                                alt="Murdeshwara Temple and Lord Shiva Statue"
                                fill
                                className="object-cover object-[center_65%] img-scale"
                                quality={100}
                            />
                        </motion.div>
                    </Reveal>

                    <Reveal delay={0.15} className="md:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8 px-2 md:px-4">
                        <div>
                            <h3 className="font-serif text-2xl md:text-4xl font-light mb-4 text-navy dark:text-shell leading-tight tracking-tight">
                                123 Feet of Divine Grace
                            </h3>
                            <p className="font-sans text-sm md:text-base leading-[1.9] md:leading-[2] text-charcoal/90 dark:text-champagne/90">
                                The majestic statue of Lord Shiva stands sentinel over the Arabian Sea,
                                a timeless guardian watching over pilgrims and travelers alike. This sacred monument,
                                visible from Infina, infuses every moment of your stay with spiritual energy.
                            </p>
                        </div>

                        <div className="border-l-2 border-terracotta/30 dark:border-teal/30 pl-6">
                            <p className="font-sans text-xs md:text-sm italic font-medium leading-relaxed text-navy dark:text-shell">
                                "In the stillness between the temple bells and ocean waves,
                                find your own moment of infinity."
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <Reveal className="md:col-span-5 md:col-start-1 flex flex-col justify-center space-y-6 px-2 md:px-4 order-2 md:order-1">
                        <div>
                            <h3 className="font-serif text-2xl md:text-4xl font-light mb-4 text-navy dark:text-shell leading-tight tracking-tight">
                                Where Land Meets Legend
                            </h3>
                            <p className="font-sans text-sm md:text-base leading-[1.9] md:leading-[2] text-charcoal/90 dark:text-champagne/90">
                                The Murdeshwara Temple complex is a pilgrimage destination steeped in mythology.
                                According to legend, this is where Lord Shiva's divine essence descended to earth,
                                making it one of Karnataka's most revered spiritual sites.
                            </p>
                        </div>

                        <div className="flex gap-8 md:gap-12 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-charcoal/70 dark:text-champagne/70">
                            <div>
                                <p className="font-serif text-2xl md:text-3xl text-terracotta dark:text-teal mb-1">2 km</p>
                                <p>From Infina</p>
                            </div>
                            <div>
                                <p className="font-serif text-2xl md:text-3xl text-terracotta dark:text-teal mb-1">1000+</p>
                                <p>Years of History</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15} className="md:col-span-7 md:col-start-6 rounded-[2rem] md:rounded-[3rem] rounded-tr-[4rem] md:rounded-tr-[6rem] img-wrap aspect-[16/11] md:aspect-[4/3] overflow-hidden order-1 md:order-2">
                        <motion.div style={{ y: y2 }} className="w-full h-full relative">
                            <Image
                                src={IMAGES.heritage.murudeshwar2}
                                alt="Murdeshwara Temple Complex"
                                fill
                                className="object-cover object-center img-scale"
                                quality={100}
                            />
                        </motion.div>
                    </Reveal>
                </div>

            </div>
        </section>
    );
}
