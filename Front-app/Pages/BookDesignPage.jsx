// import { useState, useEffect } from 'react';
// import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Palette, Image, Layout, Brush, ArrowRight, Zap, Shield, Clock, Award, PenTool, Eye, Users, Download, Play, ChevronDown, Layers, Target, Trophy, FileText, Bookmark, Type, Grid, Coffee, Heart, Lightbulb } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const BookDesignPage = () => {
//   const [activeTab, setActiveTab] = useState('covers');

//   useEffect(() => {
//     AOS.init({
//       duration: 800,         // Animation duration in milliseconds
//       easing: 'ease-in-out', // Smooth easing for animations
//       once: true,            // Animations trigger only once when scrolled into view
//     });
//   }, []);

//   const bookDesigns = {
//     covers: [
//       { title: "The Silent Echo", genre: "Mystery Thriller", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop", beforeAfter: true },
//       { title: "Hearts Entwined", genre: "Romance", image: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=200&h=300&fit=crop", beforeAfter: false },
//       { title: "Digital Revolution", genre: "Business", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=300&fit=crop", beforeAfter: true },
//       { title: "Magical Adventures", genre: "Children's Fantasy", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop", beforeAfter: false },
//       { title: "Cooking Mastery", genre: "Cookbook", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop", beforeAfter: true },
//       { title: "Poetry of Life", genre: "Poetry Collection", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop", beforeAfter: false }
//     ],
//     interiors: [
//       { title: "Chapter Layout Design", description: "Beautiful chapter headers and typography", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
//       { title: "Poetry Formatting", description: "Elegant spacing and font selection", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop" },
//       { title: "Cookbook Layout", description: "Recipe formatting with images", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" }
//     ]
//   };

//   const designServices = [
//     { icon: <Palette className="w-12 h-12" />, title: "Book Cover Design", description: "Custom covers that capture your book's essence and attract readers at first glance", features: ["Genre-specific design", "Multiple concepts", "Print & digital formats", "Unlimited revisions"], price: "From $399", designExample: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=200&fit=crop" },
//     { icon: <Layout className="w-12 h-12" />, title: "Interior Book Design", description: "Professional typography and layout for both print and eBook formats", features: ["Chapter layouts", "Typography selection", "Page formatting", "eBook optimization"], price: "From $299", designExample: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop" },
//     { icon: <Layers className="w-12 h-12" />, title: "Complete Design Package", description: "Full book design solution including cover, interior, and marketing materials", features: ["Cover + Interior", "Marketing graphics", "Author branding", "Print preparation"], price: "From $699", designExample: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=150&h=200&fit=crop" }
//   ];

//   const designProcess = [
//     { step: "1", title: "Design Brief & Consultation", description: "We discuss your book's genre, target audience, and design preferences", icon: <Lightbulb className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=100&h=100&fit=crop" },
//     { step: "2", title: "Concept Creation", description: "Our designers create multiple unique book cover and interior concepts", icon: <Brush className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop" },
//     { step: "3", title: "Design Development", description: "Refine chosen concepts with detailed typography and layout work", icon: <Type className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=100&h=100&fit=crop" },
//     { step: "4", title: "Revision & Perfection", description: "Collaborate on revisions until your book design is perfect", icon: <Eye className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
//     { step: "5", title: "Final Delivery", description: "Receive print-ready files and digital formats for all platforms", icon: <Download className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=100&fit=crop" }
//   ];

