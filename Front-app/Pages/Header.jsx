"use client"
import { useEffect, useState } from "react"
import { BookOpen, Sparkles, ChevronDown } from "lucide-react"

// Your services list
const circularServices = [
  {
    id: "ebook-publishing",
    title: "eBook Publishing",
    path: "/ebook-publishing",
  },
  {
    id: "book-editing",
    title: "Book Editing",
    path: "/book-editing",
  },
  {
    id: "book-design",
    title: "Book Design",
    path: "/book-design",
  },
]

const handleNavClick = (e, targetId) => {
  e.preventDefault()

  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  } else {
    if (targetId === "home") {
      window.location.href = "/"
    } else {
      window.location.href = `/#${targetId}`
    }
  }
}

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  // ✅ Scroll to section if hash is present on load
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "")
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-xl z-50 border-b border-gray-800 shadow-sm">
        <div  onMouseLeave={() => setDropdownOpen(false)} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <BookOpen className="w-10 h-10 text-amber-400" />
                <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                BookCraft Studio
              </span>
            </div>

            {/* Navigation Links */}
            <div  className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Home
              </a>

              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Portfolio
              </a>

              {/* Services with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                // onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
                >
                  Services <ChevronDown className="w-4 h-4 ml-1" />
                </a>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    {circularServices.map((service) => (
                      <a
                        key={service.id}
                        href={service.path}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        <span>{service.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                About
              </a>
            </div>

            {/* Contact */}
            <div className="hidden lg:flex flex-col text-right text-sm">
              <a
                href="mailto:shehayrar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
