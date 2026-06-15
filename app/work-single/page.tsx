"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Contact1 from "@/components/sections/Contact1"
import Static1 from "@/components/sections/Static1"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Helper to turn names into safe folder slugs
const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/[()]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

// Faculty wise notes design data
// "count" = number of images you put inside that faculty's folder, named 1.jpg, 2.jpg, 3.jpg ...
// "subjects" = just a text list shown as description (no need to match filenames)
// avatar photo goes inside the same folder as "avatar.jpg"
const notesGallery = [
    {
        faculty: "CA Sarthak Jain",
        course: "CA Final & Intermediate",
        count: 17,
        subjects: [
            "Audit Drone Chart",
            "Audit Crush",
            "Audit Question Bank",
            "Audit MCQs",
            "Audit Brahmastra",
            "Advanced Accounts Brahmastra QB",
            "FR Explainer",
            "FR Builder",
            "FR Aimer",
            "FR Solver",
            "FR Sureshot Notes",
        ],
    },
    {
        faculty: "CA Riddhi Baghmare",
        course: "CA Final & Intermediate",
        count: 6,
        subjects: ["IDT Question Bank (Final)", "IDT Question Bank (Inter)"],
    },
    {
        faculty: "CA Shilpi Jain",
        course: "CA Intermediate",
        count: 18,
        subjects: ["IDT Concept Book", "IDT Question Bank", "IDT MCQ Book"],
    },
    {
        faculty: "CA Punit Agrawal",
        course: "CA Final",
        count: 6,
        subjects: ["IDT Concept Book", "IDT Question Bank"],
    },
    {
        faculty: "CA Rahul Satija",
        course: "CA Final & Intermediate",
        count: 9,
        subjects: ["DT Concept Book (Final)", "DT Question Bank (Final)", "DT Concept Book (Inter)", "DT Question Bank (Inter)"],
    },
    {
        faculty: "CA CFA Adish Jain",
        course: "CA Final",
        count: 5,
        subjects: ["AFM OutScanner", "AFM OutNote"],
    },
    {
        faculty: "CA Amit Sharma",
        course: "CA Intermediate",
        count: 9,
        subjects: ["Costing Notes", "FM-SM Concept Book", "FM-SM Question Bank", "FM-SM MCQ Book"],
    },
    {
        faculty: "CS Kirti Chaturvedi",
        course: "CS",
        count: 3,
        subjects: ["Law Concept Book", "Law Question Bank"],
    },
    {
        faculty: "CA Ayush Jain",
        course: "CA",
        count: 3,
        subjects: ["Audit Concept Book"],
    },
    {
        faculty: "CA Divyanshu Banzal",
        course: "CMA",
        count: 9,
        subjects: ["Audit Concept Book", "Entrepreniorship Concept Book"],
    },
    {
        faculty: "CS Poonam Makhija",
        course: "CS",
        count: 3,
        subjects: ["Question Bank"],
    },
];

// Social media creatives, category wise
// images named 1.jpg, 2.jpg ... inside each category's folder
const socialGallery = [
    { category: "Thumbnails", count: 16 },
    { category: "Instagram Posts", count: 4 },
    { category: "Banners", count: 3 },
    { category: "Product Images", count: 8 },
];

const gallerySwiperProps = {
    modules: [Autoplay, Pagination],
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3500 },
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
    },
};

// shadow style so gallery images don't blend into white background
const imageShadowStyle = { boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)" };

