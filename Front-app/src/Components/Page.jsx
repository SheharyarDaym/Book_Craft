// // "use client"
// import { useState, useEffect } from "react"
// import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users,FileText,RotateCcw } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import img1 from '../assets/mockup_.png'
// import img2 from '../assets/mockup__.jpg'
// import img3 from '../assets/mockup_socialMedia.png'


// const services = [
//   {
//     icon: <BookOpen className="w-16 h-16" />,
//     title: "eBook Formatting",
//     description: "Professional formatting that makes your content shine across all digital platforms",
//     features: [
//       "KDP eBook Formatting",
//       "Print PDF Layout",
//       "Children's Book Formatting",
//       "Complex Layout Matching",
//       "Clickable TOC / Internal Links"
//     ]
//   },
//   {
//     icon: <Palette className="w-16 h-16" />,
//     title: "Book Cover Design",
//     description: "Eye-catching covers that grab attention and drive sales in any genre",
//     features: [
//       "KDP Paperback Covers",
//       "Kindle eBook Covers",
//       "Romance Covers",
//       "Recipe Book Covers",
//       "Fantasy / Fiction Covers",
//       "Children's Book Covers",
//       "Non-Fiction Covers"
//     ]
//   },
//   {
//     icon: <Zap className="w-16 h-16" />,
//     title: "Lead Magnet Design",
//     description: "Compelling freebies that capture leads and build your audience effectively",
//     features: [
//       "PDF Checklists",
//       "Coaching Workbooks",
//       "Clickable Email Freebies",
//       "Course Materials",
//       "Interactive Designs"
//     ]
//   },
//   {
//     icon: <RotateCcw className="w-16 h-16" />,
//     title: "Conversion Services",
//     description: "Seamless format transitions that preserve quality across all platforms",
//     features: [
//       "PDF to KPF / Kindle Format",
//       "EPUB / MOBI Conversion",
//       "Layout Adjustment for Kindle",
//       "Print-to-Digital Transition"
//     ]
//   }
// ];



// const BookDesignerPortfolio = () => {
//   const navigate = useNavigate()
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("all")

//   useEffect(() => {
//     setIsVisible(true)
    
//     // Add smooth scrolling behavior to the entire document
//     document.documentElement.style.scrollBehavior = 'smooth'
    
//     // Cleanup function
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto'
//     }
//   }, [])

//   // Sample portfolio data
//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Click Not Code",
//       category: "fantasy",
//       image: img1,
//       description: "Epic fantasy novel cover design with mystical elements",
//       year: "2024",
//     },
//     {
//       id: 2,
//       title: "Your Ultimate Skylight Installation",
//       category: "business",
//       image: img2,
//       description: "Clean, professional design for business literature",
//       year: "2024",
//     },
//     {
//       id: 3,
//       title: "The Reishi Sleep System",
//       category: "children",
//       image: img3,
//       description: "Colorful and playful design for young readers",
//       year: "2023",
//     }
//     // {
//     //   id: 4,
//     //   title: "Mystery in the Shadows",
//     //   category: "mystery",
//     //   image: img4,
//     //   description: "Dark, atmospheric design for thriller novels",
//     //   year: "2024",
//     // },
//     // {
//     //   id: 5,
//     //   title: "Romance Under Stars",
//     //   category: "romance",
//     //   image: img5,
//     //   description: "Elegant and romantic cover design",
//     //   year: "2023",
//     // },
//     // {
//     //   id: 6,
//     //   title: "Science Tomorrow",
//     //   category: "sci-fi",
//     //   image: img6,
//     //   description: "Futuristic design for science fiction",
//     //   year: "2024",
//     // },
//   ]

//   const categories = [
//     { id: "all", name: "All Projects", count: portfolioItems.length },
//     // { id: "all", name: "Fantasy", count: portfolioItems.length },
//     { id: "fantasy", name: "Fantasy", count: portfolioItems.filter((item) => item.category === "fantasy").length },
//     { id: "business", name: "Business", count: portfolioItems.filter((item) => item.category === "business").length },
//     { id: "children", name: "Children", count: portfolioItems.filter((item) => item.category === "children").length },
//     { id: "mystery", name: "Mystery", count: portfolioItems.filter((item) => item.category === "mystery").length },
//     { id: "romance", name: "Romance", count: portfolioItems.filter((item) => item.category === "romance").length },
//     { id: "sci-fi", name: "Sci-Fi", count: portfolioItems.filter((item) => item.category === "sci-fi").length },
//   ]

//   const filteredItems =
//     activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   // const services = [
//   //   {
//   //     icon: <Palette className="w-10 h-10" />,
//   //     title: "Cover Design",
//   //     description: "Eye-catching book covers that capture your story's essence and attract readers at first glance",
//   //     features: ["Custom Illustrations", "Typography Design", "Print & Digital Ready"],
//   //   },
//   //   {
//   //     icon: <BookOpen className="w-10 h-10" />,
//   //     title: "Interior Layout",
//   //     description: "Professional typography and layout design for both print and digital publishing formats",
//   //     features: ["Chapter Design", "Typography", "Formatting"],
//   //   },
//   //   {
//   //     icon: <Zap className="w-10 h-10" />,
//   //     title: "Brand Identity",
//   //     description: "Complete author branding including logos, marketing materials, and cohesive series design",
//   //     features: ["Logo Design", "Marketing Kit", "Series Branding"],
//   //   },
//   // ]

//   const stats = [
//     { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
//     { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
//     { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
//     { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
//   ]

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault()
//     const element = document.getElementById(targetId)
//     if (element) {
//       element.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest'
//       })
//     }
//   }

//   return (
//     <div 
//       className="min-h-screen bg-slate-900 relative"
//       style={{
//         background: `
//           radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.05) 0%, transparent 50%),
//           radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.05) 0%, transparent 50%),
//           radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.03) 0%, transparent 50%),
//           linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
//         `,
//         willChange: 'scroll-position'
//       }}
//     >
//       {/* Fixed Background Layer */}
//       <div className="fixed inset-0 bg-slate-900 -z-10"></div>
      
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/98 backdrop-blur-xl z-50 border-b border-slate-700/50">
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
//               <a
//                 href="#home"
//                 onClick={(e) => handleNavClick(e, 'home')}
//                 className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#portfolio"
//                 onClick={(e) => handleNavClick(e, 'portfolio')}
//                 className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium"
//               >
//                 Portfolio
//               </a>
//               <a
//                 href="#services"
//                 onClick={(e) => handleNavClick(e, 'services')}
//                 className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium"
//               >
//                 Services
//               </a>
//               <a
//                 href="#about"
//                 onClick={(e) => handleNavClick(e, 'about')}
//                 className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium"
//               >
//                 About
//               </a>
//               {/* <button className="relative group bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
//                 <span className="relative z-10">Get Started</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
//         {/* Optimized Background Elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 will-change-transform"></div>
//         <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl will-change-transform"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl will-change-transform"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div
//             className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
//               <Sparkles className="w-4 h-4 text-amber-400" />
//               <span className="text-slate-300 text-sm font-medium">Premium Book Design Services</span>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
//               Crafting Stories Into
//               <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
//                 Visual Masterpieces
//               </span>
//             </h1>

