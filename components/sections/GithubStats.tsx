import Link from "next/link"

export default function GithubStats() {
    return (
        <section className="section-blog-1 position-relative pt-120">
            <div className="container">
                <div className="text-center mb-8">
                    <span className="text-primary-1 fw-medium fs-6">Open Source</span>
                    <h3 className="ds-3 mt-2 mb-3">GitHub Activity</h3>
                    <p className="text-300 fs-5">My coding activity and contributions on GitHub</p>
                </div>

                <div className="row g-4">

                    {/* GitHub Stats Card */}
                    <div className="col-lg-6">
                        <div className="bg-6 rounded-4 p-lg-5 p-4 h-100 text-center d-flex flex-column">
                            <h6 className="fw-semibold mb-3">Overall Stats</h6>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img
                                    src="https://github-readme-stats.vercel.app/api?username=PintuAhirwar&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1a2e&title_color=6d4df2&icon_color=6d4df2&text_color=ffffff"
                                    alt="GitHub Stats"
                                    className="rounded-3 w-100"
                                    style={{ maxWidth: "500px" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Streak Stats */}
                    <div className="col-lg-6">
                        <div className="bg-6 rounded-4 p-lg-5 p-4 h-100 text-center d-flex flex-column">
                            <h6 className="fw-semibold mb-3">Contribution Streak</h6>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img
                                    src="https://github-readme-streak-stats.herokuapp.com/?user=PintuAhirwar&theme=tokyonight&hide_border=true&background=1a1a2e&ring=6d4df2&fire=6d4df2&currStreakLabel=6d4df2"
                                    alt="GitHub Streak"
                                    className="rounded-3 w-100"
                                    style={{ maxWidth: "500px" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* GitHub Link */}
                    <div className="col-12 text-center mt-4">
                        <a href="https://github.com/PintuAhirwar" target="_blank" className="btn btn-gradient">
                            <i className="ri-github-fill me-2" />
                            View GitHub Profile
                        </a>
                    </div>

                </div>
            </div>

            <section id="about" className="section-blog-1 position-relative">
                {/* About me section */}
                <div className="container">
                    <div className="row align-items-center gap-lg-0 gap-5 pt-120">

                        {/* Left — Photo */}
                        <div className="col-lg-5 text-center">
                            <div className="position-relative d-inline-block" style={{ overflow: "visible" }}>
                                <img
                                    src="/assets/imgs/about/pintuu.png"
                                    alt="Pintu Ahirwar"
                                    className="rounded-4"
                                />
                            </div>
                        </div>

                        {/* Right — Content */}
                        <div className="col-lg-7 pb-120">
                            <span className="text-primary-1 fw-medium fs-6">About Me</span>
                            <h2 className="ds-4 mt-2 mb-4">Pintu Ahirwar</h2>
                            <p className="text-300 fs-5 mb-6">
                                I'm a <strong className="text-200">Full Stack Developer</strong> and <strong className="text-200">Graphic Designer</strong> based in Indore, India — building real-world web apps with <strong className="text-200">Django & Next.js</strong>, and crafting <strong className="text-200">50+ professional study notes</strong> and branding materials for clients across India.
                            </p>

                            {/* Hobbies & Interests */}
                            <div className="row mb-6">
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ri-code-s-slash-line text-primary-1 fs-5" />
                                        <span className="text-200 fw-medium">Building Web Projects</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ri-brush-line text-primary-1 fs-5" />
                                        <span className="text-200 fw-medium">Graphic Design</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ri-robot-line text-primary-1 fs-5" />
                                        <span className="text-200 fw-medium">AI & Data Science</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ri-map-pin-line text-primary-1 fs-5" />
                                        <span className="text-200 fw-medium">Indore, India</span>
                                    </div>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="d-flex gap-3 mb-6">
                                <span className="badge bg-800 text-200 px-3 py-2 rounded-3 fs-7">🇮🇳 Hindi</span>
                                <span className="badge bg-800 text-200 px-3 py-2 rounded-3 fs-7">🇬🇧 English</span>
                            </div>

                            <div className="d-flex gap-3 flex-wrap">
                                <Link href="/#contact" className="btn btn-gradient">
                                    Hire Me
                                    <i className="ri-arrow-right-up-line ms-2" />
                                </Link>
                                <Link href="/assets/resume_pintu_ahirwar.pdf" target="_blank" className="btn btn-outline-secondary d-inline-flex align-items-center">
                                    Download CV
                                    <i className="ri-download-line ms-2" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </section>
    )
}