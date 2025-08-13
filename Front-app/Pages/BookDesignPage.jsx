

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Palette, Image, Layout, Brush, ArrowRight, Zap, Shield, Clock, Award, PenTool, Eye, Users, Download, Play, ChevronDown, Layers, Target, Trophy, FileText, Bookmark, Type, Grid, Coffee, Heart, Lightbulb } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from 'react-router-dom';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      { title: "The Silent Echo", genre: "Mystery Thriller", image: "/bookDesign/mockup (5).jpg", beforeAfter: true },
      { title: "Hearts Entwined", genre: "Romance", image: "/bookDesign/mockup (6).jpg", beforeAfter: false },
      { title: "Digital Revolution", genre: "Business", image: "/bookDesign/mockup (7).jpg", beforeAfter: true },
      { title: "Magical Adventures", genre: "Children's Fantasy", image: "/bookDesign/mockup (8).jpg", beforeAfter: false },
      { title: "Cooking Mastery", genre: "Cookbook", image: "/bookDesign/mockup (9).jpg", beforeAfter: true },
      { title: "Poetry of Life", genre: "Poetry Collection", image: "/bookDesign/mockup (10).jpg", beforeAfter: false }
    ],
    interiors: [
      { title: "Chapter Layout Design", description: "Beautiful chapter headers and typography", image: "/bookDesign/mockup7.jpg" },
      { title: "Poetry Formatting", description: "Elegant spacing and font selection", image: "/bookDesign/mockup8 (2).jpg" },
      { title: "Cookbook Layout", description: "Recipe formatting with images", image: "/bookDesign/mockupBundle (2).jpg" }
    ]
  };

  const designServices = [
    { icon: <Palette className="w-12 h-12" />, title: "Book Cover Design", description: "Custom covers that capture your book's essence and attract readers at first glance", features: ["Genre-specific design", "Multiple concepts", "Print & digital formats", "Unlimited revisions"], price: "From $399", designExample: "/bookDesign/mockup (5).jpg" },
    { icon: <Layout className="w-12 h-12" />, title: "Interior Book Design", description: "Professional typography and layout for both print and eBook formats", features: ["Chapter layouts", "Typography selection", "Page formatting", "eBook optimization"], price: "From $299", designExample: "/bookDesign/mockup7.jpg" },
    { icon: <Layers className="w-12 h-12" />, title: "Complete Design Package", description: "Full book design solution including cover, interior, and marketing materials", features: ["Cover + Interior", "Marketing graphics", "Author branding", "Print preparation"], price: "From $699", designExample: "/bookDesign/mockupBundle (2).jpg" }
  ];

  const designProcess = [
    { step: "1", title: "Design Brief & Consultation", description: "We discuss your book's genre, target audience, and design preferences", icon: <Lightbulb className="w-8 h-8" />, designVisual: "/bookDesign/mockupIMG.jpg" },
    { step: "2", title: "Concept Creation", description: "Our designers create multiple unique book cover and interior concepts", icon: <Brush className="w-8 h-8" />, designVisual: "/bookDesign/mockup_.jpg" },
    { step: "3", title: "Design Development", description: "Refine chosen concepts with detailed typography and layout work", icon: <Type className="w-8 h-8" />, designVisual: "/bookDesign/mockup_ (2).jpg" },
    { step: "4", title: "Revision & Perfection", description: "Collaborate on revisions until your book design is perfect", icon: <Eye className="w-8 h-8" />, designVisual: "/bookDesign/mockup_ (4).jpg" },
    { step: "5", title: "Final Delivery", description: "Receive print-ready files and digital formats for all platforms", icon: <Download className="w-8 h-8" />, designVisual: "/bookDesign/mockup_flat.jpg" }
  ];

  const genreShowcase = [
    { genre: "Fiction & Literature", books: [{ title: "Mystery Novel", img: "/bookDesign/mockup (5).jpg" }, { title: "Romance", img: "/bookDesign/mockup (6).jpg" }, { title: "Fantasy", img: "/bookDesign/mockup (7).jpg" }] },
    { genre: "Non-Fiction & Business", books: [{ title: "Business Guide", img: "/bookDesign/mockup (8).jpg" }, { title: "Self-Help", img: "/bookDesign/mockup (9).jpg" }, { title: "Biography", img: "/bookDesign/mockup (10).jpg" }] },
    { genre: "Children's & Educational", books: [{ title: "Picture Book", img: "/bookDesign/mockupIMG.jpg" }, { title: "Educational", img: "/bookDesign/mockup_.jpg" }, { title: "Activity Book", img: "/bookDesign/mockup_ (2).jpg" }] },
    { genre: "Specialty & Art Books", books: [{ title: "Cookbook", img: "/bookDesign/mockup_ (4).jpg" }, { title: "Poetry", img: "/bookDesign/mockup_flat.jpg" }, { title: "Art Book", img: "/bookDesign/mockup__ (2).jpg" }] }
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
              { img: "/bookDesign/mockup_flat.jpg", title: "Professional Cover Design", description: "Clean typography, compelling imagery, genre-appropriate design", label: "After" },
              { img: "/bookDesign/mockup (8).jpg", title: "Beautiful Interior Layout", description: "Perfect typography, spacing, and formatting for readability", label: "Interior" },
              { img: "/bookDesign/mockup (7).jpg", title: "Complete Design Package", description: "Cover, interior, and marketing materials all designed cohesively", label: "Complete" }
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
            href="https://wa.me/+923095204849"
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
  );
};

export default BookDesignPage;
