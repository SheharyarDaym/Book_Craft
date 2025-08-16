"use client"
import { useEffect } from "react"
import { BookOpen, Sparkles } from "lucide-react"

const handleNavClick = (e, targetId) => {
  e.preventDefault()

  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  } else {
    // navigate to home with hash
    if (targetId === "home") {
      window.location.href = "/"
    } else {
      window.location.href = `/#${targetId}`
    }
  }
}

function Header() {
  // ✅ Check for hash on load and scroll to section
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "")
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }, 100) // small delay ensures DOM is ready
      }
    }
  }, [])

  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-xl z-50 border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Home</a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Portfolio</a>
              <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Services</a>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">About</a>
            </div>

            {/* Contact */}
            <div className="hidden lg:flex flex-col text-right text-sm">
              <a href="mailto:shehayrar@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300" rel="noreferrer">
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