//   const genreShowcase = [
//     { genre: "Fiction & Literature", books: [{ title: "Mystery Novel", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&h=160&fit=crop" }, { title: "Romance", img: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=120&h=160&fit=crop" }, { title: "Fantasy", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=160&fit=crop" }] },
//     { genre: "Non-Fiction & Business", books: [{ title: "Business Guide", img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=120&h=160&fit=crop" }, { title: "Self-Help", img: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=120&h=160&fit=crop" }, { title: "Biography", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=160&fit=crop" }] },
//     { genre: "Children's & Educational", books: [{ title: "Picture Book", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=160&fit=crop" }, { title: "Educational", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&h=160&fit=crop" }, { title: "Activity Book", img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=120&h=160&fit=crop" }] },
//     { genre: "Specialty & Art Books", books: [{ title: "Cookbook", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=160&fit=crop" }, { title: "Poetry", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=120&h=160&fit=crop" }, { title: "Art Book", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=120&h=160&fit=crop" }] }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-orange-100 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-3">
//               <button className="p-2 hover:bg-orange-50 rounded-lg transition-colors">
//                 <ArrowLeft className="w-5 h-5 text-gray-600" />
//               </button>
//               <div className="flex items-center space-x-2">
//                 <BookOpen className="w-8 h-8 text-orange-500" />
//                 <span className="text-xl font-bold text-orange-500">BookBaby Design Studio</span>
//               </div>
//             </div>
//             <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
//               Design My Book
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Book Designs */}
//       <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6" data-aos="fade-up">
//                 <Palette className="w-4 h-4 text-orange-600" />
//                 <span className="text-orange-700 text-sm font-medium">Professional Book Design Services</span>
//               </div>
//               <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up">
//                 Transform Your Book Into a
//                 <span className="block text-orange-500">Design Masterpiece</span>
//               </h1>
//               <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
//                 Professional book cover design, interior formatting, and complete publishing design solutions that make your book irresistible to readers.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
//                 <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
//                   <Brush className="w-5 h-5" />
//                   <span>Start Book Design</span>
//                 </button>
//                 <button className="border border-orange-300 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
//                   View Design Portfolio
//                 </button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="grid grid-cols-3 gap-4">
//                 {bookDesigns.covers.slice(0, 6).map((book, index) => (
//                   <div key={index} className="group relative transform hover:scale-105 transition-transform duration-300" data-aos="zoom-in">
//                     <div className="relative overflow-hidden rounded-lg shadow-lg">
//                       <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
//                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                         <div className="text-white text-center">
//                           <Eye className="w-6 h-6 mx-auto mb-2" />
//                           <p className="text-xs font-medium">{book.genre}</p>
//                         </div>
//                       </div>
//                     </div>
//                     {book.beforeAfter && (
//                       <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//                         New Design
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none" data-aos="fade-in">
//                 <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                   10,000+ Books Designed
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Book Design Services */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12" data-aos="fade-up">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Book Design Services</h2>
//             <p className="text-lg text-gray-600">From cover to interior, we design every aspect of your book</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {designServices.map((service, index) => (
//               <div key={index} className="bg-white border border-orange-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="text-orange-500">{service.icon}</div>
//                   <img src={service.designExample} alt="Design example" className="w-12 h-16 object-cover rounded shadow-md" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <ul className="space-y-2 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
//                       <Check className="w-4 h-4 text-orange-500" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="flex items-center justify-between">
//                   <span className="text-orange-600 font-bold text-lg">{service.price}</span>
//                   <button className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors">
//                     Get Started
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Design Portfolio Tabs */}
//       <section className="py-16 px-6 bg-orange-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12" data-aos="fade-up">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Book Design Portfolio</h2>
//             <p className="text-lg text-gray-600">See the quality and variety of our book design work</p>
//           </div>
//           <div className="flex justify-center mb-8">
//             <div className="bg-white rounded-lg p-1 shadow-md">
//               <button onClick={() => setActiveTab('covers')} className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'covers' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}>
//                 Book Covers
//               </button>
//               <button onClick={() => setActiveTab('interiors')} className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'interiors' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}>
//                 Interior Design
//               </button>
//             </div>
//           </div>
//           {activeTab === 'covers' && (
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//               {bookDesigns.covers.map((book, index) => (
//                 <div key={index} className="group cursor-pointer" data-aos="fade-in">
//                   <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                     <img src={book.image} alt={book.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                       <div className="text-white text-center">
//                         <p className="font-bold text-sm mb-1">{book.title}</p>
//                         <p className="text-xs">{book.genre}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeTab === 'interiors' && (
//             <div className="grid md:grid-cols-3 gap-8">
//               {bookDesigns.interiors.map((interior, index) => (
//                 <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow" data-aos="fade-in">
//                   <img src={interior.image} alt={interior.title} className="w-full h-48 object-cover" />
//                   <div className="p-6">
//                     <h3 className="font-bold text-gray-900 mb-2">{interior.title}</h3>
//                     <p className="text-gray-600 text-sm">{interior.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Genre-Specific Designs */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12" data-aos="fade-up">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Designs for Every Genre</h2>
//             <p className="text-lg text-gray-600">Specialized design expertise across all book categories</p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {genreShowcase.map((genre, index) => (
//               <div key={index} className="text-center" data-aos="fade-up">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">{genre.genre}</h3>
//                 <div className="grid grid-cols-3 gap-2 mb-4">
//                   {genre.books.map((book, bookIndex) => (
//                     <div key={bookIndex} className="group cursor-pointer">
//                       <img src={book.img} alt={book.title} className="w-full h-20 object-cover rounded shadow-md group-hover:scale-105 transition-transform duration-300" />
//                     </div>
//                   ))}
//                 </div>
//                 <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
//                   View More Designs →
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Design Process with Visuals */}
//       <section className="py-16 px-6 bg-orange-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12" data-aos="fade-up">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Book Design Process</h2>
//             <p className="text-lg text-gray-600">From concept to completion - how we create stunning book designs</p>
//           </div>
//           <div className="grid md:grid-cols-5 gap-8">
//             {designProcess.map((step, index) => (
//               <div key={index} className="text-center" data-aos="fade-up">
//                 <div className="relative mb-6">
//                   <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg mb-4">
//                     {step.step}
//                   </div>
//                   <img src={step.designVisual} alt={step.title} className="w-12 h-12 object-cover rounded-full mx-auto border-4 border-white shadow-md" />
//                   {index < designProcess.length - 1 && (
//                     <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-orange-300"></div>
//                   )}
//                 </div>
//                 <div className="text-orange-500 mb-3 flex justify-center">{step.icon}</div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
//                 <p className="text-gray-600 text-sm">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Before/After Showcase */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12" data-aos="fade-up">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Design Transformations</h2>
//             <p className="text-lg text-gray-600">See how professional design transforms book covers</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop", title: "Professional Cover Design", description: "Clean typography, compelling imagery, genre-appropriate design", label: "After" },
//               { img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop", title: "Beautiful Interior Layout", description: "Perfect typography, spacing, and formatting for readability", label: "Interior" },
//               { img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=300&fit=crop", title: "Complete Design Package", description: "Cover, interior, and marketing materials all designed cohesively", label: "Complete" }
//             ].map((item, index) => (
//               <div key={index} className="text-center" data-aos="fade-up">
//                 <div className="relative mb-4">
//                   <img src={item.img} alt={item.title} className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto" />
//                   <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                     {item.label}
//                   </div>
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Book Mockups */}
//       <section className="py-16 px-6 bg-orange-500 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="grid grid-cols-6 gap-4 transform rotate-12 scale-150">
//             {Array.from({ length: 24 }).map((_, i) => (
//               <div key={i} className="w-16 h-20 bg-white rounded shadow-md"></div>
//             ))}
//           </div>
//         </div>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-6" data-aos="fade-up">Ready to Design Your Book?</h2>
//           <p className="text-xl text-orange-100 mb-8" data-aos="fade-up" data-aos-delay="200">
//             Join over 10,000 authors who chose BookBaby for professional book design services that get results.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" data-aos="fade-up" data-aos-delay="400">
//             <button className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2">
//               <Brush className="w-5 h-5" />
//               <span>Start My Book Design</span>
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-500 transition-colors">
//               View Design Packages
//             </button>
//           </div>
//           <div className="flex items-center justify-center space-x-8 text-orange-100" data-aos="fade-up" data-aos-delay=" W">
//             <div className="flex items-center space-x-2">
//               <Shield className="w-5 h-5" />
//               <span>100% Satisfaction Guarantee</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Clock className="w-5 h-5" />
//               <span>5-7 Day Delivery</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating WhatsApp Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <div className="group relative">
//           <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
//             <MessageCircle className="w-7 h-7" />
//           </a>
//           <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//             Discuss Your Book Design
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDesignPage;

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Palette, Image, Layout, Brush, ArrowRight, Zap, Shield, Clock, Award, PenTool, Eye, Users, Download, Play, ChevronDown, Layers, Target, Trophy, FileText, Bookmark, Type, Grid, Coffee, Heart, Lightbulb } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from 'react-router-dom';

