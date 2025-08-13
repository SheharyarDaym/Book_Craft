// import { useState, useEffect, useRef } from "react"
// import AOS from "aos"
// import { useNavigate } from "react-router-dom"
// import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users, RotateCcw, ChevronLeft, ChevronRight, Book, Library, Plus, Minus, Headphones, Edit, DollarSign, Printer, Tablet } from "lucide-react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

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
//       "Clickable TOC / Internal Links",
//     ],
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
//       "Non-Fiction Covers",
//     ],
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
//       "Interactive Designs",
//     ],
//   },
//   {
//     icon: <RotateCcw className="w-16 h-16" />,
//     title: "Conversion Services",
//     description: "Seamless format transitions that preserve quality across all platforms",
//     features: [
//       "PDF to KPF / Kindle Format",
//       "EPUB / MOBI Conversion",
//       "Layout Adjustment for Kindle",
//       "Print-to-Digital Transition",
//     ],
//   },
// ]

// const circularServices = [
//   {
//     id: "book-printing",
//     icon: <Printer className="w-12 h-12" />,
//     title: "Book Printing",
//     path: "/book-printing",
//   },
//   {
//     id: "ebook-publishing",
//     icon: <Tablet className="w-12 h-12" />,
//     title: "eBook Publishing",
//     path: "/ebook-publishing",
//   },
//   // {
//   //   id: "audiobook-creation",
//   //   icon: <Headphones className="w-12 h-12" />,
//   //   title: "Audiobook Creation",
//   //   path: "/audiobook-creation",
//   // },
//   {
//     id: "book-editing",
//     icon: <Edit className="w-12 h-12" />,
//     title: "Book Editing",
//     path: "/book-editing",
//   },
//   {
//     id: "book-design",
//     icon: <Palette className="w-12 h-12" />,
//     title: "Book Design",
//     path: "/book-design",
//   },
//   // {
//   //   id: "sales-marketing",
//   //   icon: <DollarSign className="w-12 h-12" />,
//   //   title: "Sales & Marketing",
//   //   path: "/sales-marketing",
//   // },
// ]

// const HomePage = () => {




//   const navigate = useNavigate()
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [heroSlide, setHeroSlide] = useState(0)
//   const [floatingSlide, setFloatingSlide] = useState(0)
//   const [infiniteSlide, setInfiniteSlide] = useState(0)
//   const [currentReview, setCurrentReview] = useState(0)
//   const [openFAQ, setOpenFAQ] = useState(null)

//   // GetInTouch section state
//   const [isGetInTouchVisible, setIsGetInTouchVisible] = useState(false)
//   const getInTouchSectionRef = useRef(null)

//   // Animation logic for infinite scroll
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setInfiniteSlide((prev) => prev + 1);
//     }, 50); // Adjust speed by changing interval (50ms for smooth animation)

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Reset infiniteSlide to prevent overflow (optional, for very long animations)
//   useEffect(() => {
//     if (infiniteSlide > bookCollection.length * 250) {
//       setInfiniteSlide(0);
//     }
//   }, [infiniteSlide]);




//   // Expanded book collection with more realistic book covers
//   const bookCollection = [
//     {
//       id: 1,
//       title: "Be The Man",
//       image: "../public/Home/mockup (4).png",
//       category: "Coloring Book",
//       genre: "Entertainment",
//     },
//     {
//       id: 2,
//       title: "Mudfall - Earth Hunter Jr.",
//       image: "../public/Home/mockup4.jpg",
//       category: "Fantasy",
//       genre: "Fiction",
//     },
//     {
//       id: 3,
//       title: "The New Derivative",
//       image: "../public/Home/mockup6.jpg",
//       category: "Business",
//       genre: "Non-Fiction",
//     },
//     {
//       id: 4,
//       title: "The Adventure of Little Feet",
//       image: "../public/Home/mockupFilecover2.png",
//       category: "Children's",
//       genre: "Children",
//     },
//     {
//       id: 5,
//       title: "Juicing for Authentic Balance",
//       image: "../public/Home/mockup_.png",
//       category: "Health & Wellness",
//       genre: "Lifestyle",
//     },
//     {
//       id: 6,
//       title: "Mystery of the Midnight Garden",
//       image: "../public/Home/mockup_f2.png",
//       category: "Mystery",
//       genre: "Fiction",
//     },
//     {
//       id: 7,
//       title: "Love in the Digital Age",
//       image: "../public/Home/mockup_flat (2).jpg",
//       category: "Romance",
//       genre: "Fiction",
//     },
//     {
//       id: 8,
//       title: "Galactic Warriors",
//       image: "/Home/mockup.png",
//       category: "Sci-Fi",
//       genre: "Fiction",
//     },
//     {
//       id: 9,
//       title: "Kitchen Mastery Guide",
//       image: "../public/Home/mockup_kindle.png",
//       category: "Cookbook",
//       genre: "Lifestyle",
//     },
//     {
//       id: 10,
//       title: "Mindful Meditation Practices",
//       image: "../public/Home/mockup_whiteOutline (2).png",
//       category: "Self-Help",
//       genre: "Wellness",
//     },
//     {
//       id: 11,
//       title: "Digital Marketing Mastery",
//       image: "../public/Home/mockup (7).png",
//       category: "Business",
//       genre: "Marketing",
//     },
//     {
//       id: 12,
//       title: "The Art of Photography",
//       image: "../public/Home/book mockup (2).jpg",
//       category: "Art",
//       genre: "Creative",
//     },
//     {
//       id: 13,
//       title: "Healthy Living Guide",
//       image: "../public/Home/book_cover_mockup_desig.jpg",
//       category: "Health",
//       genre: "Lifestyle",
//     },
//     {
//       id: 14,
//       title: "Space Adventures",
//       image: "../public/Home/book_cover_mockup3.jpg",
//       category: "Science Fiction",
//       genre: "Fiction",
//     },
//     {
//       id: 15,
//       title: "Cryptocurrency Explained",
//       image: "../public/Home/mockupFilecover2.png",
//       category: "Finance",
//       genre: "Education",
//     },
//     {
//       id: 16,
//       title: "Modern Architecture",
//       image: "../public/Home/mockup (8).png",
//       category: "Architecture",
//       genre: "Design",
//     },
//     {
//       id: 17,
//       title: "Yoga for Beginners",
//       image: "../public/Home/mockup (7).png",
//       category: "Fitness",
//       genre: "Health",
//     },
//     {
//       id: 18,
//       title: "Travel Photography",
//       image: "../public/Home/book mockup (2).jpg",
//       category: "Photography",
//       genre: "Travel",
//     },
//   ]

  




//   const stats = [
//     { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
//     { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
//     { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
//     { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
//   ]

//   const reviews = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       title: "Author, The Mystic Chronicles",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review:
//         "BookCraft Studio transformed my manuscript into a stunning masterpiece. Their attention to detail and creative vision exceeded all my expectations. The cover design perfectly captures the essence of my fantasy novel.",
//       project: "Fantasy Novel Design",
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       title: "Business Author, Digital Success",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review:
//         "Professional, timely, and absolutely brilliant work. The team understood my vision immediately and delivered a cover that has significantly boosted my book sales. Highly recommended for any serious author.",
//       project: "Business Book Formatting",
//     },
//     {
//       id: 3,
//       name: "Emma Davis",
//       title: "Children's Author, Little Adventures",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review:
//         "Working with BookCraft Studio was an absolute joy! They brought my children's book to life with vibrant colors and engaging illustrations. My young readers love the visual appeal, and parents appreciate the quality.",
//       project: "Children's Book Illustration",
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       title: "Mystery Writer, Dark Secrets",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review:
//         "The atmospheric design they created for my mystery novel is absolutely perfect. It captures the dark, suspenseful mood I was aiming for. Sales have increased dramatically since the new cover launch.",
//       project: "Mystery Novel Cover",
//     },
//   ]

