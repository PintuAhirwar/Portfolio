import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Contact1 from "@/components/sections/Contact1"
import Static1 from "@/components/sections/Static1"

export default function Work() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work pt-120 pb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            {" "}
                                            recent Work{" "}
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Explore <span className="text-300">My Latest Work and Discover the</span> Craftsmanship Behind <span className="text-300">Each Design</span>
                                        </h3>
                                        <p className="text-300 fs-5">
                                            Explore my latest work and discover the craftsmanship behind each design: <br />a detailed look into how I bring innovation and creativity to life
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="card-scroll mt-8">
                                    <div className="cards">

{/* 6 - Notes Design */}
                                        <div className="card-custom" data-index={6}>
                                            <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                                <div className="card__image-container zoom-img position-relative">
                                                    <img className="card__image" src="/assets/imgs/work/img-3.png" alt="Notes Design" />
                                                    <Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                </div>
                                                <div className="card__content px-md-4 px-3">
                                                    <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                        <Link href="/work-single" className="card_title_link">
                                                            <p className="text-primary-1 mb-0 mb-md-2">NOTES DESIGN</p>
                                                            <h3 className="fw-semibold">Notes Design — 50+ Notes</h3>
                                                        </Link>
                                                        <Link href="/work-single" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed 50+ professional study notes with clean layouts, visual hierarchy, icons and structured content — making complex topics easy to understand and retain for students.</p>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Freelance</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Duration</p>
                                                        <p className="mb-0 card__description text-300 fs-6">2022 — Present</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
                                                        <p className="mb-0 card__description text-300 fs-6">InDesign, Photoshop, Illustrator, Canva, CorelDraw</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Combined - Classroom Project (Frontend + Backend) */}
                                        <div className="card-custom" data-index={0}>
                                            <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                                <div className="card__image-container zoom-img position-relative">
                                                    <img className="card__image" src="/assets/imgs/work/img-1.png" alt="Classroom" />
                                                    <Link href="https://classroom-frontend-24i8.onrender.com" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                </div>
                                                <div className="card__content px-md-4 px-3">
                                                    <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                        <Link href="https://classroom-frontend-24i8.onrender.com" target="_blank" className="card_title_link">
                                                            <p className="text-primary-1 mb-0 mb-md-2">WEB DEVELOPMENT</p>
                                                            <h3 className="fw-semibold">Classroom — E-Learning Platform</h3>
                                                        </Link>
                                                    </div>
                                                    <p className="text-300 mb-lg-auto mb-md-4 mb-3">A full-stack course selling platform built with Next.js frontend and Django REST backend. Students can register, browse courses, and enroll — with a structured admin dashboard for data management.</p>
                                                    <p></p>

                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Personal Project</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Status</p>
                                                        <p className="mb-0 card__description text-300 fs-6">In Progress</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Next.js, Django, REST API, PostgreSQL</p>
                                                    </div>

                                                    {/* Buttons for Frontend and Backend */}
                                                    <div className="d-flex gap-3 mt-4">
                                                        <Link href="https://classroom-frontend-24i8.onrender.com" target="_blank" className="btn btn-dark-1 rounded-pill">
                                                            Frontend <i className="ri-arrow-right-up-line ms-1" />
                                                        </Link>
                                                        <Link href="https://classroom-backend-dvcd.onrender.com/admin/" target="_blank" className="btn btn-outline-dark rounded-pill">
                                                            Backend <i className="ri-arrow-right-up-line ms-1" />
                                                        </Link>
                                                    </div>

                                                    {/* Note */}
                                                    <p className="text-300 fs-7 mt-3 mb-0">
                                                        <em>Note: Backend is on a free-tier server and may sleep when inactive — please click the Backend button first to activate it, then open the Frontend.</em>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 2 - sarthakjainca.com */}
                                        <div className="card-custom" data-index={2}>
                                            <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                                <div className="card__image-container zoom-img position-relative">
                                                    <img className="card__image" src="/assets/imgs/work/img-3.png" alt="Sarthak Jain CA" />
                                                    <Link href="https://sarthakjainca.com" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                </div>
                                                <div className="card__content px-md-4 px-3">
                                                    <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                        <Link href="https://sarthakjainca.com" target="_blank" className="card_title_link">
                                                            <p className="text-primary-1 mb-0 mb-md-2">WEB DESIGN & DEVELOPMENT</p>
                                                            <h3 className="fw-semibold">sarthakjainca.com</h3>
                                                        </Link>
                                                        <Link href="https://sarthakjainca.com" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <p className="text-300 mb-lg-auto mb-md-4 mb-3">Professional portfolio website designed and developed for CA Sarthak Jain, Indore. Clean, minimal layout with service showcase, contact form and mobile responsive design.</p>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
                                                        <p className="mb-0 card__description text-300 fs-6">CA Sarthak Jain, Indore</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Status</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Completed & Live</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
                                                        <p className="mb-0 card__description text-300 fs-6">HTML, CSS, JavaScript, Photoshop</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3 - Leads Dashboard */}
                                        <div className="card-custom" data-index={3}>
                                            <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                                <div className="card__image-container zoom-img position-relative">
                                                    <img className="card__image" src="/assets/imgs/work/img-4.png" alt="Leads Dashboard" />
                                                    <Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                </div>
                                                <div className="card__content px-md-4 px-3">
                                                    <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                        <Link href="/work-single" className="card_title_link">
                                                            <p className="text-primary-1 mb-0 mb-md-2">WEB DEVELOPMENT</p>
                                                            <h3 className="fw-semibold">Leads Management Dashboard</h3>
                                                        </Link>
                                                        <Link href="/work-single" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <p className="text-300 mb-lg-auto mb-md-4 mb-3">User registration and login system with a backend dashboard to track and count leads. Simple, clean interface for managing client inquiries and entries efficiently.</p>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Personal Project</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Status</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Completed</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Django, Python, PostgreSQL</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 4 - FAST Education */}
                                        <div className="card-custom" data-index={4}>
                                            <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                                <div className="card__image-container zoom-img position-relative">
                                                    <img className="card__image" src="/assets/imgs/work/img-1.png" alt="FAST Education" />
                                                    <Link href="https://fast.edu.in" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                </div>
                                                <div className="card__content px-md-4 px-3">
                                                    <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                        <Link href="https://fast.edu.in" target="_blank" className="card_title_link">
                                                            <p className="text-primary-1 mb-0 mb-md-2">GRAPHIC DESIGN & UI/UX</p>
                                                            <h3 className="fw-semibold">FAST Education — Visual Design</h3>
                                                        </Link>
                                                        <Link href="https://fast.edu.in" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed banners, product images, YT Thumbnails, Insta Posts, promotional creatives and assisted in UI/UX design for fast.edu.in — an education platform based in Indore.</p>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
                                                        <p className="mb-0 card__description text-300 fs-6">FAST Education, Indore</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Duration</p>
                                                        <p className="mb-0 card__description text-300 fs-6">2022 — Present</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Photoshop, Illustrator, CorelDRAW, Canva</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 5 - Social Media */}
                                        <div className="card-custom" data-index={5}>
                                            <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                                <div className="card__image-container zoom-img position-relative">
                                                    <img className="card__image" src="/assets/imgs/work/img-2.png" alt="Social Media" />
                                                    <Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                </div>
                                                <div className="card__content px-md-4 px-3">
                                                    <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                        <Link href="/work-single" className="card_title_link">
                                                            <p className="text-primary-1 mb-0 mb-md-2">GRAPHIC DESIGN</p>
                                                            <h3 className="fw-semibold">Social Media Creatives</h3>
                                                        </Link>
                                                        <Link href="/work-single" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed thumbnails, Instagram posts, banners, mockups and product images for various clients — focusing on visual impact, brand consistency and engagement.</p>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Multiple Clients</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Duration</p>
                                                        <p className="mb-0 card__description text-300 fs-6">3+ Years</p>
                                                    </div>
                                                    <div className="d-md-flex content">
                                                        <p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
                                                        <p className="mb-0 card__description text-300 fs-6">Photoshop, Canva, Illustrator, AI Tools</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Static1 />
                    <Contact1 />

                </div>
            </Layout>
        </>
    );
}