export default function WorkSingle() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            work details
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">Graphic Design & Educational Publishing Solutions</h3>
                                        <p className="text-300 fs-5 mb-0">A comprehensive graphic design and publication design service focused on creating high-quality educational and professional learning materials — from notes and concept books to question banks, MCQ books, handbooks and drone charts.</p>
                                    </div>
                                </div>

                                {/* Info Boxes */}
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Clients</p>
                                        <h6>CA / CMA / CS Faculties</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Duration</p>
                                        <h6>2022 — Present</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Services</p>
                                        <h6>Notes Design & Social Media</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>Photoshop, Illustrator, InDesign</h6>
                                    </div>
                                </div>

                                <img src="/assets/imgs/work/img-background.png" alt="" />

                                {/* Description */}
                                <div className="col-lg-10 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Description</h5>
                                    <p className="text-300">With extensive experience in designing notes, concept books, question banks, MCQ books, handbooks, drone charts and academic publications, the goal of this work has always been to transform complex educational content into visually appealing, easy-to-understand and student-friendly resources. Every project is designed keeping clarity, readability, branding consistency and print-ready quality at the center.</p>

                                    {/* Notes Design Gallery - Faculty wise */}
                                    <h5 className="fs-4 fw-bold text-center mt-8 mb-2">Notes Design — Faculty Wise Showcase</h5>
                                    <p className="text-300 text-center mb-6">A glimpse of professional study notes, concept books, question banks and MCQ books designed for CA, CMA and CS faculties — organized faculty wise.</p>

                                    {notesGallery.map((group, idx) => (
                                        <div className="mb-8" key={idx}>
                                            <div className="d-flex align-items-center gap-3 mb-1 p-3 bg-6 rounded-3">
    <img
        className="icon_65 avatar rounded-circle"
        src={`/assets/imgs/work/notes/${slugify(group.faculty)}/avatar.png`}
        alt={group.faculty}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
    />
    <div>
        <h6 className="fw-semibold mb-0">{group.faculty}</h6>
        <span className="text-primary-1 fs-7">{group.course}</span>
    </div>
</div>
                                            <p className="text-300 fs-7 mb-3">Includes: {group.subjects.join(", ")}</p>
                                            <Swiper {...gallerySwiperProps} className="gallery-swiper pb-6">
                                                <div className="swiper-wrapper">
                                                    {Array.from({ length: group.count }).map((_, i) => (
                                                        <SwiperSlide key={i}>
                                                            <div className="zoom-img rounded-3 overflow-hidden position-relative shadow" style={imageShadowStyle}>
                                                                <img
                                                                    className="w-100 rounded-3"
                                                                    src={`/assets/imgs/work/notes/${slugify(group.faculty)}/${i + 1}.jpg`}
                                                                    alt={`${group.faculty} - design ${i + 1}`}
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </div>
                                                <div className="swiper-pagination" />
                                            </Swiper>
                                        </div>
                                    ))}

                                    {/* Social Media Gallery - Category wise */}
                                    <h5 className="fs-4 fw-bold text-center mt-4 mb-2">Social Media Creatives — Category Wise Showcase</h5>
                                    <p className="text-300 text-center mb-6">Thumbnails, Instagram posts, banners, mockups and product images designed for multiple clients — focused on visual impact, brand consistency and audience engagement.</p>

                                    {socialGallery.map((group, idx) => (
                                        <div className="mb-8" key={idx}>
                                            <h6 className="fw-semibold mb-3">{group.category}</h6>
                                            <Swiper {...gallerySwiperProps} className="gallery-swiper pb-6">
                                                <div className="swiper-wrapper">
                                                    {Array.from({ length: group.count }).map((_, i) => (
                                                        <SwiperSlide key={i}>
                                                            <div className="zoom-img rounded-3 overflow-hidden position-relative shadow" style={imageShadowStyle}>
                                                                <img
                                                                    className="w-100 rounded-3"
                                                                    src={`/assets/imgs/work/social/${slugify(group.category)}/${i + 1}.jpg`}
                                                                    alt={`${group.category} ${i + 1}`}
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </div>
                                                <div className="swiper-pagination" />
                                            </Swiper>
                                        </div>
                                    ))}

                                    {/* Major Projects Summary */}
                                    <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-6">
                                        <h5 className="fs-5 fw-medium mb-2">Major Projects — Summary</h5>
                                        <p className="text-300 mb-0">A wide range of educational publications were designed for CA Final, CA Intermediate, CMA and CS courses — including concept books, question banks, MCQ books, drone charts, handbooks and exam-oriented study material — trusted by renowned faculties like CA Sarthak Jain, CA Riddhi Baghmare, CA Punit Agrawal, CA Rahul Satija, CA CFA Adish Jain, CA Shilpi Jain, CA Amit Sharma and CS Kirti, contributing to thousands of students' learning journeys across India.</p>
                                    </div>

                                    {/* Key Features */}
                                    <h5 className="fs-5 fw-medium mt-8">Key Features</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Fast Turnaround: <span className="text-300 fw-medium">Delivered high-quality designs within 48 hours for urgent educational and publishing requirements while maintaining professional standards.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Daily Progress Updates: <span className="text-300 fw-medium">Provided regular feedback, revisions and progress reports to ensure clients remain involved throughout the design process.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Print & Digital Ready Designs: <span className="text-300 fw-medium">Created optimized layouts suitable for both printing and digital distribution, ensuring seamless accessibility across platforms.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Academic Content Expertise: <span className="text-300 fw-medium">Specialized in educational publishing including concept books, question banks, MCQ compilations, revision notes, handbooks and exam-oriented study material.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Brand Consistency: <span className="text-300 fw-medium">Maintained consistent visual identity across complete book series, helping educators and institutions strengthen their brand presence.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Unlimited Design Support: <span className="text-300 fw-medium">Collaborated closely with faculties and publishers to implement feedback efficiently and achieve the desired outcome.</span>
                                            </p>
                                        </li>
                                    </ul>

                                    {/* Tools & Technologies */}
                                    <h5 className="fs-5 fw-medium mt-4">Tools & Technologies Used</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Design Software: <span className="text-300 fw-medium">Adobe Photoshop, Adobe Illustrator, Adobe InDesign, CorelDRAW, Canva.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Documentation & Publishing: <span className="text-300 fw-medium">Microsoft Word, PDF publishing tools and print production workflows.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                AI-Powered Design Tools: <span className="text-300 fw-medium">ChatGPT, Adobe Firefly and other AI image, content generation and automation tools.</span>
                                            </p>
                                        </li>
                                    </ul>

                                    {/* Design Highlights */}
                                    <h5 className="fs-5 fw-medium mt-8">Design Highlights</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Professional Publication Design: <span className="text-300 fw-medium">Created clean, structured and highly readable layouts tailored specifically for educational publishing and professional courses.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Student-Centric Approach: <span className="text-300 fw-medium">Focused on simplifying complex concepts through effective typography, visual hierarchy, infographics, charts and content organization.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                High-Quality Print Standards: <span className="text-300 fw-medium">Ensured every design met professional printing specifications with precise formatting, color management and production-ready files.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Modern Visual Presentation: <span className="text-300 fw-medium">Combined creativity with functionality to produce visually engaging educational materials that improve learning and retention.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Trusted by Leading Faculties: <span className="text-300 fw-medium">Successfully designed publications for renowned CA, CMA and CS faculties, contributing to thousands of students' learning journeys across India.</span>
                                            </p>
                                        </li>
                                    </ul>
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