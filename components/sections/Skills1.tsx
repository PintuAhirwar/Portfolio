"use client";
import Link from "next/link";
import CountUp from "react-countup";
export default function Skills1() {
    return (
        <>
            <section className="section-skills-1 position-relative section-padding bg-900">
                <div className="container">
                    <div className="row">
                        <div className="text-center mb-7">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">My Skills</h3>
                            <span className="fs-5 fw-medium text-200">
                                From writing clean code to crafting stunning visuals —
                                <br className="d-md-block d-none" />
                                I bring both technical and creative skills to every project.
                            </span>
                        </div>

                        {/* === DEV SKILLS === */}
                        <p className="text-center text-400 fw-medium fs-5 mb-4">Development & Data</p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mb-7 px-6">

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={90} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Python</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" style={{ width: "90px", height: "90px", filter: "invert(1)" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={75} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Django</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" style={{ width: "90px", height: "90px", filter: "invert(1)" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={75} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Next.js</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={30} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">JavaScript</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={50} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">PostgreSQL</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={50} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Pandas</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={60} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Git</p>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="/assets/imgs/skills/skills-1/powerbi.png" alt="Power BI" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={95} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Power BI</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="/assets/imgs/skills/skills-1/excel.png" alt="Excel" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={95} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Adv. Excel</p>
                                </div>
                            </div>

                        </div>

                        {/* === DESIGN SKILLS === */}
                        <p className="text-center text-400 fw-medium fs-5 mb-4">Design & Creative Tools</p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mb-7 px-6">

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={98} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Photoshop</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={95} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Illustrator</p>
                                </div>
                            </div>

                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={98} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">Canva</p>
                                </div>
                            </div>


                            {/* CorelDRAW */}
                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="https://cdn.simpleicons.org/coreldraw/00A550" alt="CorelDRAW" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={90} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">CorelDRAW</p>
                                </div>
                            </div>

                            {/* InDesign */}
                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="/assets/imgs/skills/skills-1/indesign.png" alt="InDesign" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={98} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">InDesign</p>
                                </div>
                            </div>

                            {/* AI Tools - ChatGPT icon */}
                            <div className="skills">
                                <div className="skills-icon mb-5">
                                    <img src="/assets/imgs/skills/skills-1/claude.png" alt="AI Tools" style={{ width: "90px", height: "90px" }} />
                                </div>
                                <div className="skills-ratio text-center">
                                    <h3 className="count fw-semibold my-0">
                                        <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={95} />%
                                    </h3>
                                    <p className="text-400 fw-medium text-uppercase">AI Tools</p>
                                </div>
                            </div>

                        </div>

                        {/* Bottom text */}
                        <div className="text-center">
                            <p className="fs-5 text-200 mb-0">Additional skills: </p>
                            <div className="d-flex justify-content-center gap-1 flex-wrap">
                                <Link href="#" className="fs-5 fw-bold">HTML,</Link>
                                <Link href="#" className="fs-5 fw-bold">CSS,</Link>
                                <Link href="#" className="fs-5 fw-bold">Bootstrap,</Link>
                                <Link href="#" className="fs-5 fw-bold">Tailwind CSS,</Link>
                                <Link href="#" className="fs-5 fw-bold">REST APIs,</Link>
                                <Link href="#" className="fs-5 fw-bold">Power BI,</Link>
                                <Link href="#" className="fs-5 fw-bold">NumPy</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