//   const faqs = [
//     {
//       question: "How long does the book design process take?",
//       answer:
//         "Our typical turnaround time is 5-7 business days for cover design and 7-10 business days for complete formatting. Rush orders can be accommodated for an additional fee. We'll provide you with a detailed timeline based on your specific project requirements.",
//     },
//     {
//       question: "Do you offer revisions if I'm not satisfied?",
//       answer:
//         "Absolutely! We include up to 3 rounds of revisions with every project to ensure you're completely satisfied with the final result. Additional revisions can be made for a small fee. Your satisfaction is our top priority.",
//     },
//     {
//       question: "What file formats do you provide?",
//       answer:
//         "We provide all necessary formats including high-resolution print-ready PDFs, Kindle-optimized files (MOBI/KPF), EPUB for other e-readers, and source files (PSD/AI) upon request. You'll receive everything needed for both print and digital publishing.",
//     },
//     {
//       question: "Can you work with my existing manuscript?",
//       answer:
//         "Yes! We work with manuscripts in various formats including Word documents, PDFs, Google Docs, and more. Our team will review your content and recommend the best approach for formatting and design based on your genre and target audience.",
//     },
//     {
//       question: "Do you offer package deals for multiple services?",
//       answer:
//         "Yes, we offer comprehensive packages that combine cover design, formatting, and marketing materials at discounted rates. Our most popular package includes cover design, interior formatting, and basic marketing materials for a complete publishing solution.",
//     },
//     {
//       question: "What makes your designs stand out from competitors?",
//       answer:
//         "Our designs are created by experienced professionals who understand current market trends and genre expectations. We focus on creating covers that not only look beautiful but also drive sales by appealing to your target audience and standing out in crowded marketplaces.",
//     },
//   ]

//   useEffect(() => {
//     AOS.refresh()
//     setIsVisible(true)
//     document.documentElement.style.scrollBehavior = "smooth"

//     // Auto-advance main slideshow
//     const mainInterval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 3000)

//     // Auto-advance hero slideshow
//     const heroInterval = setInterval(() => {
//       setHeroSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 2500)

//     // Auto-advance floating slideshow
//     const floatingInterval = setInterval(() => {
//       setFloatingSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 3500)

//     // Auto-advance continuous slideshow
//     const infiniteInterval = setInterval(() => {
//       setInfiniteSlide((prev) => prev + 1)
//     }, 100) // Very smooth continuous movement

//     // Auto-advance reviews
//     const reviewInterval = setInterval(() => {
//       setCurrentReview((prev) => {
//         const next = prev + 1
//         return next >= reviews.length ? 0 : next
//       })
//     }, 5000)

//     // GetInTouch intersection observer
//     const getInTouchObserver = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsGetInTouchVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (getInTouchSectionRef.current) {
//       getInTouchObserver.observe(getInTouchSectionRef.current)
//     }

//     return () => {
//       document.documentElement.style.scrollBehavior = "auto"
//       clearInterval(mainInterval)
//       clearInterval(heroInterval)
//       clearInterval(floatingInterval)
//       clearInterval(infiniteInterval)
//       clearInterval(reviewInterval)

//       // Cleanup GetInTouch observer
//       if (getInTouchSectionRef.current) {
//         getInTouchObserver.unobserve(getInTouchSectionRef.current)
//       }
//     }
//   }, [])

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault()
//     const element = document.getElementById(targetId)
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "nearest",
//       })
//     }
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => {
//       const next = prev + 1
//       return next >= bookCollection.length ? 0 : next
//     })
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => {
//       const next = prev - 1
//       return next < 0 ? bookCollection.length - 1 : next
//     })
//   }

//   const handleViewWork = () => {
//     document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
//   }

//   const handleStartProject = () => {
//     document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
//   }

//   const nextReview = () => {
//     setCurrentReview((prev) => {
//       const next = prev + 1
//       return next >= reviews.length ? 0 : next
//     })
//   }

//   const prevReview = () => {
//     setCurrentReview((prev) => {
//       const next = prev - 1
//       return next < 0 ? reviews.length - 1 : next
//     })
//   }

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index)
//   }

//   const handleServiceClick = (path) => {
//     // navigate(path)
//      window.open(path, '_blank')
//   }

//   // Floating Book Cards Component
//   const FloatingBooks = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {bookCollection.slice(0, 12).map((book, index) => (
//         <div
//           key={book.id}
//           className={`absolute transition-all duration-[4000ms] transform ${
//             index % 4 === 0
//               ? "animate-pulse"
//               : index % 4 === 1
//                 ? "animate-bounce"
//                 : index % 4 === 2
//                   ? "animate-pulse"
//                   : "animate-bounce"
//           }`}
//           style={{
//             left: `${5 + index * 8}%`,
//             top: `${10 + (index % 4) * 20}%`,
//             animationDelay: `${index * 0.3}s`,
//             opacity: 0.08,
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
//     <div className="min-h-screen bg-gradient-to-br from-amber-25 via-orange-25 to-yellow-25 relative overflow-x-hidden">
//       {/* Floating Book Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Animated Background Elements */}
//         <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-pulse"></div>
//         <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full animate-bounce-slow"></div>
//         <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-200/25 to-amber-200/25 rounded-full animate-pulse-glow"></div>
//         <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-float"></div>

//         {/* Floating Book Icons */}
//         {bookCollection.slice(0, 15).map((book, index) => (
//           <div
//             key={book.id}
//             className={`absolute transition-all duration-[4000ms] transform animate-float`}
//             style={{
//               left: `${5 + index * 6}%`,
//               top: `${10 + (index % 5) * 15}%`,
//               animationDelay: `${index * 0.4}s`,
//               opacity: 0.08,
//             }}
//           >
//             <div className="w-10 h-14 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
//               <div className="w-full h-2 bg-amber-400/60 rounded-t-lg"></div>
//               <div className="p-1">
//                 <div className="w-full h-1 bg-amber-300/40 rounded mb-1"></div>
//                 <div className="w-3/4 h-1 bg-amber-300/30 rounded mb-1"></div>
//                 <div className="w-1/2 h-1 bg-amber-300/20 rounded"></div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Floating Sparkles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               opacity: 0.3,
//             }}
//           >
//             <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "3s" }} />
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-cream-white/95 backdrop-blur-xl z-50 border-b border-amber-200/50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-600" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>

//             {/* Centered Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
//               <a
//                 href="#home"
//                 onClick={(e) => handleNavClick(e, "home")}
//                 className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#portfolio"
//                 onClick={(e) => handleNavClick(e, "portfolio")}
//                 className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
//               >
//                 Portfolio
//               </a>
//               <a
//                 href="#services"
//                 onClick={(e) => handleNavClick(e, "services")}
//                 className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
//               >
//                 Services
//               </a>
//               <a
//                 href="#about"
//                 onClick={(e) => handleNavClick(e, "about")}
//                 className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
//               >
//                 About
//               </a>
//             </div>

//             {/* Contact Information */}
//             <div className="hidden lg:flex flex-col text-right text-sm">
              
//               <a
//                 href="mailto:shehayrar@gmail.com"
//                 target="_blank"
//                 className="text-slate-600 hover:text-amber-600 transition-colors duration-300"
//               >
//               <button
//                 className="mt-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
//                 data-aos="fade-down"
//                 data-aos-delay="400"
//               >
//                 Contact Us
//               </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Content First, then Slideshow Below */}
//       <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           {/* Content Section */}
//           <div
//             className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
//               Book publishing
//               <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">made beautiful</span>
//             </h1>

//             <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
//               From stunning cover designs to professional formatting, we transform your manuscript into a masterpiece
//               that stands out in bookstores and online markets.
//             </p>
            

           
//           </div>

//           {/* Main Continuous Slideshow Below Title */}
//           <div
//   className={`transform transition-all duration-1000 delay-500 ${
//     isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//   }`}
// >
//   <div className="relative bg-white rounded-1xl shadow-3xl">
//     <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-amber-50/30"></div>

//     {/* Container with fixed width to show 4–5 images */}
//     <div className="relative overflow-hidden w-[800px] md:w-[1000px] lg:w-[1200px]">
//       <div
//         className="flex space-x-6 transition-transform duration-100 ease-linear"
//         style={{
//           transform: `translateX(-${(infiniteSlide * 2) % (bookCollection.length * 200)}px)`,
//           width: `${bookCollection.length * 400}px`, // Total width for all images (tripled for infinite loop)
//         }}
//       >
//         {/* Triple the books for seamless loop */}
//         {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//           <div
//             key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
//             className="flex-shrink-0 group cursor-pointer"
//           >
//             <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//               {/* Increased image size */}
//               <div className="w-48 h-72 relative">
//                 <img
//                   src={book.image || "/placeholder.svg"}
//                   alt={book.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                   <p className="text-white text-sm font-bold truncate">{book.title}</p>
//                   <p className="text-amber-200 text-xs">{book.category}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
//       </section>




// <section
//         ref={getInTouchSectionRef}
//         className="h-[500px] flex items-center justify-center py-16 px-4"
//         style={{
//           background: "linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 50%, #f0e6db 100%)",
//         }}
//       >
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Header */}
//           <div
//             className={`mb-16 transition-all duration-1000 transform ${
//               isGetInTouchVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
//             }`}
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 tracking-tight">Get in touch</h2>
//             <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               When you work with <span className="font-semibold text-orange-600">BookCraft Studio</span>, you can expect
//               help at every step of the journey. There's a lot to learn, but you can rest assured that our team will
//               take care of everything and anything your book might need. When your manuscript is ready, reach out to a
//               friendly, helpful Publishing Specialist.
//             </p>
//           </div>

          