//             <p className="text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
//               Transform your literary vision into stunning book designs that captivate readers, enhance your brand, and
//               elevate your publishing success to new heights.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//               <button onClick={() => navigate('/ViewMyWork')}
//               className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 overflow-hidden">
//                 <span className="relative z-10">View My Work</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//               {/* <button className="group border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-full text-lg font-bold hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300 flex items-center space-x-3">
//                 <Eye className="w-5 h-5" />
//                 <span>Learn More</span>
//               </button> */}
//             </div>
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
//                     {stat.number}
//                   </div>
//                   <div className="text-slate-400 font-medium">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       {/* <section id="services" className="py-24 px-4 relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-transparent will-change-transform"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-6">
//               <Palette className="w-4 h-4 text-amber-400" />
//               <span className="text-slate-300 text-sm font-medium">Professional Services</span>
//             </div>
//             <h2 className="text-5xl font-bold text-white mb-6">What I Create</h2>
//             <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive design solutions that transform your manuscript into a market-ready masterpiece
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative p-10 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="relative z-10">
//                   <div className="text-amber-400 mb-8 group-hover:scale-110 transition-transform duration-300 flex justify-center">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
//                   <p className="text-slate-400 leading-relaxed mb-6 text-center">{service.description}</p>
//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center space-x-3 text-slate-300">
//                         <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//       <section id="services" className="py-24 px-4 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-transparent will-change-transform"></div>
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-6">
//             <Sparkles className="w-4 h-4 text-amber-400" />
//             <span className="text-slate-300 text-sm font-medium">Professional Services</span>
//           </div>
//           <h2 className="text-5xl font-bold text-white mb-6">What I Create</h2>
//           <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
//             Comprehensive design solutions that transform your manuscript into a market-ready masterpiece
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group relative p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-500 transform hover:scale-105"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
//                 <p className="text-slate-400 leading-relaxed mb-6 text-center text-sm">{service.description}</p>
//                 <div className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center space-x-3 text-slate-300">
//                       <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
//                       <span className="text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-24 px-4 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-6">
//               <Eye className="w-4 h-4 text-amber-400" />
//               <span className="text-slate-300 text-sm font-medium">Featured Work</span>
//             </div>
//             <h2 className="text-5xl font-bold text-white mb-6">Portfolio Showcase</h2>
//             <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
//               Discover my latest book design projects spanning multiple genres and publishing formats
//             </p>
//           </div>

//           {/* Enhanced Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveFilter(category.id)}
//                 className={`group relative px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
//                   activeFilter === category.id
//                     ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 shadow-2xl shadow-amber-500/25 transform scale-105"
//                     : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-800/70 hover:border-amber-500/30 hover:text-amber-400"
//                 }`}
//               >
              

//                 <span className="relative z-10">
//                   {category.name} ({category.count})
//                 </span>
//                 {activeFilter !== category.id && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Enhanced Portfolio Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {filteredItems.map((item) => (
//         <div
//           key={item.id}
//           className="group relative overflow-hidden rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-500 transform hover:scale-105"
//         >
//           <div className="aspect-[3/4] relative overflow-hidden">
//             <img
//               src={item.image || "/placeholder.svg"}
//               alt={item.title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm text-amber-400 px-2 py-0.5 rounded-full text-xs font-semibold">
//               {item.year}
//             </div>
//           </div>
//           <div className="p-3">
//             <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
//               {item.title}
//             </h3>
//             <p className="text-slate-400 text-xs leading-relaxed mb-2">{item.description}</p>
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
//                 {item.category}
//               </span>
//               {/* <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" /> */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section id="about" className="py-24 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 will-change-transform"></div>
//         <div className="absolute top-0 left-0 w-full h-full bg-slate-800/30"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
//             <Sparkles className="w-4 h-4 text-amber-400" />
//             <span className="text-slate-300 text-sm font-medium">Ready to Begin?</span>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Let's Create Your
//             <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//               Next Bestseller
//             </span>
//           </h2>

//           <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Transform your manuscript into a visual masterpiece that captures attention, builds your brand, and drives
//             sales in today's competitive market.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button onClick={() => navigate('/StartYourProject')}
//             className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
//               <span className="relative z-10">Start Your Project</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//             {/* <button className="group border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-full text-lg font-bold hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300">
//               View Pricing Plans
//             </button> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default BookDesignerPortfolio

























// import { useState, useEffect } from "react"
// import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users, FileText, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"

// const services = [
//   {
//     icon: <BookOpen className="w-16 h-16" />,
//     title: "eBook Formatting",
//     description: "Professional formatting that makes your content shine across all digital platforms",
//     features: [
//       "KDP eBook Formatting",
//       "Print PDF Layout",
//       "Children's Book Formatting",
//       "Complex Layout Matching",
//       "Clickable TOC / Internal Links"
//     ]
//   },
//   {
//     icon: <Palette className="w-16 h-16" />,
//     title: "Book Cover Design",
//     description: "Eye-catching covers that grab attention and drive sales in any genre",
//     features: [
//       "KDP Paperback Covers",
//       "Kindle eBook Covers",
//       "Romance Covers",
//       "Recipe Book Covers",
//       "Fantasy / Fiction Covers",
//       "Children's Book Covers",
//       "Non-Fiction Covers"
//     ]
//   },
//   {
//     icon: <Zap className="w-16 h-16" />,
//     title: "Lead Magnet Design",
//     description: "Compelling freebies that capture leads and build your audience effectively",
//     features: [
//       "PDF Checklists",
//       "Coaching Workbooks",
//       "Clickable Email Freebies",
//       "Course Materials",
//       "Interactive Designs"
//     ]
//   },
//   {
//     icon: <RotateCcw className="w-16 h-16" />,
//     title: "Conversion Services",
//     description: "Seamless format transitions that preserve quality across all platforms",
//     features: [
//       "PDF to KPF / Kindle Format",
//       "EPUB / MOBI Conversion",
//       "Layout Adjustment for Kindle",
//       "Print-to-Digital Transition"
//     ]
//   }
// ];

// const BookDesignerPortfolio = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [currentSlide, setCurrentSlide] = useState(0)

//   // Sample book images for slideshow
//   const slideshowImages = [
//     {
//       id: 1,
//       title: "The Ultimate Wrestling Coloring Book",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       category: "Coloring Book"
//     },
//     {
//       id: 2,
//       title: "Mudfall - Earth Hunter Jr.",
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=edges",
//       category: "Fantasy"
//     },
//     {
//       id: 3,
//       title: "The New Derivative",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       category: "Business"
//     },
//     {
//       id: 4,
//       title: "The Adventure of Little Feet",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       category: "Children's"
//     },
//     {
//       id: 5,
//       title: "Juicing for Authentic Balance",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=edges",
//       category: "Health & Wellness"
//     }
//   ]

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Click Not Code",
//       category: "fantasy",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       description: "Epic fantasy novel cover design with mystical elements",
//       year: "2024",
//     },
//     {
//       id: 2,
//       title: "Your Ultimate Skylight Installation",
//       category: "business",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       description: "Clean, professional design for business literature",
//       year: "2024",
//     },
//     {
//       id: 3,
//       title: "The Reishi Sleep System",
//       category: "children",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       description: "Colorful and playful design for young readers",
//       year: "2023",
//     }
//   ]

//   const categories = [
//     { id: "all", name: "All Projects", count: portfolioItems.length },
//     { id: "fantasy", name: "Fantasy", count: portfolioItems.filter((item) => item.category === "fantasy").length },
//     { id: "business", name: "Business", count: portfolioItems.filter((item) => item.category === "business").length },
//     { id: "children", name: "Children", count: portfolioItems.filter((item) => item.category === "children").length },
//     { id: "mystery", name: "Mystery", count: 0 },
//     { id: "romance", name: "Romance", count: 0 },
//     { id: "sci-fi", name: "Sci-Fi", count: 0 },
//   ]

//   const filteredItems = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   const stats = [
//     { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
//     { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
//     { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
//     { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
//   ]

//   useEffect(() => {
//     setIsVisible(true)
//     document.documentElement.style.scrollBehavior = 'smooth'
    
//     // Auto-advance slideshow
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
//     }, 3200) // was 4000

//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto'
//       clearInterval(interval)
//     }
//   }, [])

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault()
//     const element = document.getElementById(targetId)
//     if (element) {
//       element.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest'
//       })
//     }
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
//   }

//   const handleViewWork = () => {
//     document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleStartProject = () => {
//     document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
//   }

//   const handleViewWork = () => {
//     document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleStartProject = () => {
//     document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <div 
//       className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden"
//     >
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-600" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Home</a>
//               <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Portfolio</a>
//               <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Services</a>
//               <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">About</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Slideshow */}
//       <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
//               <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-8">
//                 <Sparkles className="w-4 h-4 text-amber-600" />
//                 <span className="text-amber-800 text-sm font-medium">Professional Book Design Services</span>
//               </div>

//               <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
//                 Self publishing has
//                 <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">
//                   never been easier
//                 </span>
//               </h1>

//               <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
//                 From editing and design to printing, distribution, and marketing, our experts help you through every step of the process.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mb-12">
//                 <button 
//                   onClick={handleViewWork}
//                   className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//                 >
//                   <span>Browse self publishing</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button 
//                   onClick={handleStartProject}
//                   className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
//                 >
//                   <Eye className="w-5 h-5" />
//                   <span>Learn More</span>
//                 </button>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="text-amber-600 mb-2 flex justify-center">{stat.icon}</div>
//                     <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
//                     <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Slideshow */}
//             <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
//               <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50"></div>
                
