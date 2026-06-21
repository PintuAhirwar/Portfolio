'use client'
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<string>("dark")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark"
        setTheme(savedTheme)
        document.documentElement.setAttribute("data-bs-theme", savedTheme)
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute("data-bs-theme", theme)
            localStorage.setItem("theme", theme)
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

    if (!mounted) {
        return (
            <div className="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80">
                <i className="bi theme-icon ri-sun-line text-warning" />
            </div>
        )
    }

    return (
        <div
            className="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80"
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
        >
            <i className={`bi theme-icon ${theme === "dark" ? "ri-sun-line text-warning" : "ri-contrast-2-line text-white"}`} />
        </div>
    )
}