//           {/* CTA Section */}
//           <div
//             className={`transition-all duration-1000 delay-700 transform ${
//               isGetInTouchVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
//             }`}
//           >
            

//             {/* Or Call Section */}
//             <div className="flex items-center justify-center gap-4">
//               <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
//               <span className="text-gray-600 font-medium">Call</span>
//               <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
//             </div>

//             <a
//               href="tel:+923095204849"
//               className="inline-flex items-center mt-4 text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300 group"
//             >
//               <svg
//                 className="w-7 h-7 mr-3 transform group-hover:rotate-12 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//               <span className="border-b-2 border-transparent group-hover:border-orange-600 transition-colors duration-300">
//                 +92 308 5974310
//               </span>
//             </a>
//           </div>

//           {/* Floating elements for visual interest */}
//           <div
//             className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"
//             style={{ animationDelay: "0s", animationDuration: "3s" }}
//           ></div>
//           <div
//             className="absolute bottom-20 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-bounce"
//             style={{ animationDelay: "1s", animationDuration: "4s" }}
//           ></div>
//           <div
//             className="absolute top-1/2 left-5 w-12 h-12 bg-orange-400 rounded-full opacity-15 animate-bounce"
//             style={{ animationDelay: "2s", animationDuration: "5s" }}
//           ></div>
//         </div>
//       </section>


















//       {/* Circular Services Section */}
//       <section id="services" className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">
//               Bring Your Book to Life with Our Complete Publishing Solutions
//             </h2>
//             <p className="text-xl text-slate-600 mb-2">
//               <span className="italic">All the tools you need — 

