import Link from "next/link";

export default function Service1() {
    return (
        <>
            <section className="section-service-1 pt-120 pb-120">
    <div className="container">
        <div className="row align-items-end">
            <div className="col-lg-7 me-auto">
                <h3 className="ds-3 mt-3 mb-3 text-primary-1">What do I offer?</h3>
                <span className="fs-5 fw-medium text-200">
                    From writing clean code to crafting beautiful visuals —
                    <br />
                    I bring both technical and creative expertise to every project.
                </span>
            </div>
            <div className="col-lg-auto">
                <Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
                    Get a Quote
                    <i className="ri-arrow-right-up-line" />
                </Link>
            </div>
        </div>
        <div className="row mt-6 justify-content-between">

            {/* 01 - Full Stack Development */}
            <div className="col-12">
                <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/fullstack.png">
                    <div className="service-card-details d-lg-flex align-items-center">
                        <h3 className="service-card-title w-lg-50 w-100 mb-0">
                            <Link href="/work-single">
                                <span className="service-number">01.</span>
                                Full Stack Development
                            </Link>
                        </h3>
                        <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                            <p className="service-card-text my-3">
                                Building real-world web applications using Django & Next.js with <br />
                                REST APIs, PostgreSQL, and responsive frontend interfaces.
                            </p>
                            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                <i className="ri-arrow-right-up-line" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 02 - Graphic Design */}
            <div className="col-12">
                <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/graphic.png">
                    <div className="service-card-details d-lg-flex align-items-center">
                        <h3 className="service-card-title w-lg-50 w-100 mb-0">
                            <Link href="/work-single">
                                <span className="service-number">02.</span>
                                Graphic Design
                            </Link>
                        </h3>
                        <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                            <p className="service-card-text my-3">
                                3+ years of experience in creating logos, branding, social media creatives <br />
                                and marketing materials using Photoshop, Illustrator, CorelDRAW & Canva.
                            </p>
                            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                <i className="ri-arrow-right-up-line" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 03 - Notes Design */}
            <div className="col-12">
                <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/notesdesign.png">
                    <div className="service-card-details d-lg-flex align-items-center">
                        <h3 className="service-card-title w-lg-50 w-100 mb-0">
                            <Link href="/work-single">
                                <span className="service-number">03.</span>
                                Notes Design
                            </Link>
                        </h3>
                        <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                            <p className="service-card-text my-3">
                                Designed 50+ professional study notes with clean layouts, icons and <br />
                                visual hierarchy — making complex topics easy to understand and retain.
                            </p>
                            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                <i className="ri-arrow-right-up-line" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 04 - UI/UX Design */}
            <div className="col-12">
                <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} data-img="assets/imgs/services/services-1/uiux.png">
                    <div className="service-card-details d-lg-flex align-items-center">
                        <h3 className="service-card-title w-lg-50 w-100 mb-0">
                            <Link href="/work-single">
                                <span className="service-number">04.</span>
                                UI/UX Design
                            </Link>
                        </h3>
                        <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                            <p className="service-card-text my-3">
                                Designing clean, user-focused interfaces for web and mobile — <br />
                                with a focus on usability, aesthetics and smooth user experience.
                            </p>
                            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                <i className="ri-arrow-right-up-line" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
            </section>
        </>
    );
}
