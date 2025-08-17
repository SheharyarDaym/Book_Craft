// "use client"
// import { useEffect, useState } from "react"
// import { BookOpen, Sparkles, ChevronDown } from "lucide-react"

// // ✅ Services list (added Paperback Formatting)
// const circularServices = [
//   {
//     id: "ebook-publishing",
//     title: "eBook Publishing",
//     path: "/ebook-publishing",
//   },
//   {
//     id: "book-editing",
//     title: "Book Editing",
//     path: "/book-editing",
//   },
//   {
//     id: "book-design",
//     title: "Book Design",
//     path: "/book-design",
//   },
//   {
//     id: "paperback-formatting",
//     title: "Paperback Formatting",
//     path: "/paperback-formating", // 🔗 your requested endpoint
//   },
// ]

// const handleNavClick = (e, targetId) => {
//   e.preventDefault()

//   const targetElement = document.getElementById(targetId)

//   if (targetElement) {
//     targetElement.scrollIntoView({ behavior: "smooth" })
//   } else {
//     if (targetId === "home") {
//       window.location.href = "/"
//     } else {
//       window.location.href = `/#${targetId}`
//     }
//   }
// }

// function Header() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false)

//   // ✅ Scroll to section if hash is present on load
//   useEffect(() => {
//     if (window.location.hash) {
//       const targetId = window.location.hash.replace("#", "")
//       const targetElement = document.getElementById(targetId)
//       if (targetElement) {
//         setTimeout(() => {
//           targetElement.scrollIntoView({ behavior: "smooth" })
//         }, 100)
//       }
//     }
//   }, [])

//   return (
//     <div>
//       <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-xl z-50 border-b border-gray-800 shadow-sm">
//         <div
//           onMouseLeave={() => setDropdownOpen(false)}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-400" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>

//             {/* Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
//               <a
//                 href="#home"
//                 onClick={(e) => handleNavClick(e, "home")}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
//               >
//                 Home
//               </a>

//               <a
//                 href="#portfolio"
//                 onClick={(e) => handleNavClick(e, "portfolio")}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
//               >
//                 Portfolio
//               </a>

//               {/* Services with Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen(true)}
//               >
//                 <a
//                   href="#services"
//                   onClick={(e) => handleNavClick(e, "services")}
//                   className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
//                 >
//                   Services <ChevronDown className="w-4 h-4 ml-1" />
//                 </a>

//                 {/* Dropdown */}
//                 {isDropdownOpen && (
//                   <div className="absolute top-full mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
//                     {circularServices.map((service) => (
//                       <a
//                         key={service.id}
//                         href={service.path}
//                         className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
//                       >
//                         <span>{service.title}</span>
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <a
//                 href="#about"
//                 onClick={(e) => handleNavClick(e, "about")}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
//               >
//                 About
//               </a>
//             </div>

//             {/* Contact */}
//             <div className="hidden lg:flex flex-col text-right text-sm">
//               <a
//                 href="https://wa.me/+923095204849"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header


















"use client"
import { useEffect, useState } from "react"
import { BookOpen, Sparkles, ChevronDown, Menu, X } from "lucide-react"

const circularServices = [
  { id: "ebook-publishing", title: "eBook Publishing", path: "/ebook-publishing" },
  { id: "book-editing", title: "Book Editing", path: "/book-editing" },
  { id: "book-design", title: "Book Design", path: "/book-design" },
  { id: "paperback-formatting", title: "Paperback Formatting", path: "/paperback-formatting" },
]

const handleNavClick = (e, targetId) => {
  e.preventDefault()
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  } else {
    if (targetId === "home") window.location.href = "/"
    else window.location.href = `/#${targetId}`
  }
}

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "")
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        setTimeout(() => targetElement.scrollIntoView({ behavior: "smooth" }), 100)
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

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                Portfolio
              </a>
              <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <a href="#services" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer">
                  Services <ChevronDown className="w-4 h-4 ml-1" />
                </a>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    {circularServices.map((service) => (
                      <a key={service.id} href={service.path} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                        <span>{service.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                About
              </a>
            </div>

            {/* Desktop Contact */}
            <div className="hidden lg:flex flex-col text-right text-sm">
              <a href="https://wa.me/+923095204849" target="_blank" rel="noopener noreferrer" className="mt-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-6 space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="block text-gray-300 hover:text-white font-medium">
              Home
            </a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="block text-gray-300 hover:text-white font-medium">
              Portfolio
            </a>
            {/* Services Accordion */}
            <button onClick={() => setMobileServicesOpen(!isMobileServicesOpen)} className="flex items-center justify-between w-full text-gray-300 hover:text-white font-medium">
              Services <ChevronDown className={`w-4 h-4 ml-2 transform transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isMobileServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {circularServices.map((service) => (
                  <a key={service.id} href={service.path} className="block text-gray-400 hover:text-white text-sm">
                    {service.title}
                  </a>
                ))}
              </div>
            )}
            <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="block text-gray-300 hover:text-white font-medium">
              About
            </a>
            <a href="https://wa.me/+923095204849" target="_blank" rel="noopener noreferrer" className="block mt-3 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Header