// </span> together, in one seamless platform.
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {circularServices.map((service, index) => (
//               <div
//                 key={service.id}
//                 onClick={() => handleServiceClick(service.path)}
//                 className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="w-40 h-40 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center mb-4 border-4 border-amber-100 group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-500/20 transition-all duration-300">
//                   <div className="text-amber-600 group-hover:text-orange-600 transition-colors duration-300">
//                     {service.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900 text-center group-hover:text-amber-600 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>











//       <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">CreativeHub at a glance:</h2>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//             {/* Stat 1 */}
//             <div className="relative group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-purple-200">
//                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-3xl font-bold text-white">12K+</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-purple-600 mb-2">Creative Projects</h3>
//                 <p className="text-gray-600 text-sm">Successfully launched</p>
//               </div>
//             </div>

//             {/* Stat 2 */}
//             <div className="relative group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-emerald-200">
//                 <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-3xl font-bold text-white">4.9★</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-emerald-600 mb-2">User Rating</h3>
//                 <p className="text-gray-600 text-sm">From 2800+ reviews</p>
//               </div>
//             </div>

//             {/* Stat 3 */}
//             <div className="relative group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-orange-200">
//                 <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-3xl font-bold text-white">95+</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-orange-600 mb-2">Countries</h3>
//                 <p className="text-gray-600 text-sm">Worldwide reach</p>
//               </div>
//             </div>
//           </div>

//           {/* Featured In Section */}
//           <div className="text-center">
//             <div className="inline-block bg-white rounded-full px-6 py-2 shadow-sm mb-8">
//               <span className="text-gray-500 text-sm font-medium">Featured in</span>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
//               {/* TechCrunch */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-green-600 mb-1">TechCrunch</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Tech News</div>
//               </div>

//               {/* Wired */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-black mb-1">WIRED</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Technology</div>
//               </div>

//               {/* Fast Company */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600 mb-1">Fast Company</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Business</div>
//               </div>

//               {/* VentureBeat */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-purple-600 mb-1">VentureBeat</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Innovation</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>






// <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative z-10">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-white mb-2">Infinite Book Gallery</h2>
//             <p className="text-amber-100">Endless showcase of professional book designs</p>
//           </div>

//           {/* Infinite Scroll Strip */}
//           <div className="relative overflow-hidden w-[1000px] md:w-[1200px] lg:w-[1440px]">
//   <div
//     className="flex space-x-6 transition-transform duration-100 ease-linear"
//     style={{
//       transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 250)}px)`,
//       width: `${bookCollection.length * 500}px`, // Total width for all images (tripled for infinite loop)
//     }}
//   >
//     {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//       <div
//         key={`strip-${book.id}-${Math.floor(index / bookCollection.length)}`}
//         className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
//       >
//         {/* Increased image size */}
//         <div className="w-40 h-60 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-white/30">
//           <img
//             src={book.image || "/placeholder.svg"}
//             alt={book.title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="text-center mt-2">
//           <p className="text-white text-sm font-medium truncate w-40">{book.title}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//         </div>
//       </section>











//       {/* Distribution Partners Section */}
//       <section className="py-20 px-4 bg-white" data-aos="fade-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
//             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
//               Sell your book{" "}
//               <span className="italic text-amber-600 relative">
//                 everywhere
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 rounded"></div>
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//               The largest worldwide print and eBook distribution network is at your fingertips
//             </p>
//           </div>

//           {/* Partner Logos */}
//           <div
//       className="flex flex-wrap justify-center items-center gap-12 mb-12"
//       data-aos="fade-up"
//       data-aos-delay="400"
//     >
//       {/* Original logos */}
//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//           BARNES&NOBLE
//         </div>
//         <div className="text-sm text-slate-500 text-center mt-1">BOOKSELLERS</div>
//       </div>
      
//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//           amazon
//         </div>
//         <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-1"></div>
//       </div>
      
//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
//           Walmart
//           <div className="ml-2 text-amber-500">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* New partner logos */}
//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
//           Target
//           <div className="ml-2 w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
//             <div className="w-2 h-2 rounded-full bg-red-500"></div>
//           </div>
//         </div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//           COSTCO
//         </div>
//         <div className="w-20 h-0.5 bg-blue-600 mx-auto mt-1"></div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors font-mono">
//           Best Buy
//         </div>
//         <div className="text-xs text-blue-600 text-center mt-1 font-semibold">TECH</div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
//           <div className="w-8 h-8 bg-green-500 rounded mr-2 flex items-center justify-center text-white text-lg">
//             S
//           </div>
//           Shopify
//         </div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//           eBay
//         </div>
//         <div className="flex gap-1 justify-center mt-1">
//           <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//           <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//           <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//         </div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
//           Home Depot
//           <div className="ml-2 w-6 h-6 bg-orange-600 transform rotate-45"></div>
//         </div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//           IKEA
//         </div>
//         <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-1"></div>
//         <div className="w-6 h-0.5 bg-yellow-500 mx-auto mt-0.5"></div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
//           CVS
//           <div className="ml-2 text-red-600">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//             </svg>
//           </div>
//         </div>
//         <div className="text-sm text-slate-500 text-center mt-1">PHARMACY</div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//           Kroger
//         </div>
//         <div className="w-16 h-0.5 bg-blue-500 mx-auto mt-1"></div>
//       </div>

//       <div className="group transition-all duration-300 hover:scale-110">
//         <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
//           <div className="w-8 h-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
//             E
//           </div>
//           Etsy
//         </div>
//       </div>
//     </div>

//         </div>
//       </section>





 


//  <section id="portfolio" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
//   <div className="max-w-7xl mx-auto">
    

//     {/* Main Continuous Slideshow Below Title */}
//        <div 
//       className={`transform transition-all duration-1000 delay-500 ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`}
//     >
//       <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-orange-500/20">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-orange-900/20"></div>

//         {/* Continuous Infinite Slideshow */}
//         <div className="relative z-10">
//           <div className="text-center py-8 px-8">
//             <h3 className="text-3xl font-bold text-white mb-3">Our Book Design Portfolio</h3>
//             <p className="text-orange-200 mb-8">Continuously showcasing hundreds of professional book covers</p>

//             {/* First Row - Left-to-Right Scroll, 4–5 Images */}
//             <div className="relative overflow-hidden w-[800px] md:w-[1000px] lg:w-[1200px]">
//               <div
//                 className="flex space-x-6 transition-transform duration-50 ease-linear"
//                 style={{
//                   transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 250)}px)`,
//                   width: `${bookCollection.length * 500}px`, // Total width for all images (tripled for infinite loop)
//                 }}
//               >
//                 {/* Triple the books for seamless loop */}
//                 {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                   <div
//                     key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
//                     className="flex-shrink-0 group cursor-pointer"
//                   >
//                     <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 bg-gray-800 border border-orange-400/30">
//                       <div className="w-40 h-60 relative">
//                         <img
//                           src={book.image || '/placeholder.svg'}
//                           alt={book.title}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                         <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                           <p className="text-white text-sm font-bold truncate">{book.title}</p>
//                           <p className="text-orange-300 text-xs">{book.category}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative overflow-hidden w-[800px] md:w-[1000px] lg:w-[1200px] mt-7">
//               <div
//                 className="flex space-x-6 transition-transform duration-50 ease-linear"
//                 style={{
//                   transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 250)}px)`,
//                   width: `${bookCollection.length * 500}px`, // Total width for all images (tripled for infinite loop)
//                 }}
//               >
//                 {/* Triple the books for seamless loop */}
//                 {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                   <div
//                     key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
//                     className="flex-shrink-0 group cursor-pointer"
//                   >
//                     <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 bg-gray-800 border border-orange-400/30">
//                       <div className="w-40 h-60 relative">
//                         <img
//                           src={book.image || '/placeholder.svg'}
//                           alt={book.title}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                         <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                           <p className="text-white text-sm font-bold truncate">{book.title}</p>
//                           <p className="text-orange-300 text-xs">{book.category}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>











//       {/* Trustpilot Reviews Section */}
//       <section className="py-20 px-4 bg-slate-50" data-aos="fade-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
//             {/* Trustpilot Logo and Rating */}
//             <div className="flex items-center justify-center space-x-3 mb-6">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
//                   <Star className="w-5 h-5 text-white fill-current" />
//                 </div>
//                 <span className="text-2xl font-bold text-slate-900">Trustpilot</span>
//               </div>
//             </div>

//             {/* Star Rating */}
//             <div className="flex justify-center space-x-1 mb-4" data-aos="fade-up" data-aos-delay="300">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <div key={star} className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
//                   <Star className="w-8 h-8 text-white fill-current" />
//                 </div>
//               ))}
//             </div>

//             <div className="text-lg text-slate-700 mb-8" data-aos="fade-up" data-aos-delay="400">
//               <span className="font-bold">TrustScore 4.4</span> | <span className="font-bold">5,329 reviews</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Satisfaction Guarantee Section */}
//       <section
//         className="py-20 px-4 bg-gradient-to-r from-amber-100 to-orange-100 relative overflow-hidden"
//         data-aos="fade-up"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
//             {/* Guarantee Badge */}
//             <div className="relative" data-aos="fade-right" data-aos-delay="200">
//               <div className="w-48 h-48 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
//                 <div className="text-center text-white">
//                   <div className="text-4xl font-bold mb-2">100%</div>
//                   <div className="text-lg font-semibold leading-tight">
//                     SATISFACTION
//                     <br />
//                     GUARANTEE
//                   </div>
//                 </div>
//                 {/* Decorative stars */}
//                 <div className="absolute top-4 left-4">
//                   <Star className="w-4 h-4 text-amber-200 fill-current" />
//                 </div>
//                 <div className="absolute bottom-4 right-4">
//                   <Star className="w-4 h-4 text-amber-200 fill-current" />
//                 </div>
//                 <div className="absolute top-8 right-8">
//                   <Star className="w-3 h-3 text-amber-200 fill-current" />
//                 </div>
//               </div>
//             </div>

//             {/* Guarantee Text */}
//             <div className="text-center lg:text-left max-w-2xl" data-aos="fade-left" data-aos-delay="400">
//               <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Satisfaction guaranteed</h2>
//               <p className="text-xl text-slate-700 mb-6 leading-relaxed">
//                 If you're not thrilled with our work, we'll work with you until you are.
//               </p>
//               {/* <button className="text-slate-900 font-semibold text-lg border-b-2 border-slate-900 hover:border-amber-600 hover:text-amber-600 transition-colors duration-300">
//                 Learn more about our promise
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Continuous Moving Book Strip */}
      
      
//       {/* Client Reviews Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Your success is our top priority</h2>
//             <p className="text-xl text-slate-600">What our clients say about working with us</p>
//           </div>

//           <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-8 lg:p-12">
//             <div className="flex flex-col lg:flex-row items-center gap-12">
//               {/* Book Cover Display */}
//               <div className="flex-shrink-0">
//                 <div className="relative">
//                   <img
//                     src={reviews[currentReview].bookCover || "/placeholder.svg"}
//                     alt="Book Cover"
//                     className="w-64 h-96 object-cover rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
//                   />
//                   <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                     Featured Work
//                   </div>
//                 </div>
//               </div>

//               {/* Review Content */}
//               <div className="flex-1 text-center lg:text-left">
//                 <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
//                   {[...Array(reviews[currentReview].rating)].map((_, i) => (
//                     <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                   ))}
//                 </div>

//                 <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
//                   "{reviews[currentReview].review}"
//                 </blockquote>

//                 <div className="flex items-center justify-center lg:justify-start space-x-4">
//                   <img
//                     src={reviews[currentReview].image || "/placeholder.svg"}
//                     alt={reviews[currentReview].name}
//                     className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
//                   />
//                   <div>
//                     <h4 className="text-lg font-bold text-slate-900">{reviews[currentReview].name}</h4>
//                     <p className="text-slate-600">{reviews[currentReview].title}</p>
//                     <p className="text-amber-600 text-sm font-medium">{reviews[currentReview].project}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex items-center justify-between mt-8">
//               <button
//                 onClick={prevReview}
//                 className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>

//               <div className="flex space-x-2">
//                 {reviews.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentReview(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentReview
//                         ? "bg-amber-600 shadow-lg shadow-amber-600/50"
//                         : "bg-slate-300 hover:bg-slate-400"
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={nextReview}
//                 className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>






















//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-slate-600">Everything you need to know about our book design services</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
//                 >
//                   <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
//                   <div className="flex-shrink-0">
//                     {openFAQ === index ? (
//                       <Minus className="w-5 h-5 text-amber-600" />
//                     ) : (
//                       <Plus className="w-5 h-5 text-slate-400" />
//                     )}
//                   </div>
//                 </button>

//                 {openFAQ === index && (
//                   <div className="px-6 pb-6">
//                     <div className="border-t border-slate-100 pt-4">
//                       <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Interactive Book Showcase */}
//       <section
//         className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
//         data-aos="fade-up"
//       >
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
//           {/* Animated Background Elements */}
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 opacity: 0.1,
//               }}
//             >
//               <div className="w-16 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg shadow-lg transform rotate-12">
//                 <div className="w-full h-2 bg-amber-300 rounded-t-lg"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="relative z-10">
//           <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
//             <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
//               <Book className="w-8 h-8 text-amber-400" />
//               <span>Interactive Book Showcase</span>
//               <Book className="w-8 h-8 text-amber-400" />
//             </h2>
//             <p className="text-slate-300 text-lg">Explore our premium book designs with interactive preview</p>
//           </div>

//           <div className="relative" data-aos="fade-up" data-aos-delay="400">
//             {/* Interactive Book Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 max-w-6xl mx-auto">
//               {bookCollection.slice(0, 12).map((book, index) => (
//                 <div
//                   key={book.id}
//                   className="group relative cursor-pointer transform hover:scale-110 transition-all duration-500"
//                   data-aos="zoom-in"
//                   data-aos-delay={`${500 + index * 50}`}
//                   onClick={() => setCurrentSlide(index)}
//                 >
//                   <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white/20 group-hover:border-amber-400/50">
//                     <img
//                       src={book.image || "/placeholder.svg"}
//                       alt={book.title}
//                       className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                       <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                       <p className="text-amber-200 text-xs">{book.category}</p>
//                     </div>
//                     {index === currentSlide && (
//                       <div className="absolute inset-0 border-4 border-amber-400 rounded-xl animate-pulse"></div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Featured Book Display */}
//             <div className="flex items-center justify-center space-x-6 mb-8">
//               {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
//                 const bookIndex = (currentSlide + offset) % bookCollection.length
//                 const book = bookCollection[bookIndex]
//                 return (
//                   <div
//                     key={book.id}
//                     className={`transition-all duration-1000 transform cursor-pointer ${
//                       offset === 3
//                         ? "scale-125 z-30 shadow-2xl"
//                         : offset === 2 || offset === 4
//                           ? "scale-100 z-20 opacity-80"
//                           : offset === 1 || offset === 5
//                             ? "scale-85 z-10 opacity-60"
//                             : "scale-70 z-0 opacity-40"
//                     }`}
//                     onClick={() => setCurrentSlide(bookIndex)}
//                   >
//                     <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-amber-200 hover:border-amber-400 transition-colors duration-300">
//                       <img
//                         src={book.image || "/placeholder.svg"}
//                         alt={book.title}
//                         className="w-20 h-30 object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   </div>
//                 )
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
//                 <h3 className="text-xl font-bold text-white mb-1">{bookCollection[currentSlide]?.title}</h3>
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
//                       ? "bg-amber-500 shadow-lg shadow-amber-500/50"
//                       : "bg-white/30 hover:bg-white/50"
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
//                 animationDelay: `${Math.random() * 2}s`,
//               }}
//             >
//               <div className="w-6 h-9 bg-white rounded shadow-lg animate-pulse">
//                 <div className="w-full h-1 bg-amber-200 rounded-t"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="max-w-5xl mx-auto text-center relative z-10">

//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Transform Your Story into a<span className="block text-amber-200">Beautiful Book</span>
//           </h2>

//           <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             From manuscript to masterpiece - let our expert designers create a book cover and layout that captures
//             readers' attention and drives sales in today's competitive market.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//              <a
//             href="https://wa.me/+923095204849"
//             target="_blank"
//           >
//             <button
//               onClick={handleStartProject}
//               className="group bg-white text-amber-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//             >
//               <Book className="w-5 h-5" />
//               <span>Start Your Book Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             </a>
//           </div>

//           {/* Mini Book Showcase in CTA */}
//           <div className="flex justify-center space-x-3 opacity-80">
//             {bookCollection.slice(0, 7).map((book, index) => (
//               <div
//                 key={book.id}
//                 className="w-10 h-15 bg-white rounded shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Get In Touch Section */}
      
//       {/* Floating WhatsApp Button */}
//       <div className="fixed bottom-6 right-6 z-50 animate-bounce">
//         <div className="group relative">
//           <a
//             href="https://wa.me/+923095204849"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
//           >
//             {/* <MessageCircle className="w-7 h-7" /> */}
//             <FontAwesomeIcon icon={faWhatsapp} />
//           </a>

//           {/* Tooltip */}
//           <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
//             Chat with us on WhatsApp
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
//           </div>
//         </div>
//       </div>


      
//     </div>
//   )
// }

// export default HomePage






































import { useState, useEffect, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Award,
  BookOpen,
  Palette,
  Zap,
  ArrowRight,
  Sparkles,
  Users,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Book,
  Plus,
  Minus,
  Headphones,
  Edit,
  DollarSign,
  Printer,
  Tablet,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const services = [
  {
    icon: <BookOpen className="w-16 h-16" />,
    title: "eBook Formatting",
    description: "Professional formatting that makes your content shine across all digital platforms",
    features: [
      "KDP eBook Formatting",
      "Print PDF Layout",
      "Children's Book Formatting",
      "Complex Layout Matching",
      "Clickable TOC / Internal Links",
    ],
  },
  {
    icon: <Palette className="w-16 h-16" />,
    title: "Book Cover Design",
    description: "Eye-catching covers that grab attention and drive sales in any genre",
    features: [
      "KDP Paperback Covers",
      "Kindle eBook Covers",
      "Romance Covers",
      "Recipe Book Covers",
      "Fantasy / Fiction Covers",
      "Children's Book Covers",
      "Non-Fiction Covers",
    ],
  },
  {
    icon: <Zap className="w-16 h-16" />,
    title: "Lead Magnet Design",
    description: "Compelling freebies that capture leads and build your audience effectively",
    features: [
      "PDF Checklists",
      "Coaching Workbooks",
      "Clickable Email Freebies",
      "Course Materials",
      "Interactive Designs",
    ],
  },
  {
    icon: <RotateCcw className="w-16 h-16" />,
    title: "Conversion Services",
    description: "Seamless format transitions that preserve quality across all platforms",
    features: [
      "PDF to KPF / Kindle Format",
      "EPUB / MOBI Conversion",
      "Layout Adjustment for Kindle",
      "Print-to-Digital Transition",
    ],
  },
];

const circularServices = [
  {
    id: "book-printing",
    icon: <Printer className="w-12 h-12" />,
    title: "Book Printing",
    path: "/book-printing",
  },
  {
    id: "ebook-publishing",
    icon: <Tablet className="w-12 h-12" />,
    title: "eBook Publishing",
    path: "/ebook-publishing",
  },
  {
    id: "book-editing",
    icon: <Edit className="w-12 h-12" />,
    title: "Book Editing",
    path: "/book-editing",
  },
  {
    id: "book-design",
    icon: <Palette className="w-12 h-12" />,
    title: "Book Design",
    path: "/book-design",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const [isGetInTouchVisible, setIsGetInTouchVisible] = useState(false);
  const getInTouchSectionRef = useRef(null);

  const bookCollection = [
    {
      id: 1,
      title: "Be The Man",
      image: "../public/Home/mockup (4).png",
      category: "Coloring Book",
      genre: "Entertainment",
    },
    {
      id: 2,
      title: "Mudfall - Earth Hunter Jr.",
      image: "../public/Home/mockup4.jpg",
      category: "Fantasy",
      genre: "Fiction",
    },
    {
      id: 3,
      title: "The New Derivative",
      image: "../public/Home/mockup6.jpg",
      category: "Business",
      genre: "Non-Fiction",
    },
    {
      id: 4,
      title: "The Adventure of Little Feet",
      image: "../public/Home/mockupFilecover2.png",
      category: "Children's",
      genre: "Children",
    },
    {
      id: 5,
      title: "Juicing for Authentic Balance",
      image: "../public/Home/mockup_.png",
      category: "Health & Wellness",
      genre: "Lifestyle",
    },
    {
      id: 6,
      title: "Mystery of the Midnight Garden",
      image: "../public/Home/mockup_f2.png",
      category: "Mystery",
      genre: "Fiction",
    },
    {
      id: 7,
      title: "Love in the Digital Age",
      image: "../public/Home/mockup_flat (2).jpg",
      category: "Romance",
      genre: "Fiction",
    },
    {
      id: 8,
      title: "Galactic Warriors",
      image: "/Home/mockup.png",
      category: "Sci-Fi",
      genre: "Fiction",
    },
    {
      id: 9,
      title: "Kitchen Mastery Guide",
      image: "../public/Home/mockup_kindle.png",
      category: "Cookbook",
      genre: "Lifestyle",
    },
    {
      id: 10,
      title: "Mindful Meditation Practices",
      image: "../public/Home/mockup_whiteOutline (2).png",
      category: "Self-Help",
      genre: "Wellness",
    },
    {
      id: 11,
      title: "Digital Marketing Mastery",
      image: "../public/Home/mockup (7).png",
      category: "Business",
      genre: "Marketing",
    },
    {
      id: 12,
      title: "The Art of Photography",
      image: "../public/Home/book mockup (2).jpg",
      category: "Art",
      genre: "Creative",
    },
    {
      id: 13,
      title: "Healthy Living Guide",
      image: "../public/Home/book_cover_mockup_desig.jpg",
      category: "Health",
      genre: "Lifestyle",
    },
    {
      id: 14,
      title: "Space Adventures",
      image: "../public/Home/book_cover_mockup3.jpg",
      category: "Science Fiction",
      genre: "Fiction",
    },
    {
      id: 15,
      title: "Cryptocurrency Explained",
      image: "../public/Home/mockupFilecover2.png",
      category: "Finance",
      genre: "Education",
    },
    {
      id: 16,
      title: "Modern Architecture",
      image: "../public/Home/mockup (8).png",
      category: "Architecture",
      genre: "Design",
    },
    {
      id: 17,
      title: "Yoga for Beginners",
      image: "../public/Home/mockup (7).png",
      category: "Fitness",
      genre: "Health",
    },
    {
      id: 18,
      title: "Travel Photography",
      image: "../public/Home/book mockup (2).jpg",
      category: "Photography",
      genre: "Travel",
    },
  ];



    const bookCollection2 = [
    {
      id: 1,
      title: "Be The Man",
      image: "../public/Home/mockup (4).png",
      category: "Coloring Book",
      genre: "Entertainment",
    },
    {
      id: 2,
      title: "Mudfall - Earth Hunter Jr.",
      image: "../public/Home/mockup4.jpg",
      category: "Fantasy",
      genre: "Fiction",
    }
  ];




  const stats = [
    { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Author, The Mystic Chronicles",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "BookCraft Studio transformed my manuscript into a stunning masterpiece. Their attention to detail and creative vision exceeded all my expectations. The cover design perfectly captures the essence of my fantasy novel.",
      project: "Fantasy Novel Design",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Business Author, Digital Success",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "Professional, timely, and absolutely brilliant work. The team understood my vision immediately and delivered a cover that has significantly boosted my book sales. Highly recommended for any serious author.",
      project: "Business Book Formatting",
    },
    {
      id: 3,
      name: "Emma Davis",
      title: "Children's Author, Little Adventures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "Working with BookCraft Studio was an absolute joy! They brought my children's book to life with vibrant colors and engaging illustrations. My young readers love the visual appeal, and parents appreciate the quality.",
      project: "Children's Book Illustration",
    },
    {
      id: 4,
      name: "David Wilson",
      title: "Mystery Writer, Dark Secrets",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "The atmospheric design they created for my mystery novel is absolutely perfect. It captures the dark, suspenseful mood I was aiming for. Sales have increased dramatically since the new cover launch.",
      project: "Mystery Novel Cover",
    },
  ];

  const faqs = [
    {
      question: "How long does the book design process take?",
      answer:
        "Our typical turnaround time is 5-7 business days for cover design and 7-10 business days for complete formatting. Rush orders can be accommodated for an additional fee. We'll provide you with a detailed timeline based on your specific project requirements.",
    },
    {
      question: "Do you offer revisions if I'm not satisfied?",
      answer:
        "Absolutely! We include up to 3 rounds of revisions with every project to ensure you're completely satisfied with the final result. Additional revisions can be made for a small fee. Your satisfaction is our top priority.",
    },
    {
      question: "What file formats do you provide?",
      answer:
        "We provide all necessary formats including high-resolution print-ready PDFs, Kindle-optimized files (MOBI/KPF), EPUB for other e-readers, and source files (PSD/AI) upon request. You'll receive everything needed for both print and digital publishing.",
    },
    {
      question: "Can you work with my existing manuscript?",
      answer:
        "Yes! We work with manuscripts in various formats including Word documents, PDFs, Google Docs, and more. Our team will review your content and recommend the best approach for formatting and design based on your genre and target audience.",
    },
    {
      question: "Do you offer package deals for multiple services?",
      answer:
        "Yes, we offer comprehensive packages that combine cover design, formatting, and marketing materials at discounted rates. Our most popular package includes cover design, interior formatting, and basic marketing materials for a complete publishing solution.",
    },
    {
      question: "What makes your designs stand out from competitors?",
      answer:
        "Our designs are created by experienced professionals who understand current market trends and genre expectations. We focus on creating covers that not only look beautiful but also drive sales by appealing to your target audience and standing out in crowded marketplaces.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = "smooth";

    // Auto-advance main slideshow (interactive showcase) - longer interval
    const mainInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bookCollection.length);
    }, 5000); // Increased from 3000ms to reduce re-renders

    // Auto-advance reviews
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    // GetInTouch observer
    const getInTouchObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGetInTouchVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (getInTouchSectionRef.current) {
      getInTouchObserver.observe(getInTouchSectionRef.current);
    }

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      clearInterval(mainInterval);
      clearInterval(reviewInterval);
      if (getInTouchSectionRef.current) {
        getInTouchObserver.unobserve(getInTouchSectionRef.current);
      }
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bookCollection.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bookCollection.length) % bookCollection.length);
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleServiceClick = (path) => {
    // window.open(path, "_blank");
      window.location.href = path;
  };

  // Memoized to prevent re-renders
  const FloatingBooks = memo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-200/25 to-amber-200/25 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-float"></div>

      {/* Floating Book Icons */}
      {bookCollection.slice(0, 8).map((book, index) => (
        <div
          key={book.id}
          className={`absolute transition-all duration-[4000ms] transform animate-float`}
          style={{
            left: `${5 + index * 6}%`,
            top: `${10 + (index % 5) * 15}%`,
            animationDelay: `${index * 0.4}s`,
            opacity: 0.08,
          }}
        >
          <div className="w-10 h-14 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-2 bg-amber-400/60 rounded-t-lg"></div>
            <div className="p-1">
              <div className="w-full h-1 bg-amber-300/40 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-amber-300/30 rounded mb-1"></div>
              <div className="w-1/2 h-1 bg-amber-300/20 rounded"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.3,
          }}
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "3s" }} />
        </div>
      ))}
    </div>
  ));

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 5s infinite;
        }
        .animate-pulse-glow {
          animation: pulse 3s infinite;
        }
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-amber-25 via-orange-25 to-yellow-25 relative overflow-x-hidden">
        <FloatingBooks />

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-cream-white/95 backdrop-blur-xl z-50 border-b border-amber-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <BookOpen className="w-10 h-10 text-amber-600" />
                  <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  BookCraft Studio
                </span>
              </div>

              {/* Centered Navigation Links */}
              <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  Home
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, "portfolio")}
                  className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  Portfolio
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  About
                </a>
              </div>

              {/* Contact Information */}
              <div className="hidden lg:flex flex-col text-right text-sm">
                <a
                  href="mailto:shehayrar@gmail.com"
                  target="_blank"
                  className="text-slate-600 hover:text-amber-600 transition-colors duration-300"
                >
                  <button className="mt-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Book publishing
                <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">made beautiful</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                From stunning cover designs to professional formatting, we transform your manuscript into a masterpiece
                that stands out in bookstores and online markets.
              </p>
            </div>

            {/* Optimized Slider with CSS animation */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative bg-white rounded-xl shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-amber-50/30"></div>
                <div className="relative overflow-hidden w-[800px] md:w-[1000px] lg:w-[1200px]">
                  <div
                    className="flex space-x-6 animate-infinite-scroll"
                    style={{ width: `${bookCollection.length * 2 * 200}px` }}
                  >
                    {[...bookCollection, ...bookCollection].map((book, index) => (
                      <div key={index} className="flex-shrink-0 group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
                          <div className="w-48 h-72 relative">
                            <img
                              src={book.image || "/placeholder.svg"}
                              alt={book.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                              <p className="text-white text-sm font-bold truncate">{book.title}</p>
                              <p className="text-amber-200 text-xs">{book.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section
          ref={getInTouchSectionRef}
          className="h-[500px] flex items-center justify-center py-16 px-4"
          style={{
            background: "linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 50%, #f0e6db 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div
              className={`mb-16 transition-all duration-1000 transform ${
                isGetInTouchVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 tracking-tight">Get in touch</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                When you work with <span className="font-semibold text-orange-600">BookCraft Studio</span>, you can expect
                help at every step of the journey. There's a lot to learn, but you can rest assured that our team will
                take care of everything and anything your book might need. When your manuscript is ready, reach out to a
                friendly, helpful Publishing Specialist.
              </p>
            </div>

            {/* CTA Section */}
            <div
              className={`transition-all duration-1000 delay-700 transform ${
                isGetInTouchVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              {/* Or Call Section */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
                <span className="text-gray-600 font-medium">Call</span>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
              </div>

              <a
                href="tel:+923095204849"
                className="inline-flex items-center mt-4 text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300 group"
              >
                <svg
                  className="w-7 h-7 mr-3 transform group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="border-b-2 border-transparent group-hover:border-orange-600 transition-colors duration-300">
                  +92 308 5974310
                </span>
              </a>
            </div>

            {/* Floating elements for visual interest */}
            <div
              className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-1/2 left-5 w-12 h-12 bg-orange-400 rounded-full opacity-15 animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            ></div>
          </div>
        </section>

        {/* Circular Services Section */}
        <section id="services" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Bring Your Book to Life with Our Complete Publishing Solutions
              </h2>
              <p className="text-xl text-slate-600 mb-2">
                <span className="italic">All the tools you need — </span> together, in one seamless platform.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {circularServices.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service.path)}
                  className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-40 h-40 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center mb-4 border-4 border-amber-100 group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-500/20 transition-all duration-300">
                    <div className="text-amber-600 group-hover:text-orange-600 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 text-center group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CreativeHub at a glance */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">CreativeHub at a glance:</h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Stat 1 */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-purple-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">12K+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Creative Projects</h3>
                  <p className="text-gray-600 text-sm">Successfully launched</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-emerald-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">4.9★</span>
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">User Rating</h3>
                  <p className="text-gray-600 text-sm">From 2800+ reviews</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-orange-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">95+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Countries</h3>
                  <p className="text-gray-600 text-sm">Worldwide reach</p>
                </div>
              </div>
            </div>

            {/* Featured In Section */}
            <div className="text-center">
              <div className="inline-block bg-white rounded-full px-6 py-2 shadow-sm mb-8">
                <span className="text-gray-500 text-sm font-medium">Featured in</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                {/* TechCrunch */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">TechCrunch</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Tech News</div>
                </div>

                {/* Wired */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">WIRED</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Technology</div>
                </div>

                {/* Fast Company */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Fast Company</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Business</div>
                </div>

                {/* VentureBeat */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">VentureBeat</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Book Gallery - Optimized with CSS */}
        <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Infinite Book Gallery</h2>
              <p className="text-amber-100">Endless showcase of professional book designs</p>
            </div>

            <div className="relative overflow-hidden w-[1000px] md:w-[1200px] lg:w-[1440px]">
              <div
                className="flex space-x-6 animate-infinite-scroll"
                style={{ width: `${bookCollection.length * 2 * 250}px` }}
              >
                {[...bookCollection, ...bookCollection].map((book, index) => (
                  <div key={index} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                    <div className="w-40 h-60 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-white/30">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-white text-sm font-medium truncate w-40">{book.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Distribution Partners Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Sell your book{" "}
                <span className="italic text-amber-600 relative">
                  everywhere
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 rounded"></div>
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                The largest worldwide print and eBook distribution network is at your fingertips
              </p>
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  BARNES&NOBLE
                </div>
                <div className="text-sm text-slate-500 text-center mt-1">BOOKSELLERS</div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  amazon
                </div>
                <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-1"></div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  Walmart
                  <div className="ml-2 text-amber-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  Target
                  <div className="ml-2 w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  COSTCO
                </div>
                <div className="w-20 h-0.5 bg-blue-600 mx-auto mt-1"></div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors font-mono">
                  Best Buy
                </div>
                <div className="text-xs text-blue-600 text-center mt-1 font-semibold">TECH</div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded mr-2 flex items-center justify-center text-white text-lg">
                    S
                  </div>
                  Shopify
                </div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  eBay
                </div>
                <div className="flex gap-1 justify-center mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  Home Depot
                  <div className="ml-2 w-6 h-6 bg-orange-600 transform rotate-45"></div>
                </div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  IKEA
                </div>
                <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-1"></div>
                <div className="w-6 h-0.5 bg-yellow-500 mx-auto mt-0.5"></div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  CVS
                  <div className="ml-2 text-red-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-sm text-slate-500 text-center mt-1">PHARMACY</div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  Kroger
                </div>
                <div className="w-16 h-0.5 bg-blue-500 mx-auto mt-1"></div>
              </div>

              <div className="group transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
                    E
                  </div>
                  Etsy
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Optimized with CSS */}
        <section id="portfolio" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-orange-900/20"></div>
              <div className="relative z-10">
                <div className="text-center py-8 px-8">
                  <h3 className="text-3xl font-bold text-white mb-3">Our Book Design Portfolio</h3>
                  <p className="text-orange-200 mb-8">Continuously showcasing hundreds of professional book covers</p>

                  {/* First Row */}
                  <div className="relative overflow-hidden w-[800px] md:w-[1000px] lg:w-[1200px]">
                    <div
                      className="flex space-x-6 animate-infinite-scroll"
                      style={{ width: `${bookCollection.length * 2 * 350}px` }}
                    >
                      {[...bookCollection, ...bookCollection].map((book, index) => (
                        <div key={index} className="flex-shrink-0 group cursor-pointer">
                          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 bg-gray-800 border border-orange-400/30">
                            <div className="w-40 h-60 relative">
                              <img
                                src={book.image || "/placeholder.svg"}
                                alt={book.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                <p className="text-white text-sm font-bold truncate">{book.title}</p>
                                <p className="text-orange-300 text-xs">{book.category}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="relative overflow-hidden mt-7 w-[800px] md:w-[1000px] lg:w-[1200px]">
                    <div
                      className="flex space-x-6 animate-infinite-scroll"
                      style={{ width: `${bookCollection2.length * 3 * 350}px` }}
                    >
                      {[...bookCollection2, ...bookCollection2].map((book, index) => (
                        <div key={index} className="flex-shrink-0 group cursor-pointer">
                          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 bg-gray-800 border border-orange-400/30">
                            <div className="w-40 h-60 relative">
                              <img
                                src={book.image || "/placeholder.svg"}
                                alt={book.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                <p className="text-white text-sm font-bold truncate">{book.title}</p>
                                <p className="text-orange-300 text-xs">{book.category}</p>
                              </div>
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
        </section>

        {/* Trustpilot Reviews Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              {/* Trustpilot Logo and Rating */}
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-current" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">Trustpilot</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                    <Star className="w-8 h-8 text-white fill-current" />
                  </div>
                ))}
              </div>

              <div className="text-lg text-slate-700 mb-8">
                <span className="font-bold">TrustScore 4.4</span> | <span className="font-bold">5,329 reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Satisfaction Guarantee Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-100 to-orange-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Guarantee Badge */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-lg font-semibold leading-tight">
                      SATISFACTION
                      <br />
                      GUARANTEE
                    </div>
                  </div>
                  {/* Decorative stars */}
                  <div className="absolute top-4 left-4">
                    <Star className="w-4 h-4 text-amber-200 fill-current" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Star className="w-4 h-4 text-amber-200 fill-current" />
                  </div>
                  <div className="absolute top-8 right-8">
                    <Star className="w-3 h-3 text-amber-200 fill-current" />
                  </div>
                </div>
              </div>

              {/* Guarantee Text */}
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Satisfaction guaranteed</h2>
                <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                  If you're not thrilled with our work, we'll work with you until you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Your success is our top priority</h2>
              <p className="text-xl text-slate-600">What our clients say about working with us</p>
            </div>

            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Book Cover Display */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={reviews[currentReview].bookCover || "/placeholder.svg"}
                      alt="Book Cover"
                      loading="lazy"
                      className="w-64 h-96 object-cover rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Featured Work
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
                    "{reviews[currentReview].review}"
                  </blockquote>

                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <img
                      src={reviews[currentReview].image || "/placeholder.svg"}
                      alt={reviews[currentReview].name}
                      loading="lazy"
                      className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{reviews[currentReview].name}</h4>
                      <p className="text-slate-600">{reviews[currentReview].title}</p>
                      <p className="text-amber-600 text-sm font-medium">{reviews[currentReview].project}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentReview
                          ? "bg-amber-600 shadow-lg shadow-amber-600/50"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Everything you need to know about our book design services</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-slate-100 pt-4">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Book Showcase */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
            {/* Animated Background Elements */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: 0.1,
                }}
              >
                <div className="w-16 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg shadow-lg transform rotate-12">
                  <div className="w-full h-2 bg-amber-300 rounded-t-lg"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                <Book className="w-8 h-8 text-amber-400" />
                <span>Interactive Book Showcase</span>
                <Book className="w-8 h-8 text-amber-400" />
              </h2>
              <p className="text-slate-300 text-lg">Explore our premium book designs with interactive preview</p>
            </div>

            <div className="relative">
              {/* Interactive Book Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 max-w-6xl mx-auto">
                {bookCollection.slice(0, 12).map((book, index) => (
                  <div
                    key={book.id}
                    className="group relative cursor-pointer transform hover:scale-110 transition-all duration-500"
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white/20 group-hover:border-amber-400/50">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        loading="lazy"
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <p className="text-white text-xs font-bold truncate">{book.title}</p>
                        <p className="text-amber-200 text-xs">{book.category}</p>
                      </div>
                      {index === currentSlide && (
                        <div className="absolute inset-0 border-4 border-amber-400 rounded-xl animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Book Display */}
              <div className="flex items-center justify-center space-x-6 mb-8">
                {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
                  const bookIndex = (currentSlide + offset) % bookCollection.length;
                  const book = bookCollection[bookIndex];
                  return (
                    <div
                      key={offset}
                      className={`transition-all duration-1000 transform cursor-pointer ${
                        offset === 3
                          ? "scale-125 z-30 shadow-2xl"
                          : offset === 2 || offset === 4
                          ? "scale-100 z-20 opacity-80"
                          : offset === 1 || offset === 5
                          ? "scale-85 z-10 opacity-60"
                          : "scale-70 z-0 opacity-40"
                      }`}
                      onClick={() => setCurrentSlide(bookIndex)}
                    >
                      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-amber-200 hover:border-amber-400 transition-colors duration-300">
                        <img
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          loading="lazy"
                          className="w-20 h-30 object-cover hover:scale-105 transition-transform duration-300"
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
                  <h3 className="text-xl font-bold text-white mb-1">{bookCollection[currentSlide]?.title}</h3>
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
                        ? "bg-amber-500 shadow-lg shadow-amber-500/50"
                        : "bg-white/30 hover:bg-white/50"
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
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <div className="w-6 h-9 bg-white rounded shadow-lg animate-pulse">
                  <div className="w-full h-1 bg-amber-200 rounded-t"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Transform Your Story into a<span className="block text-amber-200">Beautiful Book</span>
            </h2>

            <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              From manuscript to masterpiece - let our expert designers create a book cover and layout that captures
              readers' attention and drives sales in today's competitive market.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="https://wa.me/+923095204849" target="_blank">
                <button
                  className="group bg-white text-amber-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Book className="w-5 h-5" />
                  <span>Start Your Book Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
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
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="group relative">
            <a
              href="https://wa.me/+923095204849"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            {/* Tooltip */}
            <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
            </div>
          </div>
        </div>

<div className="fixed bottom-6 left-6 z-50 animate-bounce">
  <div className="group relative">
    <a
      href="mailto:shahrayr@gmail.com"
      className="flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </a>

    {/* Tooltip */}
    <div className="absolute bottom-16 left-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
      Send us an Email
      <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
    </div>
  </div>
</div>



        
      </div>
    </>
  );
};

export default HomePage;