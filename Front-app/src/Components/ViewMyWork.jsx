
// import { useState, useEffect } from "react"
// import {
//   BookOpen,
//   Search,
//   Heart,
//   Eye,
//   Calendar,
//   User,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Award,
//   Zap,
//   Sparkles,
// } from "lucide-react"

// const ViewMyWorkPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedProject, setSelectedProject] = useState(null)
//   const [isVisible, setIsVisible] = useState(false)
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   useEffect(() => {
//     setIsVisible(true)
//     window.scrollTo(0, 0)
//   }, [])

//   // Extended portfolio data
//   const portfolioProjects = [
//     {
//       id: 1,
//       title: "The Midnight Chronicles",
//       category: "fantasy",
//       author: "Sarah Mitchell",
//       year: "2024",
//       genre: "Dark Fantasy",
//       description:
//         "A haunting tale of magic and mystery set in a world where shadows come alive. This cover design captures the ethereal darkness and mystical elements that define the story.",
//       images: [
//         "/placeholder.svg?height=600&width=400",
//         "/placeholder.svg?height=600&width=400",
//         "/placeholder.svg?height=600&width=400",
//       ],
//       features: ["Hand-drawn illustrations", "Foil stamping", "Embossed lettering", "Matte finish"],
//       awards: ["Best Fantasy Cover 2024", "Reader's Choice Award"],
//       likes: 1247,
//       views: 8943,
//       tags: ["fantasy", "dark", "mystical", "illustrated"],
//       clientTestimonial:
//         "The cover exceeded all my expectations. It perfectly captures the dark fantasy essence of my book.",
//       projectType: "Complete Package",
//       timeline: "3 weeks",
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "Digital Marketing Mastery",
//       category: "business",
//       author: "Marcus Johnson",
//       year: "2024",
//       genre: "Business",
//       description:
//         "A comprehensive guide to modern digital marketing strategies. The clean, professional design reflects the authoritative and accessible nature of the content.",
//       images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
//       features: ["Clean typography", "Professional layout", "Infographic elements", "Print optimization"],
//       awards: ["Business Book Design Award"],
//       likes: 892,
//       views: 5432,
//       tags: ["business", "marketing", "professional", "modern"],
//       clientTestimonial: "Professional, clean, and exactly what I needed for my business book.",
//       projectType: "Cover Design",
//       timeline: "2 weeks",
//       featured: false,
//     },
//     {
//       id: 3,
//       title: "The Adventures of Luna",
//       category: "children",
//       author: "Emma Rodriguez",
//       year: "2024",
//       genre: "Children's Fiction",
//       description:
//         "A delightful children's story about a curious cat named Luna. The vibrant, playful design appeals to both children and parents while maintaining professional quality.",
//       images: [
//         "/placeholder.svg?height=600&width=400",
//         "/placeholder.svg?height=600&width=400",
//         "/placeholder.svg?height=600&width=400",
//       ],
//       features: ["Vibrant colors", "Character illustration", "Child-friendly fonts", "Durable binding"],
//       awards: ["Children's Book Illustration Award"],
//       likes: 1856,
//       views: 12847,
//       tags: ["children", "colorful", "playful", "illustration"],
//       clientTestimonial: "My daughter loves the cover! It's exactly what I envisioned for Luna's adventures.",
//       projectType: "Complete Package",
//       timeline: "4 weeks",
//       featured: true,
//     },
//     {
//       id: 4,
//       title: "Love in the City",
//       category: "romance",
//       author: "Isabella Chen",
//       year: "2024",
//       genre: "Contemporary Romance",
//       description:
//         "A modern romance set against the backdrop of city life. The elegant design combines urban elements with romantic touches.",
//       images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
//       features: ["Elegant typography", "City skyline", "Romantic elements", "Soft gradients"],
//       awards: [],
//       likes: 1129,
//       views: 7654,
//       tags: ["romance", "contemporary", "urban", "elegant"],
//       clientTestimonial: "Beautiful design that perfectly captures the romantic city vibe of my story.",
//       projectType: "Cover Design",
//       timeline: "2 weeks",
//       featured: false,
//     },
//     {
//       id: 5,
//       title: "Quantum Horizons",
//       category: "sci-fi",
//       author: "Dr. Alex Thompson",
//       year: "2024",
//       genre: "Science Fiction",
//       description:
//         "A hard science fiction novel exploring quantum mechanics and space travel. The design incorporates futuristic elements with scientific accuracy.",
//       images: [
//         "/placeholder.svg?height=600&width=400",
//         "/placeholder.svg?height=600&width=400",
//         "/placeholder.svg?height=600&width=400",
//       ],
//       features: ["Futuristic design", "Scientific accuracy", "Metallic effects", "3D rendering"],
//       awards: ["Sci-Fi Design Excellence"],
//       likes: 2341,
//       views: 15632,
//       tags: ["sci-fi", "futuristic", "space", "quantum"],
//       clientTestimonial: "The cover is absolutely stunning and scientifically inspiring.",
//       projectType: "Series Branding",
//       timeline: "5 weeks",
//       featured: true,
//     },
//     {
//       id: 6,
//       title: "The Shadow Detective",
//       category: "mystery",
//       author: "James Harrison",
//       year: "2024",
//       genre: "Mystery Thriller",
//       description:
//         "A gripping detective story filled with twists and turns. The atmospheric design creates intrigue and suspense.",
//       images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
//       features: ["Atmospheric design", "Noir elements", "Suspenseful imagery", "Premium finish"],
//       awards: [],
//       likes: 987,
//       views: 6543,
//       tags: ["mystery", "detective", "noir", "suspense"],
//       clientTestimonial: "The cover creates the perfect mysterious atmosphere for my thriller.",
//       projectType: "Cover Design",
//       timeline: "2 weeks",
//       featured: false,
//     },
//   ]

//   const categories = [
//     { id: "all", name: "All Projects", count: portfolioProjects.length },
//     { id: "featured", name: "Featured", count: portfolioProjects.filter((p) => p.featured).length },
//     { id: "fantasy", name: "Fantasy", count: portfolioProjects.filter((p) => p.category === "fantasy").length },
//     { id: "business", name: "Business", count: portfolioProjects.filter((p) => p.category === "business").length },
//     { id: "children", name: "Children", count: portfolioProjects.filter((p) => p.category === "children").length },
//     { id: "romance", name: "Romance", count: portfolioProjects.filter((p) => p.category === "romance").length },
//     { id: "sci-fi", name: "Sci-Fi", count: portfolioProjects.filter((p) => p.category === "sci-fi").length },
//     { id: "mystery", name: "Mystery", count: portfolioProjects.filter((p) => p.category === "mystery").length },
//   ]

//   const filteredProjects = portfolioProjects.filter((project) => {
//     const categoryMatch =
//       selectedCategory === "all" ||
//       (selectedCategory === "featured" && project.featured) ||
//       project.category === selectedCategory
//     const searchMatch =
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.genre.toLowerCase().includes(searchTerm.toLowerCase())
//     return categoryMatch && searchMatch
//   })

//   const openProjectModal = (project) => {
//     setSelectedProject(project)
//     setCurrentImageIndex(0)
//     document.body.style.overflow = "hidden"
//   }

//   const closeProjectModal = () => {
//     setSelectedProject(null)
//     document.body.style.overflow = "unset"
//   }

//   const nextImage = () => {
//     if (selectedProject) {
//       setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
//     }
//   }

//   const prevImage = () => {
//     if (selectedProject) {
//       setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
//     }
//   }

//   const stats = [
//     { label: "Projects Completed", value: "500+", icon: <BookOpen className="w-6 h-6" /> },
//     { label: "Happy Clients", value: "450+", icon: <Heart className="w-6 h-6" /> },
//     { label: "Awards Won", value: "25+", icon: <Award className="w-6 h-6" /> },
//     { label: "Years Experience", value: "5+", icon: <Star className="w-6 h-6" /> },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-400" />
//                 <Sparkles className="w-4 h-4 text-amber-300 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="/#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium">
//                 Back to Portfolio
//               </a>
//               <button className="relative group bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
//                 <span className="relative z-10">Start Project</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 relative overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5"></div>
//         <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div
//             className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
//               <Eye className="w-4 h-4 text-amber-400" />
//               <span className="text-slate-300 text-sm font-medium">Portfolio Showcase</span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//               My Creative
//               <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
//                 Portfolio
//               </span>
//             </h1>

//             <p className="text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
//               Explore my collection of book designs that have captivated readers, elevated authors' brands, and
//               transformed literary visions into visual masterpieces.
//             </p>
//           </div>

//           {/* Enhanced Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="group relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/70 hover:border-amber-500/30 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative z-10 text-center">
//                   <div className="text-amber-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
//                     {stat.icon}
//                   </div>
//                   <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//                     {stat.value}
//                   </div>
//                   <div className="text-slate-400 font-medium text-sm">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Search and Filter Section */}
//       <section className="py-12 px-4 relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
//             {/* Search Bar */}
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search projects, authors, or genres..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300"
//               />
//             </div>

//             {/* Category Filter */}
//             <div className="flex flex-wrap gap-3">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`group relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
//                     selectedCategory === category.id
//                       ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 shadow-2xl shadow-amber-500/25 transform scale-105"
//                       : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-800/70 hover:border-amber-500/30 hover:text-amber-400"
//                   }`}
//                 >
//                   <span className="relative z-10">
//                     {category.name} ({category.count})
//                   </span>
//                   {selectedCategory !== category.id && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden"
//                 onClick={() => openProjectModal(project)}
//               >
//                 {project.featured && (
//                   <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
//                     <Star className="w-3 h-3" />
//                     <span>Featured</span>
//                   </div>
//                 )}

//                 <div className="aspect-[3/4] relative overflow-hidden rounded-t-3xl">
//                   <img
//                     src={project.images[0] || "/placeholder.svg"}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">
//                     {project.year}
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                     <div className="flex items-center space-x-4 text-sm">
//                       <div className="flex items-center space-x-1">
//                         <Heart className="w-4 h-4 text-amber-400" />
//                         <span>{project.likes}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Eye className="w-4 h-4 text-amber-400" />
//                         <span>{project.views}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
//                       {project.title}
//                     </h3>
//                   </div>
//                   <p className="text-slate-400 mb-4">by {project.author}</p>
//                   <div className="flex items-center space-x-2 mb-4">
//                     <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-medium border border-amber-500/30">
//                       {project.genre}
//                     </span>
//                     <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
//                       {project.projectType}
//                     </span>
//                   </div>
//                   <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{project.description}</p>

//                   {project.awards.length > 0 && (
//                     <div className="mt-4 flex items-center space-x-2">
//                       <Award className="w-4 h-4 text-amber-400" />
//                       <span className="text-xs text-slate-400">{project.awards[0]}</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredProjects.length === 0 && (
//             <div className="text-center py-20">
//               <div className="text-slate-500 mb-6">
//                 <Search className="w-20 h-20 mx-auto" />
//               </div>
//               <h3 className="text-2xl font-semibold text-slate-300 mb-4">No projects found</h3>
//               <p className="text-slate-400">Try adjusting your search or filter criteria</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Project Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
//           <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="relative">
//               <button
//                 onClick={closeProjectModal}
//                 className="absolute top-6 right-6 z-10 bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full p-3 shadow-lg transition-all duration-200"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
//                 {/* Image Gallery */}
//                 <div className="space-y-4">
//                   <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
//                     <img
//                       src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
//                       alt={selectedProject.title}
//                       className="w-full h-full object-cover"
//                     />
//                     {selectedProject.images.length > 1 && (
//                       <>
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/90 hover:bg-slate-800 text-amber-400 rounded-full p-3 shadow-lg transition-all duration-200"
//                         >
//                           <ChevronLeft className="w-5 h-5" />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/90 hover:bg-slate-800 text-amber-400 rounded-full p-3 shadow-lg transition-all duration-200"
//                         >
//                           <ChevronRight className="w-5 h-5" />
//                         </button>
//                       </>
//                     )}
//                   </div>

//                   {selectedProject.images.length > 1 && (
//                     <div className="flex space-x-3">
//                       {selectedProject.images.map((image, index) => (
//                         <button
//                           key={index}
//                           onClick={() => setCurrentImageIndex(index)}
//                           className={`w-20 h-28 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
//                             index === currentImageIndex
//                               ? "border-amber-500 shadow-lg shadow-amber-500/25"
//                               : "border-slate-600 hover:border-amber-400"
//                           }`}
//                         >
//                           <img
//                             src={image || "/placeholder.svg"}
//                             alt={`${selectedProject.title} ${index + 1}`}
//                             className="w-full h-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Project Details */}
//                 <div className="space-y-6">
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
//                       {selectedProject.featured && (
//                         <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
//                           <Star className="w-4 h-4" />
//                           <span>Featured</span>
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex items-center space-x-4 text-slate-400 mb-4">
//                       <div className="flex items-center space-x-1">
//                         <User className="w-4 h-4" />
//                         <span>{selectedProject.author}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>{selectedProject.year}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600/50"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>

//                   {/* Project Stats */}
//                   <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-slate-700/50">
//                     <div className="text-center">
//                       <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//                         {selectedProject.likes}
//                       </div>
//                       <div className="text-sm text-slate-400">Likes</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//                         {selectedProject.views}
//                       </div>
//                       <div className="text-sm text-slate-400">Views</div>
//                     </div>
//                   </div>

//                   {/* Project Details */}
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-white mb-2">Project Type</h4>
//                       <p className="text-slate-400">{selectedProject.projectType}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white mb-2">Timeline</h4>
//                       <p className="text-slate-400">{selectedProject.timeline}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white mb-2">Features</h4>
//                       <ul className="space-y-2">
//                         {selectedProject.features.map((feature, index) => (
//                           <li key={index} className="text-slate-400 flex items-center">
//                             <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   {/* Awards */}
//                   {selectedProject.awards.length > 0 && (
//                     <div>
//                       <h4 className="font-semibold text-white mb-3">Awards & Recognition</h4>
//                       <div className="space-y-2">
//                         {selectedProject.awards.map((award, index) => (
//                           <div key={index} className="flex items-center space-x-2">
//                             <Award className="w-4 h-4 text-amber-400" />
//                             <span className="text-slate-400">{award}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Client Testimonial */}
//                   <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-6 rounded-2xl">
//                     <h4 className="font-semibold text-white mb-3">Client Testimonial</h4>
//                     <p className="text-slate-300 italic leading-relaxed">"{selectedProject.clientTestimonial}"</p>
//                     <p className="text-sm text-slate-400 mt-3">— {selectedProject.author}</p>
//                   </div>

//                   {/* CTA Button */}
//                   <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
//                     <Zap className="w-5 h-5" />
//                     <span>Start Similar Project</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <section className="py-24 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20"></div>
//         <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
//             <Sparkles className="w-4 h-4 text-amber-400" />
//             <span className="text-slate-300 text-sm font-medium">Ready to Begin?</span>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Ready to Create Your
//             <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//               Next Masterpiece?
//             </span>
//           </h2>

//           <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Join hundreds of satisfied authors who have transformed their books with stunning, professional designs that
//             captivate readers and drive success.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
//               <span className="relative z-10">Start Your Project</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//             <button className="group border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-full text-lg font-bold hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300">
//               Get Free Quote
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ViewMyWorkPage



