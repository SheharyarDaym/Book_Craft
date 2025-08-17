

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Palette, Image, Layout, Brush, ArrowRight, Zap, Shield, Clock, Award, PenTool, Eye, Users, Download, Play, ChevronDown, Layers, Target, Trophy, FileText, Bookmark, Type, Grid, Coffee, Heart, Lightbulb } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from 'react-router-dom';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { ZoomIn, ZoomOut, X, Download } from "lucide-react";

// Import images from bookDesign folder
import bookDesign1 from "/bookDesign/mockup (5).jpg";
import bookDesign2 from "/bookDesign/mockup (6).jpg";
import bookDesign3 from "/bookDesign/mockup (7).jpg";
import bookDesign4 from "/bookDesign/mockup (8).jpg";
import bookDesign5 from "/bookDesign/mockup (9).jpg";
import bookDesign6 from "/bookDesign/mockup (10).jpg";
import bookDesign7 from "/bookDesign/mockup7.jpg";
import bookDesign8 from "/bookDesign/mockup8 (2).jpg";
import bookDesign9 from "/bookDesign/mockupBundle (2).jpg";
import bookDesign10 from "/bookDesign/mockupIMG.jpg";
import bookDesign11 from "/bookDesign/mockup_.jpg";
import bookDesign12 from "/bookDesign/mockup_ (2).jpg";
import bookDesign13 from "/bookDesign/mockup_ (4).jpg";
import bookDesign14 from "/bookDesign/mockup_flat.jpg";
import bookDesign15 from "/bookDesign/mockup__ (2).jpg";

