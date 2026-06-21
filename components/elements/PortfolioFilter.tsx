'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import imagesLoaded from "imagesloaded"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		if (containerRef.current){
			imagesLoaded(containerRef.current, () => {
				isotope.current = new Isotope(containerRef. current!, {
					itemSelector: ".filter-item",
					percentPosition: true,
					masonry: {
						columnWidth: ".filter-item",
					},
				})
			})
		}

		// Cleanup on unmount
		return () => {
			isotope.current?.destroy()
		}
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("webdev")} onClick={handleFilterKeyChange("webdev")}>Web Dev</button>
						<button className={activeBtn("graphic")} onClick={handleFilterKeyChange("graphic")}>Graphic Design</button>
						<button className={activeBtn("notes")} onClick={handleFilterKeyChange("notes")}>Notes Design</button>
						<button className={activeBtn("ui")} onClick={handleFilterKeyChange("ui")}>UI/UX</button>
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6" ref = {containerRef}>
					<div className="grid-sizer" />
					{/* 1 - Classroom Frontend */}
					<div className="filter-item col-lg-6 col-12 webdev ui">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://classroom-frontend-24i8.onrender.com" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/classroomfrontend.png" alt="Classroom" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://classroom-frontend-24i8.onrender.com" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">Classroom — E-Learning Platform</h3>
									<p>Next.js Frontend — Course Selling Website</p>
								</Link>
								<Link href="https://classroom-frontend-24i8.onrender.com" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 2 - Classroom Backend */}
					<div className="filter-item col-lg-6 col-12 webdev">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://classroom-backend-dvcd.onrender.com/admin/" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/classroombackend.png" alt="Classroom Backend" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://classroom-backend-dvcd.onrender.com/admin/" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">Classroom — Backend Dashboard</h3>
									<p>Django REST API — Student & Course Management</p>
								</Link>
								<Link href="https://classroom-backend-dvcd.onrender.com/admin/" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 3 - CA Sarthak Jain Portfolio */}
					<div className="filter-item col-lg-6 col-12 webdev ui">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://sarthakjainca.com" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/sj.png" alt="Sarthak Jain CA" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://sarthakjainca.com" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">sarthakjainca.com</h3>
									<p>Portfolio Website — CA Sarthak Jain, Indore</p>
								</Link>
								<Link href="https://sarthakjainca.com" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 4 - Leads Dashboard */}
					<div className="filter-item col-lg-6 col-12 webdev">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/leadcode.png" alt="Leads Dashboard" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Leads Management Dashboard</h3>
									<p>User Register/Login — Lead Count & Backend Panel</p>
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 5 - FAST Education Design */}
					<div className="filter-item col-lg-6 col-12 graphic ui">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://fast.edu.in" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/fast.png" alt="FAST Education" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://fast.edu.in" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">FAST Education — Visual Design</h3>
									<p>Banners, Product Images, UI/UX — fast.edu.in</p>
								</Link>
								<Link href="https://fast.edu.in" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 6 - Social Media Design */}
					<div className="filter-item col-lg-6 col-12 graphic">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/socialmedia.png" alt="Social Media Design" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Social Media Creatives</h3>
									<p>Thumbnails, Insta Posts, Banners, Mockups & Product Images</p>
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 7 - Notes Design */}
					<div className="filter-item col-lg-6 col-12 notes">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/notes.png" alt="Notes Design" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Notes Design — 50+ Notes</h3>
									<p>Professional Study Notes — FAST Education, Indore</p>
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