//                 {/* Slideshow Container */}
//                 <div className="relative z-10">
//                   <div className="flex justify-center items-center space-x-8 mb-8">
//                     {slideshowImages.slice(currentSlide, currentSlide + 3).concat(
//                       currentSlide + 3 > slideshowImages.length 
//                         ? slideshowImages.slice(0, (currentSlide + 3) - slideshowImages.length)
//                         : []
//                     ).slice(0, 3).map((book, index) => (
//                       <div 
//                         key={book.id} 
//                         className={`transition-all duration-700 transform ${
//                           index === 1 
//                             ? 'scale-110 z-20 shadow-2xl' 
//                             : index === 0 
//                               ? 'scale-90 -rotate-12 opacity-70' 
//                               : 'scale-90 rotate-12 opacity-70'
//                         }`}
//                       >
//                         <div className="bg-white rounded-lg shadow-xl overflow-hidden">
//                           <img 
//                             src={book.image} 
//                             alt={book.title}
//                             className="w-32 h-48 object-cover"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Book Title and Category */}
//                   <div className="text-center mb-6">
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">
//                       {slideshowImages[currentSlide]?.title}
//                     </h3>
//                     <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
//                       {slideshowImages[currentSlide]?.category}
//                     </span>
//                   </div>

//                   {/* Navigation Controls */}
//                   <div className="flex justify-center items-center space-x-4">
//                     <button 
//                       onClick={prevSlide}
//                       className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50"
//                     >
//                       <ChevronLeft className="w-5 h-5 text-slate-700" />
//                     </button>
                    
//                     <div className="flex space-x-2">
//                       {slideshowImages.map((_, index) => (
//                         <button
//                           key={index}
//                           onClick={() => setCurrentSlide(index)}
//                           className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                             index === currentSlide ? 'bg-amber-600' : 'bg-slate-300'
//                           }`}
//                         />
//                       ))}
//                     </div>

//                     <button 
//                       onClick={nextSlide}
//                       className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50"
//                     >
//                       <ChevronRight className="w-5 h-5 text-slate-700" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-24 px-4 relative bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <Sparkles className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Professional Services</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">What We Create</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive design solutions that transform your manuscript into a market-ready masterpiece
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-300 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="relative z-10">
//                   <div className="text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{service.title}</h3>
//                   <p className="text-slate-600 leading-relaxed mb-6 text-center text-sm">{service.description}</p>
//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center space-x-3 text-slate-700">
//                         <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-24 px-4 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <Eye className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Featured Work</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">Portfolio Showcase</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our latest book design projects spanning multiple genres and publishing formats
//             </p>
//           </div>

//           {/* Enhanced Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveFilter(category.id)}
//                 className={`group relative px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
//                   activeFilter === category.id
//                     ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 shadow-2xl shadow-amber-500/25 transform scale-105"
//                     : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-800/70 hover:border-amber-500/30 hover:text-amber-400"
//                 }`}
//               >
              

//                 <span className="relative z-10">
//                   {category.name} ({category.count})
//                 </span>
//                 {activeFilter !== category.id && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Enhanced Portfolio Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {filteredItems.map((item) => (
//         <div
//           key={item.id}
//           className="group relative overflow-hidden rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-500 transform hover:scale-105"
//         >
//           <div className="aspect-[3/4] relative overflow-hidden">
//             <img
//               src={item.image || "/placeholder.svg"}
//               alt={item.title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm text-amber-400 px-2 py-0.5 rounded-full text-xs font-semibold">
//               {item.year}
//             </div>
//           </div>
//           <div className="p-3">
//             <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
//               {item.title}
//             </h3>
//             <p className="text-slate-400 text-xs leading-relaxed mb-2">{item.description}</p>
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
//                 {item.category}
//               </span>
//               {/* <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" /> */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section id="about" className="py-24 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 will-change-transform"></div>
//         <div className="absolute top-0 left-0 w-full h-full bg-slate-800/30"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
//             <Sparkles className="w-4 h-4 text-amber-400" />
//             <span className="text-slate-300 text-sm font-medium">Ready to Begin?</span>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Let's Create Your
//             <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//               Next Bestseller
//             </span>
//           </h2>

//           <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Transform your manuscript into a visual masterpiece that captures attention, builds your brand, and drives
//             sales in today's competitive market.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button onClick={() => navigate('/StartYourProject')}
//             className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
//               <span className="relative z-10">Start Your Project</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//             {/* <button className="group border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-full text-lg font-bold hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300">
//               View Pricing Plans
//             </button> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default BookDesignerPortfolio

































// import { useState, useEffect } from "react"
// import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users, FileText, RotateCcw, ChevronLeft, ChevronRight, Book, Library } from "lucide-react"

// const services = [
//   {
//     icon: <BookOpen className="w-16 h-16" />,
//     title: "eBook Formatting",
//     description: "Professional formatting that makes your content shine across all digital platforms",
//     features: [
//       "KDP eBook Formatting",
//       "Print PDF Layout",
//       "Children's Book Formatting",
//       "Complex Layout Matching",
//       "Clickable TOC / Internal Links"
//     ]
//   },
//   {
//     icon: <Palette className="w-16 h-16" />,
//     title: "Book Cover Design",
//     description: "Eye-catching covers that grab attention and drive sales in any genre",
//     features: [
//       "KDP Paperback Covers",
//       "Kindle eBook Covers",
//       "Romance Covers",
//       "Recipe Book Covers",
//       "Fantasy / Fiction Covers",
//       "Children's Book Covers",
//       "Non-Fiction Covers"
//     ]
//   },
//   {
//     icon: <Zap className="w-16 h-16" />,
//     title: "Lead Magnet Design",
//     description: "Compelling freebies that capture leads and build your audience effectively",
//     features: [
//       "PDF Checklists",
//       "Coaching Workbooks",
//       "Clickable Email Freebies",
//       "Course Materials",
//       "Interactive Designs"
//     ]
//   },
//   {
//     icon: <RotateCcw className="w-16 h-16" />,
//     title: "Conversion Services",
//     description: "Seamless format transitions that preserve quality across all platforms",
//     features: [
//       "PDF to KPF / Kindle Format",
//       "EPUB / MOBI Conversion",
//       "Layout Adjustment for Kindle",
//       "Print-to-Digital Transition"
//     ]
//   }
// ];

// const BookDesignerPortfolio = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [heroSlide, setHeroSlide] = useState(0)
//   const [floatingSlide, setFloatingSlide] = useState(0)
//   const [infiniteSlide, setInfiniteSlide] = useState(0)

