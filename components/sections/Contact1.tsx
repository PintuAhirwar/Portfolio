"use client"
import Link from "next/link"
import { useState } from "react"


export default function Contact1({ selectedService = "" }: { selectedService?: string }) {
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const data = new FormData(form)

		await fetch("https://formspree.io/f/xjgdpqro", {
			method: "POST",
			body: data,
			headers: { Accept: "application/json" }
		})

		setSubmitted(true)
	}
	return (
		<>

			<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
				<div className="container position-relative z-1">
					<h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
					<span className="fs-5 fw-medium text-200">
						I'm always excited to take on new projects and collaborate with innovative minds. If you
						<br />
						have a project in mind or just want to chat about design, feel free to reach out!
					</span>
					<div className="row mt-8">
						<div className="col-lg-4 d-flex flex-column">
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
    <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
        <i className="ri-whatsapp-line text-primary-1 fs-26" />
    </div>
    <div className="ps-3">
        <span className="text-400 fs-5">WhatsApp</span>
        <h6 className="mb-0">+91 7879766536</h6>
    </div>
    <Link href="https://wa.me/917879766536?text=Hi%20Pintu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-phone-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">Phone Number</span>
									<h6 className="mb-0">+91 7879766536</h6>
								</div>
								<Link href="tel:+917879766536" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-mail-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">Email</span>
									<h6 className="mb-0">Mr.ahirwar7879@gmail.com</h6>
								</div>
								<Link href="mailto:Mr.ahirwar7879@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-linkedin-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">LinkedIn</span>
									<h6 className="mb-0">pintu-ahirwar-7106a32b6</h6>
								</div>
								<Link href="https://www.linkedin.com/in/pintu-ahirwar-7106a32b6/" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-map-2-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">Address</span>
									<h6 className="mb-0">Indore, Madhya Pradesh, India</h6>
								</div>
								<Link href="https://maps.google.com/maps?q=Indore,Madhya+Pradesh" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
						<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3>Leave a messge</h3>
									{submitted ? (
										<div className="text-center py-5">
											<i className="ri-checkbox-circle-fill text-primary-1" style={{ fontSize: "60px" }} />
											<h4 className="mt-3 text-dark">Message Sent Successfully!</h4>
											<p className="text-400">Thank you for reaching out. I'll get back to you soon. 🙏</p>
											<button
												className="btn btn-gradient mt-3"
												onClick={() => setSubmitted(false)}
											>
												Send Another Message
											</button>
										</div>
									) : (
										<form onSubmit={handleSubmit}>
											<div className="row mt-3">
												<div className="col-md-6">
													<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary-1">*</span></label>
													<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="Pintu Ahirwar" required />
												</div>
												<div className="col-md-6">
													<label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary-1">*</span></label>
													<input type="email" className="form-control border rounded-3" id="email" name="email" placeholder="contact@gmail.com" required />
												</div>
												<div className="col-md-6">
													<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary-1">*</span></label>
													<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" />
												</div>
												<div className="col-md-6">
													<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary-1">*</span></label>
													<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." value={selectedService || ""}
    onChange={(e) => {}} required />
												</div>
												<div className="col-12">
													<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary-1">*</span></label>
													<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." required />
												</div>
												<div className="col-12">
													<button type="submit" className="btn btn-gradient mt-3">
														Send Message
														<i className="ri-arrow-right-up-line" />
													</button>
												</div>
											</div>
										</form>
									)}
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
					<div className="wow img-custom-anim-top">
						<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">pintu.design</h3>
					</div>
				</div>
			</section>

		</>
	)
}
