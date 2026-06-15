export default function GithubStats() {
    return (
        <section className="section-blog-1 position-relative pt-120 pb-120">
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

                    {/* Top Languages */}
                    <div className="col-lg-6">
                        <div className="bg-6 rounded-4 p-lg-5 p-4 h-100 text-center d-flex flex-column">
                            <h6 className="fw-semibold mb-3">Top Languages</h6>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=PintuAhirwar&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1a2e&title_color=6d4df2&text_color=ffffff"
                                    alt="Top Languages"
                                    className="rounded-3 w-100"
                                    style={{ maxWidth: "400px" }}
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

                    {/* Activity Graph */}
                    <div className="col-lg-6">
                        <div className="bg-6 rounded-4 p-lg-5 p-4 h-100 text-center d-flex flex-column">
                            <h6 className="fw-semibold mb-3">Contribution Graph</h6>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img
                                    src="https://github-readme-activity-graph.vercel.app/graph?username=PintuAhirwar&theme=tokyo-night&hide_border=true&bg_color=1a1a2e&color=6d4df2&line=6d4df2&point=ffffff"
                                    alt="GitHub Activity Graph"
                                    className="rounded-3 w-100"
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
        </section>
    )
}