//   // Expanded book collection with more realistic book covers
//   const bookCollection = [
//     {
//       id: 1,
//       title: "The Ultimate Wrestling Coloring Book",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       category: "Coloring Book",
//       genre: "Entertainment"
//     },
//     {
//       id: 2,
//       title: "Mudfall - Earth Hunter Jr.",
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=edges",
//       category: "Fantasy",
//       genre: "Fiction"
//     },
//     {
//       id: 3,
//       title: "The New Derivative",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       category: "Business",
//       genre: "Non-Fiction"
//     },
//     {
//       id: 4,
//       title: "The Adventure of Little Feet",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       category: "Children's",
//       genre: "Children"
//     },
//     {
//       id: 5,
//       title: "Juicing for Authentic Balance",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=edges",
//       category: "Health & Wellness",
//       genre: "Lifestyle"
//     },
//     {
//       id: 6,
//       title: "Mystery of the Midnight Garden",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
//       category: "Mystery",
//       genre: "Fiction"
//     },
//     {
//       id: 7,
//       title: "Love in the Digital Age",
//       image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&crop=edges",
//       category: "Romance",
//       genre: "Fiction"
//     },
//     {
//       id: 8,
//       title: "Galactic Warriors",
//       image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=edges",
//       category: "Sci-Fi",
//       genre: "Fiction"
//     },
//     {
//       id: 9,
//       title: "Kitchen Mastery Guide",
//       image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop&crop=edges",
//       category: "Cookbook",
//       genre: "Lifestyle"
//     },
//     {
//       id: 10,
//       title: "Mindful Meditation Practices",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
//       category: "Self-Help",
//       genre: "Wellness"
//     },
//     {
//       id: 11,
//       title: "Digital Marketing Mastery",
//       image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop&crop=edges",
//       category: "Business",
//       genre: "Marketing"
//     },
//     {
//       id: 12,
//       title: "The Art of Photography",
//       image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=600&fit=crop&crop=edges",
//       category: "Art",
//       genre: "Creative"
//     },
//     {
//       id: 13,
//       title: "Healthy Living Guide",
//       image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=600&fit=crop&crop=edges",
//       category: "Health",
//       genre: "Lifestyle"
//     },
//     {
//       id: 14,
//       title: "Space Adventures",
//       image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=edges",
//       category: "Science Fiction",
//       genre: "Fiction"
//     },
//     {
//       id: 15,
//       title: "Cryptocurrency Explained",
//       image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop&crop=edges",
//       category: "Finance",
//       genre: "Education"
//     },
//     {
//       id: 16,
//       title: "Modern Architecture",
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=600&fit=crop&crop=edges",
//       category: "Architecture",
//       genre: "Design"
//     },
//     {
//       id: 17,
//       title: "Yoga for Beginners",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
//       category: "Fitness",
//       genre: "Health"
//     },
//     {
//       id: 18,
//       title: "Travel Photography",
//       image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop&crop=edges",
//       category: "Photography",
//       genre: "Travel"
//     },
//     {
//       id: 11,
//       title: "Cryptocurrency for Beginners",
//       image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop&crop=edges",
//       category: "Finance",
//       genre: "Education"
//     },
//     {
//       id: 12,
//       title: "Digital Marketing Secrets",
//       image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop&crop=edges",
//       category: "Marketing",
//       genre: "Business"
//     },
//     {
//       id: 13,
//       title: "The Art of Photography",
//       image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=600&fit=crop&crop=edges",
//       category: "Art",
//       genre: "Creative"
//     },
//     {
//       id: 14,
//       title: "Healthy Living Guide",
//       image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=600&fit=crop&crop=edges",
//       category: "Health",
//       genre: "Lifestyle"
//     },
//     {
//       id: 15,
//       title: "Space Adventures",
//       image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=edges",
//       category: "Science Fiction",
//       genre: "Fiction"
//     }
//   ]

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Click Not Code",
//       category: "fantasy",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       description: "Epic fantasy novel cover design with mystical elements",
//       year: "2024",
//     },
//     {
//       id: 2,
//       title: "Your Ultimate Skylight Installation",
//       category: "business",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       description: "Clean, professional design for business literature",
//       year: "2024",
//     },
//     {
//       id: 3,
//       title: "The Reishi Sleep System",
//       category: "children",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       description: "Colorful and playful design for young readers",
//       year: "2023",
//     },
//     {
//       id: 4,
//       title: "Midnight in the Library",
//       category: "mystery",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
//       description: "Intriguing mystery novel with atmospheric design",
//       year: "2024",
//     }
//   ]

//   const categories = [
//     { id: "all", name: "All Projects", count: portfolioItems.length },
//     { id: "fantasy", name: "Fantasy", count: portfolioItems.filter((item) => item.category === "fantasy").length },
//     { id: "business", name: "Business", count: portfolioItems.filter((item) => item.category === "business").length },
//     { id: "children", name: "Children", count: portfolioItems.filter((item) => item.category === "children").length },
//     { id: "mystery", name: "Mystery", count: portfolioItems.filter((item) => item.category === "mystery").length },
//     { id: "romance", name: "Romance", count: portfolioItems.filter((item) => item.category === "romance").length },
//     { id: "sci-fi", name: "Sci-Fi", count: portfolioItems.filter((item) => item.category === "sci-fi").length },
//   ]

//   const filteredItems = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   const stats = [
//     { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
//     { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
//     { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
//     { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
//   ]

//   useEffect(() => {
//     setIsVisible(true)
//     document.documentElement.style.scrollBehavior = 'smooth'
    
//     // Auto-advance main slideshow
//     const mainInterval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bookCollection.length)
//     }, 2400) // was 3000

//     // Auto-advance hero slideshow
//     const heroInterval = setInterval(() => {
//       setHeroSlide((prev) => (prev + 1) % bookCollection.length)
//     }, 2000) // was 2500

//     // Auto-advance floating slideshow
//     const floatingInterval = setInterval(() => {
//       setFloatingSlide((prev) => (prev + 1) % bookCollection.length)
//     }, 2800) // was 3500

//     // Auto-advance continuous slideshow
//     const infiniteInterval = setInterval(() => {
//       setInfiniteSlide((prev) => prev + 1)
//     }, 80) // was 100

//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto'
//       clearInterval(mainInterval)
//       clearInterval(heroInterval)
//       clearInterval(floatingInterval)
//       clearInterval(infiniteInterval)
//     }
//   }, [])

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault()
//     const element = document.getElementById(targetId)
//     if (element) {
//       element.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest'
//       })
//     }
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % bookCollection.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + bookCollection.length) % bookCollection.length)
//   }

//   const handleViewWork = () => {
//     document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleStartProject = () => {
//     document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   // Floating Book Cards Component
//   const FloatingBooks = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {bookCollection.slice(0, 12).map((book, index) => (
//         <div
//           key={book.id}
//           className={`absolute transition-all duration-[4000ms] transform ${
//             index % 4 === 0 ? 'animate-pulse' : 
//             index % 4 === 1 ? 'animate-bounce' : 
//             index % 4 === 2 ? 'animate-pulse' : 'animate-bounce'
//           }`}
//           style={{
//             left: `${5 + (index * 8)}%`,
//             top: `${10 + (index % 4) * 20}%`,
//             animationDelay: `${index * 0.3}s`,
//             opacity: 0.08
//           }}
//         >
//           <div className="w-8 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg transform rotate-12">
//             <div className="w-full h-1 bg-amber-400 rounded-t"></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )

//   return (
//     <div 
//       className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden"
//     >
//       {/* Floating Book Background */}
//       <FloatingBooks />

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-600" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Home</a>
//               <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Portfolio</a>
//               <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Services</a>
//               <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">About</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Content First, then Slideshow Below */}
//       <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Content Section */}
//           <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-8">
//               <Book className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Professional Book Design Services</span>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
//               Book publishing
//               <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">
//                 made beautiful
//               </span>
//             </h1>

//             <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
//               From stunning cover designs to professional formatting, we transform your manuscript into a masterpiece that stands out in bookstores and online markets.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <button 
//                 onClick={handleViewWork}
//                 className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//               >
//                 <Book className="w-5 h-5" />
//                 <span>Browse Our Books</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button 
//                 onClick={handleStartProject}
//                 className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
//               >
//                 <Library className="w-5 h-5" />
//                 <span>Learn More</span>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200">
//                   <div className="text-amber-600 mb-2 flex justify-center">{stat.icon}</div>
//                   <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
//                   <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Main Continuous Slideshow Below Title */}
//           <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
//               <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-amber-50/30"></div>
              
//               {/* Continuous Infinite Slideshow */}
//               <div className="relative z-10">
//                 <div className="text-center py-8 px-8">
//                   <h3 className="text-3xl font-bold text-slate-900 mb-3">Our Book Design Portfolio</h3>
//                   <p className="text-slate-600 mb-8">Continuously showcasing hundreds of professional book covers</p>
                  
//                   {/* Infinite Horizontal Scroll */}
//                   <div className="relative overflow-hidden">
//                     <div 
//                       className="flex space-x-6 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(-${(infiniteSlide * 2) % (bookCollection.length * 200)}px)`,
//                         width: `${bookCollection.length * 400}px`
//                       }}
//                     >
//                       {/* Triple the books for seamless loop */}
//                       {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                         <div
//                           key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-32 h-48 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                               <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                                 <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                                 <p className="text-amber-200 text-xs">{book.category}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Second Row - Opposite Direction */}
//                   <div className="relative overflow-hidden mt-6">
//                     <div 
//                       className="flex space-x-6 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(${(infiniteSlide * 1.5) % (bookCollection.length * 200)}px)`,
//                         width: `${bookCollection.length * 400}px`
//                       }}
//                     >
//                       {[...bookCollection.slice().reverse(), ...bookCollection.slice().reverse(), ...bookCollection.slice().reverse()].map((book, index) => (
//                         <div
//                           key={`reverse-${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-28 h-42 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                               <div className="absolute bottom-1 left-1 right-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                                 <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Third Row - Different Speed */}
//                   <div className="relative overflow-hidden mt-6">
//                     <div 
//                       className="flex space-x-4 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(-${(infiniteSlide * 2.5) % (bookCollection.length * 150)}px)`,
//                         width: `${bookCollection.length * 300}px`
//                       }}
//                     >
//                       {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                         <div
//                           key={`third-${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-24 h-36 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Continuous Moving Book Strip */}
//       <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative z-10">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-white mb-2">Infinite Book Gallery</h2>
//             <p className="text-amber-100">Endless showcase of professional book designs</p>
//           </div>
          
//           {/* Infinite Scroll Strip */}
//           <div className="relative overflow-hidden">
//             <div 
//               className="flex space-x-6 transition-transform duration-100 ease-linear"
//               style={{
//                 transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 200)}px)`,
//                 width: `${bookCollection.length * 400}px`
//               }}
//             >
//               {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                 <div key={`strip-${book.id}-${Math.floor(index / bookCollection.length)}`} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
//                   <div className="w-24 h-36 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-white/30">
//                     <img 
//                       src={book.image} 
//                       alt={book.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="text-center mt-2">
//                     <p className="text-white text-xs font-medium truncate w-24">{book.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Book Grid Showcase */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Book Design Gallery</h2>
//             <p className="text-xl text-slate-600">Explore hundreds of professionally designed book covers</p>
//           </div>
          
//           <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
//             {bookCollection.map((book, index) => (
//               <div
//                 key={book.id}
//                 className="group relative overflow-hidden rounded-lg bg-white border border-slate-200 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                     <p className="text-white text-xs font-semibold truncate">{book.title}</p>
//                     <p className="text-amber-200 text-xs">{book.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View More Books Button */}
//           <div className="text-center">
//             <button 
//               onClick={handleViewWork}
//               className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
//             >
//               <Library className="w-5 h-5" />
//               <span>View Complete Portfolio</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section with Book Cards */}
//       <section id="services" className="py-24 px-4 relative bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <BookOpen className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Book Design Services</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">What We Create for Authors</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive book design solutions that transform your manuscript into a market-ready masterpiece
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-300 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 {/* Sample Book Preview */}
//                 <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                   <div className="w-8 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg">
//                     <div className="w-full h-1 bg-amber-400 rounded-t"></div>
//                   </div>
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{service.title}</h3>
//                   <p className="text-slate-600 leading-relaxed mb-6 text-center text-sm">{service.description}</p>
//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center space-x-3 text-slate-700">
//                         <Book className="w-3 h-3 text-amber-600 flex-shrink-0" />
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Portfolio Section with More Books */}
//       <section id="portfolio" className="py-24 px-4 relative bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <Library className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Book Portfolio</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Book Design Showcase</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our extensive collection of book designs spanning multiple genres and publishing formats
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveFilter(category.id)}
//                 className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
//                   activeFilter === category.id
//                     ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
//                     : "bg-white text-slate-700 border border-slate-300 hover:border-amber-600 hover:text-amber-600"
//                 }`}
//               >
//                 <Book className="w-4 h-4" />
//                 <span>{category.name} ({category.count})</span>
//               </button>
//             ))}
//           </div>

//           {/* Portfolio Grid with Book Focus */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {filteredItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <div className="absolute top-4 left-4 bg-amber-600 text-white px-2 py-1 rounded text-xs font-bold">
//                     BOOK
//                   </div>
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full text-xs font-semibold">
//                     {item.year}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center space-x-2 mb-3">
//                     <BookOpen className="w-4 h-4 text-amber-600" />
//                     <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
//                       {item.category}
//                     </span>
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Extended Book Collection Display */}
//           <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4">
//             {bookCollection.map((book, index) => (
//               <div
//                 key={book.id}
//                 className="group relative overflow-hidden rounded-lg bg-white border border-slate-200 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                     <p className="text-white text-xs font-semibold truncate">{book.title}</p>
//                     <p className="text-amber-200 text-xs">{book.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Continuous Book Carousel */}
//       <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
//         </div>
        
//         <div className="relative z-10">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
//               <Book className="w-8 h-8 text-amber-400" />
//               <span>Featured Book Collection</span>
//               <Book className="w-8 h-8 text-amber-400" />
//             </h2>
//             <p className="text-slate-300">Continuously rotating showcase of our best work</p>
//           </div>
          
//           <div className="relative">
//             <div className="flex items-center justify-center space-x-6 mb-8">
//               {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
//                 const bookIndex = (currentSlide + offset) % bookCollection.length;
//                 const book = bookCollection[bookIndex];
//                 return (
//                   <div 
//                     key={book.id} 
//                     className={`transition-all duration-1000 transform ${
//                       offset === 3 
//                         ? 'scale-125 z-30 shadow-2xl' 
//                         : offset === 2 || offset === 4
//                           ? 'scale-100 z-20 opacity-80' 
//                           : offset === 1 || offset === 5
//                             ? 'scale-85 z-10 opacity-60'
//                             : 'scale-70 z-0 opacity-40'
//                     }`}
//                   >
//                     <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-amber-200">
//                       <img 
//                         src={book.image} 
//                         alt={book.title}
//                         className="w-20 h-30 object-cover"
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Controls */}
//             <div className="flex justify-center items-center space-x-6">
//               <button 
//                 onClick={prevSlide}
//                 className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300" />
//               </button>
              
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-white mb-1">
//                   {bookCollection[currentSlide]?.title}
//                 </h3>
//                 <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/30">
//                   {bookCollection[currentSlide]?.category}
//                 </span>
//               </div>

//               <button 
//                 onClick={nextSlide}
//                 className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300" />
//               </button>
//             </div>

//             {/* Progress Indicators */}
//             <div className="flex justify-center space-x-2 mt-8">
//               {bookCollection.slice(0, 10).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide % 10
//                       ? 'bg-amber-500 shadow-lg shadow-amber-500/50' 
//                       : 'bg-white/30 hover:bg-white/50'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section with Book Elements */}
//       <section id="about" className="py-24 px-4 relative bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden">
//         {/* Book Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(25)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute transform rotate-12"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 2}s`
//               }}
//             >
//               <div className="w-6 h-9 bg-white rounded shadow-lg animate-pulse">
//                 <div className="w-full h-1 bg-amber-200 rounded-t"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
//             <BookOpen className="w-5 h-5 text-white" />
//             <span className="text-white font-medium">Ready to Design Your Book?</span>
//             <BookOpen className="w-5 h-5 text-white" />
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Transform Your Story into a
//             <span className="block text-amber-200">Beautiful Book</span>
//           </h2>

//           <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             From manuscript to masterpiece - let our expert designers create a book cover and layout that captures readers' attention and drives sales in today's competitive market.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button 
//               onClick={handleStartProject}
//               className="group bg-white text-amber-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//             >
//               <Book className="w-5 h-5" />
//               <span>Start Your Book Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Library className="w-5 h-5" />
//               <span>View Our Book Packages</span>
//             </button>
//           </div>

//           {/* Mini Book Showcase in CTA */}
//           <div className="flex justify-center space-x-3 opacity-80">
//             {bookCollection.slice(0, 7).map((book, index) => (
//               <div
//                 key={book.id}
//                 className="w-10 h-15 bg-white rounded shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <img 
//                   src={book.image} 
//                   alt={book.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default BookDesignerPortfolio



























import { useState, useEffect } from "react"
import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users, FileText, RotateCcw, ChevronLeft, ChevronRight, Book, Library, Heart, TrendingUp, Camera, Bookmark, MessageCircle, Phone, Headphones, Edit, DollarSign, ChevronDown, ChevronUp, Quote } from "lucide-react"