const BookDesignPage = () => {
  const [activeTab, setActiveTab] = useState('covers');

  useEffect(() => {
      window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const bookDesigns = {
    covers: [
      { title: "The Silent Echo", genre: "Mystery Thriller", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop", beforeAfter: true },
      { title: "Hearts Entwined", genre: "Romance", image: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=200&h=300&fit=crop", beforeAfter: false },
      { title: "Digital Revolution", genre: "Business", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=300&fit=crop", beforeAfter: true },
      { title: "Magical Adventures", genre: "Children's Fantasy", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop", beforeAfter: false },
      { title: "Cooking Mastery", genre: "Cookbook", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop", beforeAfter: true },
      { title: "Poetry of Life", genre: "Poetry Collection", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop", beforeAfter: false }
    ],
    interiors: [
      { title: "Chapter Layout Design", description: "Beautiful chapter headers and typography", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      { title: "Poetry Formatting", description: "Elegant spacing and font selection", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop" },
      { title: "Cookbook Layout", description: "Recipe formatting with images", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" }
    ]
  };

  const designServices = [
    { icon: <Palette className="w-12 h-12" />, title: "Book Cover Design", description: "Custom covers that capture your book's essence and attract readers at first glance", features: ["Genre-specific design", "Multiple concepts", "Print & digital formats", "Unlimited revisions"], price: "From $399", designExample: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=200&fit=crop" },
    { icon: <Layout className="w-12 h-12" />, title: "Interior Book Design", description: "Professional typography and layout for both print and eBook formats", features: ["Chapter layouts", "Typography selection", "Page formatting", "eBook optimization"], price: "From $299", designExample: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop" },
    { icon: <Layers className="w-12 h-12" />, title: "Complete Design Package", description: "Full book design solution including cover, interior, and marketing materials", features: ["Cover + Interior", "Marketing graphics", "Author branding", "Print preparation"], price: "From $699", designExample: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=150&h=200&fit=crop" }
  ];

  const designProcess = [
    { step: "1", title: "Design Brief & Consultation", description: "We discuss your book's genre, target audience, and design preferences", icon: <Lightbulb className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=100&h=100&fit=crop" },
    { step: "2", title: "Concept Creation", description: "Our designers create multiple unique book cover and interior concepts", icon: <Brush className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop" },
    { step: "3", title: "Design Development", description: "Refine chosen concepts with detailed typography and layout work", icon: <Type className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=100&h=100&fit=crop" },
    { step: "4", title: "Revision & Perfection", description: "Collaborate on revisions until your book design is perfect", icon: <Eye className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { step: "5", title: "Final Delivery", description: "Receive print-ready files and digital formats for all platforms", icon: <Download className="w-8 h-8" />, designVisual: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=100&fit=crop" }
  ];

  const genreShowcase = [
    { genre: "Fiction & Literature", books: [{ title: "Mystery Novel", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&h=160&fit=crop" }, { title: "Romance", img: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=120&h=160&fit=crop" }, { title: "Fantasy", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=160&fit=crop" }] },
    { genre: "Non-Fiction & Business", books: [{ title: "Business Guide", img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=120&h=160&fit=crop" }, { title: "Self-Help", img: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=120&h=160&fit=crop" }, { title: "Biography", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=160&fit=crop" }] },
    { genre: "Children's & Educational", books: [{ title: "Picture Book", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=160&fit=crop" }, { title: "Educational", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&h=160&fit=crop" }, { title: "Activity Book", img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=120&h=160&fit=crop" }] },
    { genre: "Specialty & Art Books", books: [{ title: "Cookbook", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=160&fit=crop" }, { title: "Poetry", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=120&h=160&fit=crop" }, { title: "Art Book", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=120&h=160&fit=crop" }] }
  ];
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
        <nav className="fixed top-0 w-full bg-cream-white/95 backdrop-blur-xl z-50 border-b border-amber-200/50 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                  {/* Logo */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => navigate('/')}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                    >
                      <ArrowLeft className="w-6 h-6 text-slate-600" />
                    </button>
      
                    <div className="relative">
                      <BookOpen className="w-10 h-10 text-amber-600" />
                      <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      BookCraft Studio
                    </span>
                  </div>
      
                  
                </div>
              </div>
            </nav>

      {/* Hero Section with Book Designs */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up">
                Transform Your Book Into a
                <span className="block text-orange-500">Design Masterpiece</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
                Professional book cover design, interior formatting, and complete publishing design solutions that make your book irresistible to readers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                <a
                    href="https://wa.me/923001234567" // Replace with your WhatsApp number
                    target="_blank"
                  >
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                  <Brush className="w-5 h-5" />
                  <span>Start Book Design</span>
                </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {bookDesigns.covers.slice(0, 6).map((book, index) => (
                  <div key={index} className="relative" data-aos="zoom-in">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
                    </div>
                    {book.beforeAfter && (
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        New Design
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" data-aos="fade-in">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  10,000+ Books Designed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Design Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Book Design Services</h2>
            <p className="text-lg text-gray-600">From cover to interior, we design every aspect of your book</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="bg-white border border-orange-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-orange-500">{service.icon}</div>
                  <img src={service.designExample} alt="Design example" className="w-12 h-16 object-cover rounded shadow-md" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  {/* <span className="text-orange-600 font-bold text-lg">{service.price}</span> */}
                  <a
                    href="https://wa.me/923001234567" // Replace with your WhatsApp number
                    target="_blank"
                  >
                  <button className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                    Get Started
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Portfolio Tabs */}

      {/* Genre-Specific Designs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Designs for Every Genre</h2>
            <p className="text-lg text-gray-600">Specialized design expertise across all book categories</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {genreShowcase.map((genre, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{genre.genre}</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {genre.books.map((book, bookIndex) => (
                    <div key={bookIndex}>
                      <img src={book.img} alt={book.title} className="w-full h-20 object-cover rounded shadow-md" />
                    </div>
                  ))}
                </div>
                {/* <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                  View More Designs →
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process with Visuals */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Book Design Process</h2>
            <p className="text-lg text-gray-600">From concept to completion - how we create stunning book designs</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg mb-4">
                    {step.step}
                  </div>
                  <img src={step.designVisual} alt={step.title} className="w-12 h-12 object-cover rounded-full mx-auto border-4 border-white shadow-md" />
                  {index < designProcess.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-orange-300"></div>
                  )}
                </div>
                <div className="text-orange-500 mb-3 flex justify-center">{step.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Design Transformations</h2>
            <p className="text-lg text-gray-600">See how professional design transforms book covers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop", title: "Professional Cover Design", description: "Clean typography, compelling imagery, genre-appropriate design", label: "After" },
              { img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop", title: "Beautiful Interior Layout", description: "Perfect typography, spacing, and formatting for readability", label: "Interior" },
              { img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=300&fit=crop", title: "Complete Design Package", description: "Cover, interior, and marketing materials all designed cohesively", label: "Complete" }
            ].map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <div className="relative mb-4">
                  <img src={item.img} alt={item.title} className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto" />
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.label}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Book Mockups */}
      <section className="py-16 px-6 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-4 transform rotate-12 scale-150">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-16 h-20 bg-white rounded shadow-md"></div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6" data-aos="fade-up">Ready to Design Your Book?</h2>
          <p className="text-xl text-orange-100 mb-8" data-aos="fade-up" data-aos-delay="200">
            Join over 10,000 authors who chose BookCraft for professional book design services that get results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" data-aos="fade-up" data-aos-delay="400">
            <a
                    href="https://wa.me/923001234567" // Replace with your WhatsApp number
                    target="_blank"
                  >
            <button className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2">
              <Brush className="w-5 h-5" />
              <span>Start My Book Design</span>
            </button>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 text-orange-100" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>5-7 Day Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
         <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <div className="group relative">
          <a
            href="https://wa.me/+923085974310"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            {/* <MessageCircle className="w-7 h-7" /> */}
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDesignPage;