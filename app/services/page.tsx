"use client"
import { useState } from "react"

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Contact1 from "@/components/sections/Contact1"
import Static1 from "@/components/sections/Static1"

export default function Services() {
    const [selectedService, setSelectedService] = useState("")

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-service-list pt-120 pb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            My Services
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            From Code to Creatives —
                                            <span className="text-300"> Everything You Need</span> Under One Roof
                                        </h3>
                                        <p className="text-300 fs-5">
                                            Full Stack Development, Graphic Design, Notes Design and UI/UX — <br />
                                            I bring technical and creative expertise to every project.
                                        </p>
                                    </div>
                                    <div className="card-scroll mt-8">
                                        <div className="cards">

                                            {/* 1 - Full Stack Development */}
                                            <div className="card-custom" data-index={0}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#contact" className="card_title_link" onClick={() => setSelectedService("Full Stack Development")}>
                                                            <h3 className="fw-semibold mb-2">Full Stack Development</h3>
                                                            <p className="mb-0">Backend. Frontend. Deployed.</p>
                                                        </Link>
                                                        <Link href="#contact" onClick={() => setSelectedService("Full Stack Development")} className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/fullstack.png" alt="" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Web Applications</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Building real-world web apps using Django & Next.js with REST APIs, authentication, and PostgreSQL database integration.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">API Development</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Designing and building structured REST APIs for seamless frontend-backend communication and third-party integrations.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Deployment</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Deploying frontend and backend separately on platforms like Vercel and Render for reliable, scalable hosting.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 2 - Graphic Design */}
                                            <div className="card-custom" data-index={1}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#contact" className="card_title_link" onClick={() => setSelectedService("Graphic Design")}>
                                                            <h3 className="fw-semibold mb-2">Graphic Design</h3>
                                                            <p className="mb-0">Bold. Creative. On-Brand.</p>
                                                        </Link>
                                                        <Link href="#contact" onClick={() => setSelectedService("Graphic Design")} className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/graphic.png" alt="" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Logo & Branding</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Creating memorable logos and brand identities using Photoshop, Illustrator and CorelDRAW — tailored to your business personality.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Social Media Creatives</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Designing eye-catching thumbnails, Instagram posts, banners, mockups and product images that drive engagement.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Print & Digital</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Producing print-ready and digital creatives — brochures, flyers, posters and promotional materials with professional finish.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 3 - Notes Design */}
                                            <div className="card-custom" data-index={2}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#contact" className="card_title_link" onClick={() => setSelectedService("Notes Design")}>
                                                            <h3 className="fw-semibold mb-2">Notes Design</h3>
                                                            <p className="mb-0">Clear. Structured. Memorable.</p>
                                                        </Link>
                                                        <Link href="#contact" onClick={() => setSelectedService("Notes Design")} className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/notes.png" alt="" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Study Notes</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Designed 50+ professional study notes with clean layouts, icons and visual hierarchy — making complex topics easy to understand and retain.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Visual Structure</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Using InDesign, Illustrator and Photoshop to create notes that are visually engaging, well-structured and print-ready.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Custom Notes</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Creating custom notes for coaching institutes, educators and students — tailored to their subject, style and branding.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 4 - UI/UX Design */}
                                            <div className="card-custom" data-index={3}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#contact" className="card_title_link" onClick={() => setSelectedService("UI/UX Design")}>
                                                            <h3 className="fw-semibold mb-2">UI/UX Design</h3>
                                                            <p className="mb-0">Intuitive. Clean. User-First.</p>
                                                        </Link>
                                                        <Link href="#contact" onClick={() => setSelectedService("UI/UX Design")} className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/uiux.png" alt="" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Interface Design</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Designing clean, modern interfaces for web and mobile — focused on clarity, usability and visual appeal.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">User Flow</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Mapping user journeys and designing intuitive flows that reduce friction and improve overall user satisfaction.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">Responsive Design</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Ensuring all designs work seamlessly across desktop, tablet and mobile devices with consistent visual quality.</p>
                                                        </div>
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
                    <Contact1 selectedService={selectedService} />
                </div>
            </Layout>
        </>
    );
}