const services = [
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: "Book Printing",
    description: "High-quality print services for physical book production",
    features: [
      "Professional Print Quality",
      "Multiple Paper Options",
      "Custom Binding Services",
      "Bulk Printing Discounts"
    ]
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "eBook Publishing",
    description: "Complete digital publishing solutions for all platforms",
    features: [
      "Kindle Direct Publishing",
      "Multi-platform Distribution",
      "Digital Formatting",
      "Metadata Optimization"
    ]
  },
  {
    icon: <Headphones className="w-12 h-12" />,
    title: "Audiobook Creation",
    description: "Professional audiobook production and narration services",
    features: [
      "Professional Narration",
      "Studio Quality Recording",
      "Audio Editing & Mastering",
      "Platform Distribution"
    ]
  },
  {
    icon: <Edit className="w-12 h-12" />,
    title: "Book Editing",
    description: "Comprehensive editing services to perfect your manuscript",
    features: [
      "Content Editing",
      "Copy Editing",
      "Proofreading",
      "Developmental Editing"
    ]
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Book Design",
    description: "Stunning cover and interior design that captivates readers",
    features: [
      "Cover Design",
      "Interior Layout",
      "Typography Selection",
      "Brand Consistency"
    ]
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: "Sales & Marketing",
    description: "Strategic marketing to boost your book's visibility and sales",
    features: [
      "Marketing Strategy",
      "Social Media Promotion",
      "Book Launch Campaigns",
      "Sales Analytics"
    ]
  }
]

const clientReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Author, The Midnight Garden",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    review: "BookCraft Studio transformed my manuscript into a beautiful book that exceeded all my expectations. Their attention to detail and professional approach made the entire publishing process seamless.",
    rating: 5,
    bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=edges"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Author, Digital Marketing Mastery",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    review: "Working with BookCraft Studio was an incredible experience. They helped me bring my business book to life with stunning design and professional formatting that truly stands out in the market.",
    rating: 5,
    bookCover: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=400&fit=crop&crop=edges"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Author, Children's Adventure Series",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    review: "The team at BookCraft Studio understood my vision perfectly and created magical illustrations and layouts for my children's book series. My young readers absolutely love the final result!",
    rating: 5,
    bookCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=edges"
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Author, The Space Chronicles",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    review: "From concept to completion, BookCraft Studio delivered exceptional quality. Their sci-fi book design captured the essence of my story perfectly, and the sales have been phenomenal!",
    rating: 5,
    bookCover: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=400&fit=crop&crop=edges"
  }
]

const faqs = [
  {
    question: "How long does the book design process take?",
    answer: "The timeline varies depending on the complexity of your project. Typically, cover design takes 5-7 business days, while complete book formatting and design can take 2-3 weeks. We'll provide you with a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide revisions if I'm not satisfied with the design?",
    answer: "Absolutely! We offer unlimited revisions until you're completely satisfied with your book design. Your satisfaction is our top priority, and we work closely with you to ensure the final product exceeds your expectations."
  },
  {
    question: "Can you help with both print and digital versions of my book?",
    answer: "Yes, we specialize in creating designs that work perfectly for both print and digital formats. We ensure your book looks stunning whether it's printed or viewed on an e-reader, tablet, or smartphone."
  },
  {
    question: "What file formats do you provide upon completion?",
    answer: "We provide all necessary file formats including high-resolution PDFs for print, EPUB and MOBI files for e-books, and source files in various formats. You'll receive everything needed for publishing across all platforms."
  },
  {
    question: "Do you offer package deals for multiple services?",
    answer: "Yes, we offer comprehensive packages that combine multiple services at discounted rates. Our most popular packages include cover design, interior formatting, and publishing assistance. Contact us for custom package pricing."
  },
  {
    question: "Can you work with my existing manuscript format?",
    answer: "We can work with manuscripts in virtually any format including Word documents, Google Docs, PDFs, and more. Our team will review your manuscript and recommend the best approach for formatting and design."
  }
]

const BookDesignerPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heroSlide, setHeroSlide] = useState(0)
  const [floatingSlide, setFloatingSlide] = useState(0)
  const [infiniteSlide, setInfiniteSlide] = useState(0)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [currentReview, setCurrentReview] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  // Expanded book collection with more realistic book covers
  const bookCollection = [
    {
      id: 1,
      title: "The Ultimate Wrestling Coloring Book",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
      category: "Coloring Book",
      genre: "Entertainment",
      rating: 4.8,
      sales: "12k+"
    },
    {
      id: 2,
      title: "Mudfall - Earth Hunter Jr.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=edges",
      category: "Fantasy",
      genre: "Fiction",
      rating: 4.9,
      sales: "25k+"
    },
    {
      id: 3,
      title: "The New Derivative",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
      category: "Business",
      genre: "Non-Fiction",
      rating: 4.7,
      sales: "8k+"
    },
    {
      id: 4,
      title: "The Adventure of Little Feet",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
      category: "Children's",
      genre: "Children",
      rating: 4.9,
      sales: "30k+"
    },
    {
      id: 5,
      title: "Juicing for Authentic Balance",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=edges",
      category: "Health & Wellness",
      genre: "Lifestyle",
      rating: 4.6,
      sales: "15k+"
    },
    {
      id: 6,
      title: "Mystery of the Midnight Garden",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
      category: "Mystery",
      genre: "Fiction",
      rating: 4.8,
      sales: "18k+"
    },
    {
      id: 7,
      title: "Love in the Digital Age",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&crop=edges",
      category: "Romance",
      genre: "Fiction",
      rating: 4.7,
      sales: "22k+"
    },
    {
      id: 8,
      title: "Galactic Warriors",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=edges",
      category: "Sci-Fi",
      genre: "Fiction",
      rating: 4.9,
      sales: "35k+"
    },
    {
      id: 9,
      title: "Kitchen Mastery Guide",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop&crop=edges",
      category: "Cookbook",
      genre: "Lifestyle",
      rating: 4.8,
      sales: "20k+"
    },
    {
      id: 10,
      title: "Mindful Meditation Practices",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
      category: "Self-Help",
      genre: "Wellness",
      rating: 4.7,
      sales: "16k+"
    },
    {
      id: 11,
      title: "Digital Marketing Mastery",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop&crop=edges",
      category: "Business",
      genre: "Marketing",
      rating: 4.6,
      sales: "11k+"
    },
    {
      id: 12,
      title: "The Art of Photography",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=600&fit=crop&crop=edges",
      category: "Art",
      genre: "Creative",
      rating: 4.8,
      sales: "14k+"
    },
    {
      id: 13,
      title: "Healthy Living Guide",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=600&fit=crop&crop=edges",
      category: "Health",
      genre: "Lifestyle",
      rating: 4.7,
      sales: "19k+"
    },
    {
      id: 14,
      title: "Space Adventures",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=edges",
      category: "Science Fiction",
      genre: "Fiction",
      rating: 4.9,
      sales: "28k+"
    },
    {
      id: 15,
      title: "Cryptocurrency Explained",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop&crop=edges",
      category: "Finance",
      genre: "Education",
      rating: 4.5,
      sales: "9k+"
    },
    {
      id: 16,
      title: "Modern Architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=600&fit=crop&crop=edges",
      category: "Architecture",
      genre: "Design",
      rating: 4.8,
      sales: "12k+"
    },
    {
      id: 17,
      title: "Yoga for Beginners",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
      category: "Fitness",
      genre: "Health",
      rating: 4.6,
      sales: "17k+"
    },
    {
      id: 18,
      title: "Travel Photography",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop&crop=edges",
      category: "Photography",
      genre: "Travel",
      rating: 4.7,
      sales: "13k+"
    }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Click Not Code",
      category: "fantasy",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
      description: "Epic fantasy novel cover design with mystical elements",
      year: "2024",
      client: "Mystic Publications"
    },
    {
      id: 2,
      title: "Your Ultimate Skylight Installation",
      category: "business",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
      description: "Clean, professional design for business literature",
      year: "2024",
      client: "TechCorp Solutions"
    },
    {
      id: 3,
      title: "The Reishi Sleep System",
      category: "children",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
      description: "Colorful and playful design for young readers",
      year: "2023",
      client: "Dreamland Press"
    },
    {
      id: 4,
      title: "Midnight in the Library",
      category: "mystery",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
      description: "Intriguing mystery novel with atmospheric design",
      year: "2024",
      client: "Shadow Books"
    }
  ]

  const categories = [
    { id: "all", name: "All Projects", count: portfolioItems.length },
    { id: "fantasy", name: "Fantasy", count: portfolioItems.filter((item) => item.category === "fantasy").length },
    { id: "business", name: "Business", count: portfolioItems.filter((item) => item.category === "business").length },
    { id: "children", name: "Children", count: portfolioItems.filter((item) => item.category === "children").length },
    { id: "mystery", name: "Mystery", count: portfolioItems.filter((item) => item.category === "mystery").length },
    { id: "romance", name: "Romance", count: portfolioItems.filter((item) => item.category === "romance").length },
    { id: "sci-fi", name: "Sci-Fi", count: portfolioItems.filter((item) => item.category === "sci-fi").length },
  ]

  const filteredItems = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const stats = [
    { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
  ]

  useEffect(() => {
    setIsVisible(true)
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Auto-advance main slideshow with seamless loop
    const mainInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        return next >= bookCollection.length ? 0 : next;
      })
    }, 2400) // was 3000

    // Auto-advance hero slideshow with seamless loop
    const heroInterval = setInterval(() => {
      setHeroSlide((prev) => {
        const next = prev + 1;
        return next >= bookCollection.length ? 0 : next;
      })
    }, 2000) // was 2500

    // Auto-advance floating slideshow with seamless loop
    const floatingInterval = setInterval(() => {
      setFloatingSlide((prev) => {
        const next = prev + 1;
        return next >= bookCollection.length ? 0 : next;
      })
    }, 2800) // was 3500

    // Auto-advance featured books
    const featuredInterval = setInterval(() => {
      setFeaturedIndex((prev) => {
        const next = prev + 1;
        return next >= bookCollection.length ? 0 : next;
      })
    }, 4000)

    // Continuous infinite slideshow with perfect loop
    const infiniteInterval = setInterval(() => {
      setInfiniteSlide((prev) => prev + 1)
    }, 50) // Smooth continuous movement

    // Auto-advance reviews
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % clientReviews.length)
    }, 5000)

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      clearInterval(mainInterval)
      clearInterval(heroInterval)
      clearInterval(floatingInterval)
      clearInterval(infiniteInterval)
      clearInterval(featuredInterval)
      clearInterval(reviewInterval)
    }
  }, [bookCollection.length])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= bookCollection.length ? 0 : next;
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      return next < 0 ? bookCollection.length - 1 : next;
    })
  }

  const handleViewWork = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleStartProject = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Enhanced Floating Book Cards Component
  const FloatingBooks = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bookCollection.slice(0, 15).map((book, index) => (
        <div
          key={book.id}
          className={`absolute transition-all duration-[6000ms] transform ${
            index % 5 === 0 ? 'animate-pulse' : 
            index % 5 === 1 ? 'animate-bounce' : 
            index % 5 === 2 ? 'animate-pulse' : 
            index % 5 === 3 ? 'animate-bounce' : 'animate-pulse'
          }`}
          style={{
            left: `${2 + (index * 6.5)}%`,
            top: `${8 + (index % 5) * 18}%`,
            animationDelay: `${index * 0.4}s`,
            opacity: 0.06 + (index % 3) * 0.02
          }}
        >
          <div className="w-10 h-14 bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-lg shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-1000">
            <div className="w-full h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-t-lg"></div>
            <div className="p-1">
              <div className="w-full h-1 bg-slate-200 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-slate-200 rounded mb-1"></div>
              <div className="w-1/2 h-1 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden"
    >
      {/* Enhanced Floating Book Background */}
      <FloatingBooks />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <BookOpen className="w-10 h-10 text-amber-600" />
                <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                BookCraft Studio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Portfolio</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Services</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Content First, then Slideshow Below */}
      <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Content Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            {/* <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-8">
              <Book className="w-4 h-4 text-amber-600" />
              <span className="text-amber-800 text-sm font-medium">Professional Book Design Services</span>
            </div> */}

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Book publishing
              <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">
                made beautiful
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              From stunning cover designs to professional formatting, we transform your manuscript into a masterpiece that stands out in bookstores and online markets.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={handleViewWork}
                className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Book className="w-5 h-5" />
                <span>Browse Our Books</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleStartProject}
                className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Library className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div> */}

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200">
                  <div className="text-amber-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Enhanced Continuous Slideshow */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 rounded-3xl shadow-2xl overflow-hidden border border-amber-200/30">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-amber-50/30"></div>
              
              {/* Continuous Infinite Slideshow */}
              <div className="relative z-10">
                <div className="text-center py-8 px-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Our Book Design Portfolio</h3>
                  <p className="text-slate-600 mb-8">Continuously showcasing hundreds of professional book covers</p>
                  
                  {/* First Row - Right to Left */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="flex space-x-6 transition-transform duration-75 ease-linear"
                      style={{
                        transform: `translateX(-${(infiniteSlide * 2) % (bookCollection.length * 200)}px)`,
                        width: `${bookCollection.length * 600}px`
                      }}
                    >
                      {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                        <div
                          key={`row1-${book.id}-${Math.floor(index / bookCollection.length)}`}
                          className="flex-shrink-0 group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
                            <div className="w-32 h-48 relative">
                              <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                <p className="text-white text-xs font-bold truncate">{book.title}</p>
                                <p className="text-amber-200 text-xs">{book.category}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Second Row - Left to Right */}
                  <div className="relative overflow-hidden mt-6">
                    <div 
                      className="flex space-x-6 transition-transform duration-75 ease-linear"
                      style={{
                        transform: `translateX(${(infiniteSlide * 1.5) % (bookCollection.length * 180)}px)`,
                        width: `${bookCollection.length * 540}px`
                      }}
                    >
                      {[...bookCollection.slice().reverse(), ...bookCollection.slice().reverse(), ...bookCollection.slice().reverse()].map((book, index) => (
                        <div
                          key={`row2-${book.id}-${Math.floor(index / bookCollection.length)}`}
                          className="flex-shrink-0 group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
                            <div className="w-28 h-42 relative">
                              <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-1 left-1 right-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                <p className="text-white text-xs font-bold truncate">{book.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Third Row - Faster Right to Left */}
                  <div className="relative overflow-hidden mt-6">
                    <div 
                      className="flex space-x-4 transition-transform duration-75 ease-linear"
                      style={{
                        transform: `translateX(-${(infiniteSlide * 2.5) % (bookCollection.length * 160)}px)`,
                        width: `${bookCollection.length * 480}px`
                      }}
                    >
                      {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                        <div
                          key={`row3-${book.id}-${Math.floor(index / bookCollection.length)}`}
                          className="flex-shrink-0 group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
                            <div className="w-24 h-36 relative">
                              <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Continuous Moving Book Strip */}
      <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Infinite Book Gallery</h2>
            <p className="text-amber-100">Endless showcase of professional book designs</p>
          </div>
          
          {/* Seamless Infinite Scroll Strip */}
          <div className="relative overflow-hidden">
            <div 
              className="flex space-x-6 transition-transform duration-75 ease-linear"
              style={{
                transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 200)}px)`,
                width: `${bookCollection.length * 600}px`
              }}
            >
              {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                <div key={`strip-${book.id}-${Math.floor(index / bookCollection.length)}`} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                  <div className="w-24 h-36 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-white/30">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-white text-xs font-medium truncate w-24">{book.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Book Showcase Gallery */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-amber-500/10 border border-amber-500/20 rounded-full px-8 py-4 mb-8">
              <Library className="w-5 h-5 text-amber-400" />
              <span className="text-amber-200 font-medium">Featured Book Collection</span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Where Stories Come
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Alive in Design
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our revolutionary approach to book design that transforms ordinary manuscripts into extraordinary visual experiences
            </p>
          </div>

          {/* Dynamic Featured Book Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Main Featured Book */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
                  <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={bookCollection[featuredIndex]?.image} 
                          alt={bookCollection[featuredIndex]?.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          FEATURED
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="text-amber-400 font-bold">{bookCollection[featuredIndex]?.rating}</span>
                            <span className="text-white text-sm">• {bookCollection[featuredIndex]?.sales} sold</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <span className="inline-block bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {bookCollection[featuredIndex]?.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {bookCollection[featuredIndex]?.title}
                      </h3>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        A masterfully designed cover that captures the essence of storytelling and draws readers into an unforgettable journey. This design showcases our expertise in creating visually stunning book covers that stand out in any market.
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg">
                          <Heart className="w-4 h-4 text-red-400" />
                          <span className="text-white text-sm">Reader Favorite</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-white text-sm">Best Seller</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg">
                          <Award className="w-4 h-4 text-amber-400" />
                          <span className="text-white text-sm">Award Winner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Book Previews */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">More Amazing Designs</h4>
              {bookCollection.slice(featuredIndex + 1, featuredIndex + 4).map((book, index) => (
                <div key={book.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 group-hover:border-amber-500/30 transition-colors duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-24 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-white font-bold truncate group-hover:text-amber-400 transition-colors duration-300">
                          {book.title}
                        </h5>
                        <p className="text-slate-400 text-sm">{book.category}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-amber-400 fill-current" />
                            <span className="text-amber-400 text-sm font-medium">{book.rating}</span>
                          </div>
                          <span className="text-slate-400 text-sm">• {book.sales}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rotating Book Carousel */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Continuous Design Excellence
              </h3>
              <p className="text-slate-300 text-lg">
                Watch our designs rotate in an endless showcase of creativity
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="flex space-x-8 transition-transform duration-100 ease-linear"
                style={{
                  transform: `translateX(-${(infiniteSlide * 4) % (bookCollection.length * 250)}px)`,
                  width: `${bookCollection.length * 750}px`
                }}
              >
                {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                  <div
                    key={`carousel-${book.id}-${Math.floor(index / bookCollection.length)}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-slate-800 rounded-2xl p-4 border border-slate-700 group-hover:border-amber-500/50 transition-colors duration-300 transform group-hover:scale-105">
                        <div className="w-40 h-60 rounded-xl overflow-hidden shadow-xl mb-4">
                          <img 
                            src={book.image} 
                            alt={book.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="text-center">
                          <h5 className="text-white font-bold text-sm mb-1 truncate group-hover:text-amber-400 transition-colors duration-300">
                            {book.title}
                          </h5>
                          <p className="text-slate-400 text-xs mb-2">{book.category}</p>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-amber-400 fill-current" />
                              <span className="text-amber-400 text-xs font-medium">{book.rating}</span>
                            </div>
                            <span className="text-slate-400 text-xs">• {book.sales}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Book Cards */}
      <section id="services" className="py-24 px-4 relative bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Unlock your book's potential with our comprehensive services.</h2>
            <p className="text-2xl text-slate-600 mb-2">
              <span className="italic">Everything you need</span> is all in one place:
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive book design solutions that transform your manuscript into a market-ready masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group text-center"
              >
                {/* Circular Icon Container */}
                <div className="relative mx-auto mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center border-4 border-amber-100 group-hover:border-amber-300 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-amber-500/20">
                    <div className="text-amber-600 group-hover:text-amber-700 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your success is our top priority</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Book Cover Display */}
              <div className="hidden lg:block mr-12">
                <div className="relative">
                  <img 
                    src={clientReviews[currentReview].bookCover}
                    alt="Book Cover"
                    className="w-64 h-80 object-cover rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 max-w-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    "{clientReviews[currentReview].review}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img 
                      src={clientReviews[currentReview].image}
                      alt={clientReviews[currentReview].name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold text-slate-900">{clientReviews[currentReview].name}</div>
                      <div className="text-slate-600 text-sm">{clientReviews[currentReview].title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentReview((prev) => (prev - 1 + clientReviews.length) % clientReviews.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            
            <button 
              onClick={() => setCurrentReview((prev) => (prev + 1) % clientReviews.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {clientReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? 'bg-amber-500 shadow-lg shadow-amber-500/50' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our book design services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 relative bg-gradient-to-br from-white via-amber-50/20 to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
              <Library className="w-4 h-4 text-amber-600" />
              <span className="text-amber-800 text-sm font-medium">Book Portfolio Showcase</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Design Excellence Gallery</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our award-winning collection of book designs that have captivated readers worldwide
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-xl shadow-amber-500/25 scale-105"
                    : "bg-white text-slate-700 border-2 border-slate-200 hover:border-amber-600 hover:text-amber-600 hover:shadow-lg hover:scale-105"
                }`}
              >
                <Book className="w-4 h-4" />
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  activeFilter === category.id 
                    ? "bg-white/20 text-white" 
                    : "bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-700"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Premium Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:scale-105"
              >
                {/* Premium Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Book Cover Display */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                      <Book className="w-4 h-4 inline mr-2" />
                      DESIGN
                    </div>
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-amber-600 px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                      {item.year}
                    </div>
                    
                    {/* Hover Content */}
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <Camera className="w-4 h-4 text-amber-600" />
                          <span className="text-amber-600 text-sm font-semibold">Professional Design</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Bookmark className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-600 text-sm">Client: {item.client}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
                      <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
                    
                    {/* Action Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                          <Star className="w-4 h-4 text-white fill-current" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Premium Design</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Massive Book Collection Display */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Complete Design Collection
                </h3>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Explore our extensive gallery of book covers spanning every genre and style imaginable
                </p>
              </div>

              {/* Masonry-style Grid */}
              <div className="columns-2 md:columns-4 lg:columns-6 gap-4 space-y-4">
                {bookCollection.map((book, index) => (
                  <div
                    key={book.id}
                    className="break-inside-avoid group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-105"
                  >
                    <div className="relative">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Book Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h5 className="text-white font-bold text-sm mb-1 leading-tight">
                          {book.title}
                        </h5>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-300 text-xs font-medium">{book.category}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-amber-400 fill-current" />
                            <span className="text-amber-400 text-xs font-bold">{book.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span className="text-green-400 text-xs font-medium">{book.sales} copies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Call to Action */}
              <div className="text-center mt-16">
                <button 
                  onClick={handleViewWork}
                  className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-6 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-4 mx-auto"
                >
                  <Library className="w-6 h-6" />
                  <span>Explore Complete Portfolio</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Continuous Book Carousel */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
              <Book className="w-8 h-8 text-amber-400" />
              <span>Featured Book Collection</span>
              <Book className="w-8 h-8 text-amber-400" />
            </h2>
            <p className="text-slate-300">Continuously rotating showcase of our best work</p>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-center space-x-6 mb-8">
              {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
                const bookIndex = (currentSlide + offset) % bookCollection.length;
                const book = bookCollection[bookIndex];
                return (
                  <div 
                    key={book.id} 
                    className={`transition-all duration-1000 transform ${
                      offset === 3 
                        ? 'scale-125 z-30 shadow-2xl' 
                        : offset === 2 || offset === 4
                          ? 'scale-100 z-20 opacity-80' 
                          : offset === 1 || offset === 5
                            ? 'scale-85 z-10 opacity-60'
                            : 'scale-70 z-0 opacity-40'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-amber-200">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-20 h-30 object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center space-x-6">
              <button 
                onClick={prevSlide}
                className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300" />
              </button>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">
                  {bookCollection[currentSlide]?.title}
                </h3>
                <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/30">
                  {bookCollection[currentSlide]?.category}
                </span>
              </div>

              <button 
                onClick={nextSlide}
                className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300" />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {bookCollection.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide % 10
                      ? 'bg-amber-500 shadow-lg shadow-amber-500/50' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Book Elements */}
      <section id="about" className="py-24 px-4 relative bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden">
        {/* Book Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute transform rotate-12"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div className="w-6 h-9 bg-white rounded shadow-lg animate-pulse">
                <div className="w-full h-1 bg-amber-200 rounded-t"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Ready to Design Your Book?</span>
            <BookOpen className="w-5 h-5 text-white" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Transform Your Story into a
            <span className="block text-amber-200">Beautiful Book</span>
          </h2>

          <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            From manuscript to masterpiece - let our expert designers create a book cover and layout that captures readers' attention and drives sales in today's competitive market.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={handleStartProject}
              className="group bg-white text-amber-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Book className="w-5 h-5" />
              <span>Start Your Book Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center space-x-3">
              <Library className="w-5 h-5" />
              <span>View Our Book Packages</span>
            </button>
          </div>

          {/* Mini Book Showcase in CTA */}
          <div className="flex justify-center space-x-3 opacity-80">
            {bookCollection.slice(0, 7).map((book, index) => (
              <div
                key={book.id}
                className="w-10 h-15 bg-white rounded shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </a>
      </div>
    </div>
  )
}

export default BookDesignerPortfolio