const BookDesignPage = () => {
  const [_activeTab, _setActiveTab] = useState('covers');
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handlePreview = (img) => {
    setSelectedImage(img);
    setZoom(1); // reset zoom when opening
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const handleDownload = (img) => {
    const link = document.createElement("a");
    link.href = img;
    link.download = "book-design.jpg";
    link.click();
  };

  const items = [
    {
      img: bookDesign14,
      title: "Professional Cover Design",
      description: "Clean typography, compelling imagery, genre-appropriate design",
      label: "After",
    },
    {
      img: bookDesign4,
      title: "Beautiful Interior Layout",
      description: "Perfect typography, spacing, and formatting for readability",
      label: "Interior",
    },
    {
      img: bookDesign3,
      title: "Complete Design Package",
      description: "Cover, interior, and marketing materials all designed cohesively",
      label: "Complete",
    },
  ];

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
      { title: "The Silent Echo", genre: "Mystery Thriller", image: bookDesign1, beforeAfter: true },
      { title: "Hearts Entwined", genre: "Romance", image: bookDesign2, beforeAfter: false },
      { title: "Digital Revolution", genre: "Business", image: bookDesign3, beforeAfter: true },
      { title: "Magical Adventures", genre: "Children's Fantasy", image: bookDesign4, beforeAfter: false },
      { title: "Cooking Mastery", genre: "Cookbook", image: bookDesign5, beforeAfter: true },
      { title: "Poetry of Life", genre: "Poetry Collection", image: bookDesign6, beforeAfter: false }
    ],
    interiors: [
      { title: "Chapter Layout Design", description: "Beautiful chapter headers and typography", image: bookDesign7 },
      { title: "Poetry Formatting", description: "Elegant spacing and font selection", image: bookDesign8 },
      { title: "Cookbook Layout", description: "Recipe formatting with images", image: bookDesign9 }
    ]
  };

  const designServices = [
    { icon: <Palette className="w-12 h-12" />, title: "Book Cover Design", description: "Custom covers that capture your book's essence and attract readers at first glance", features: ["Genre-specific design", "Multiple concepts", "Print & digital formats", "Unlimited revisions"], price: "From $399", designExample: bookDesign1 },
    { icon: <Layout className="w-12 h-12" />, title: "Interior Book Design", description: "Professional typography and layout for both print and eBook formats", features: ["Chapter layouts", "Typography selection", "Page formatting", "eBook optimization"], price: "From $299", designExample: bookDesign7 },
    { icon: <Layers className="w-12 h-12" />, title: "Complete Design Package", description: "Full book design solution including cover, interior, and marketing materials", features: ["Cover + Interior", "Marketing graphics", "Author branding", "Print preparation"], price: "From $699", designExample: bookDesign9 }
  ];

  const designProcess = [
    { step: "1", title: "Design Brief & Consultation", description: "We discuss your book's genre, target audience, and design preferences", icon: <Lightbulb className="w-8 h-8" />, designVisual: bookDesign10 },
    { step: "2", title: "Concept Creation", description: "Our designers create multiple unique book cover and interior concepts", icon: <Brush className="w-8 h-8" />, designVisual: bookDesign11 },
    { step: "3", title: "Design Development", description: "Refine chosen concepts with detailed typography and layout work", icon: <Type className="w-8 h-8" />, designVisual: bookDesign12 },
    { step: "4", title: "Revision & Perfection", description: "Collaborate on revisions until your book design is perfect", icon: <Eye className="w-8 h-8" />, designVisual: bookDesign13 },
    { step: "5", title: "Final Delivery", description: "Receive print-ready files and digital formats for all platforms", icon: <Download className="w-8 h-8" />, designVisual: bookDesign14 }
  ];

  const genreShowcase = [
    { genre: "Fiction & Literature", books: [{ title: "Mystery Novel", img: bookDesign1 }, { title: "Romance", img: bookDesign2 }, { title: "Fantasy", img: bookDesign3 }] },
    { genre: "Non-Fiction & Business", books: [{ title: "Business Guide", img: bookDesign4 }, { title: "Self-Help", img: bookDesign5 }, { title: "Biography", img: bookDesign6 }] },
    { genre: "Children's & Educational", books: [{ title: "Picture Book", img: bookDesign10 }, { title: "Educational", img: bookDesign11 }, { title: "Activity Book", img: bookDesign12 }] },
    { genre: "Specialty & Art Books", books: [{ title: "Cookbook", img: bookDesign13 }, { title: "Poetry", img: bookDesign14 }, { title: "Art Book", img: bookDesign15 }] }
  ];
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white">
        

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
  <div className="relative overflow-hidden rounded-lg shadow-lg" data-aos="zoom-in">
    <img
      src={bookDesigns.covers[0].image}   // Just use the first image
      alt={bookDesigns.covers[0].title}
      className="w-full h-96 object-cover" // Increased height for a larger image
    />
    {bookDesigns.covers[0].beforeAfter && (
      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
        New Design
      </div>
    )}
  </div>

  {/* Overlay Text */}
  <div
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
    data-aos="fade-in"
  >
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
        <div
          key={index}
          data-aos="fade-up"
          className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
        >
          {/* Large image (like step 1) */}
          <div className="h-48 overflow-hidden">
            <img
              src={service.designExample}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Card content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-center">{service.description}</p>

            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href="https://wa.me/923001234567" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-orange-50 text-orange-600 px-6 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                  Get Started
                </button>
              </a>
            </div>
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
      <p className="text-lg text-gray-600">
        From concept to completion — a seamless journey to your perfect book design
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-10">
      {designProcess.map((step, index) => (
        <div
          key={index}
          className="text-center flex flex-col items-center"
          data-aos="fade-up"
        >
          {/* Step number */}
          <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6">
            {step.step}
          </div>

          {/* Step image */}
          <div className="w-full h-32 overflow-hidden rounded-xl shadow-md mb-4">
            <img
              src={step.designVisual}
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Step title + description */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Before/After Showcase */}
      <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Design Transformations
          </h2>
          <p className="text-lg text-gray-600">
            See how professional design transforms book covers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: bookDesign14,
              title: "Professional Cover Design",
              description:
                "Clean typography, compelling imagery, genre-appropriate design",
              label: "After",
            },
            {
              img: bookDesign4,
              title: "Beautiful Interior Layout",
              description:
                "Perfect typography, spacing, and formatting for readability",
              label: "Interior",
            },
            {
              img: bookDesign3,
              title: "Complete Design Package",
              description:
                "Cover, interior, and marketing materials all designed cohesively",
              label: "Complete",
            },
          ].map((item, index) => (
            <div key={index} className="text-center" data-aos="fade-up">
              <div className="relative mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.label}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-center gap-4 mt-3">
                <button
                  onClick={() => handlePreview(item.img)}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  <Eye size={16} /> Preview
                </button>
                <button
                  onClick={() => handleDownload(item.img)}
                  className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                  <Download size={16} /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
            >
              <X size={20} />
            </button>

            {/* Zoom Controls */}
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setZoom((z) => z + 0.2)}
                className="bg-white px-3 py-2 rounded shadow hover:bg-gray-200"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
                className="bg-white px-3 py-2 rounded shadow hover:bg-gray-200"
              >
                <ZoomOut size={20} />
              </button>
            </div>

            {/* Image */}
            <div className="overflow-auto max-h-[75vh]">
              <img
                src={selectedImage}
                alt="Preview"
                style={{ transform: `scale(${zoom})`, transition: "transform 0.2s" }}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>

      {/* CTA Section with Book Mockups */}

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
