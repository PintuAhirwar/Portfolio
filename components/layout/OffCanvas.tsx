import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button><i className="ri-close-line" /></button>
				</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">Get in touch</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">I'm always excited to take on new projects and collaborate with innovative minds.</p>


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
					<div className="contact-list">
						<p className="text-400 fs-5 mb-2">Social</p>
						<div className="d-md-flex d-none gap-3">
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
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
		</>
	)
}