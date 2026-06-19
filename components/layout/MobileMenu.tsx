'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
							<img src="/assets/imgs/footer-1/logo.svg" alt="infinia" />
							<span className="fs-4 ms-2 text-dark">Pintu Ahirwar</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<PerfectScrollbar className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li className="nav-item">
											<Link className="nav-link active" href="/">Home</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/services">Services</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/work">Portfolio</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/#contact">Contact</Link>
										</li>
									</ul>
								</nav>
							</div>

							{/* Contact Info */}
							<div className="mobile-header-border py-4">
								<p className="fs-6 fw-medium text-200 mb-4">I'm always excited to take on new projects and collaborate with innovative minds.</p>

								<div className="mb-3">
									<span className="text-400 fs-5">WhatsApp</span>
									<Link href="https://wa.me/917879766536?text=Hi%20Pintu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank">
										<p className="mb-0">+91 7879766536</p>
									</Link>
								</div>

								<div className="mb-3">
									<span className="text-400 fs-5">Phone Number</span>
									<Link href="tel:+917879766536">
										<p className="mb-0">+91 7879766536</p>
									</Link>
								</div>

								<div className="mb-3">
									<span className="text-400 fs-5">Email</span>
									<Link href="mailto:Mr.ahirwar7879@gmail.com">
										<p className="mb-0">Mr.ahirwar7879@gmail.com</p>
									</Link>
								</div>

								<div className="mb-3">
									<span className="text-400 fs-5">LinkedIn</span>
									<Link href="https://www.linkedin.com/in/pintu-ahirwar-7106a32b6/" target="_blank">
										<p className="mb-0">Pintu Ahirwar</p>
									</Link>
								</div>

								<div className="mb-3">
									<span className="text-400 fs-5">Address</span>
									<Link href="https://maps.google.com/maps?q=Indore,Madhya+Pradesh" target="_blank">
										<p className="mb-0">Indore, Madhya Pradesh, India</p>
									</Link>
								</div>
							</div>

							{/* Social Icons */}
							<div className="py-4">
								<p className="text-400 fs-5 mb-3">Social</p>
								<div className="d-flex gap-3">
									<Link href="https://www.instagram.com/pintu__ahirwar___/" target="_blank">
										<i className="ri-instagram-fill fs-18" />
									</Link>
									<Link href="https://www.linkedin.com/in/pintu-ahirwar-7106a32b6/" target="_blank">
										<i className="ri-linkedin-fill fs-18" />
									</Link>
									<Link href="https://github.com/PintuAhirwar" target="_blank">
										<i className="ri-github-fill fs-18" />
									</Link>
								</div>
							</div>

						</PerfectScrollbar>
					</div>
				</div>
			</div>
			<div 
            className={`mobile-menu-overlay ${isMobileMenu ? 'active' : ''}`} 
            onClick={handleMobileMenu}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.5)",
                zIndex: isMobileMenu ? 998 : -1,
                opacity: isMobileMenu ? 1 : 0,
                visibility: isMobileMenu ? "visible" : "hidden",
                transition: "opacity 0.3s ease"
            }}
        />
		</>
	)
}