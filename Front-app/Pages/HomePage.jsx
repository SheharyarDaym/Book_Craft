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
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import bookPrinting1 from "/mockup (13).jpg";
import bookPrinting2 from "../public/mockupSocialMedia (2).jpg";
import bookPrinting3 from "/mockup_ (5).jpg";
import bookPrinting4 from "/bookcover_mockup.jpg";

import Satisfaction from "../public/Satisfaction.png"

// Import images from Home folder
import homeImage1 from "/Home/mockup (4).png";
import homeImage2 from "/Home/mockup4.jpg";
import homeImage3 from "/Home/mockup6.jpg";
import homeImage4 from "/Home/mockupFilecover2.png";
import homeImage5 from "/Home/mockup_.png";
import homeImage6 from "/Home/mockup_f2.png";
import homeImage7 from "/Home/mockup_flat (2).jpg";
import homeImage8 from "/Home/mockup.png";
import homeImage9 from "/Home/mockup_kindle.png";
import homeImage10 from "/Home/mockup_whiteOutline (2).png";
import homeImage11 from "/Home/mockup (7).png";
import homeImage12 from "/Home/book mockup (2).jpg";
import homeImage13 from "/Home/book_cover_mockup_desig.jpg";
import homeImage14 from "/Home/book_cover_mockup3.jpg";
import homeImage15 from "/Home/mockup (8).png";



// Import images from Home_2 folder
import home2Image1 from "/Home_2/mockup (2).png";
import home2Image2 from "/Home_2/mockup (3).png";
import home2Image3 from "/Home_2/mockup (11).png";
import home2Image4 from "/Home_2/mockup_ (2).png";
import home2Image5 from "/Home_2/mockup_ (6).png";
import home2Image6 from "/Home_2/mockup_ (7).png";
import home2Image7 from "/Home_2/mockup_f.png";
import home2Image8 from "/Home_2/mockup_f (2).png";
import home2Image9 from "/Home_2/mockup_f2 (2).png";
import home2Image10 from "/Home_2/mockup_acx (2).png";
import home2Image11 from "/Home_2/mockupFile (2).png";
import home2Image12 from "/Home_2/mockupFilecover2 (2).png";
import home2Image13 from "/Home_2/mockup_kindle (3).png";
import home2Image14 from "/Home_2/mockup_socialMedia.png";
import home2Image15 from "/Home_2/mockupKit (2).png";




const printGallery = [
  {
    src: bookPrinting3,
    alt: "Book printing process",
  },
  {
    src: bookPrinting2,
    alt: "Finished books",
  },
  {
    src: bookPrinting1,
    alt: "Hardcover books",
  },
  {
    src: bookPrinting4,
    alt: "Colorful books",
  },
];


const getInTouch = [
  {
    src: homeImage1,
    alt: "Mockup design 1",
  },
  {
    src: homeImage2,
    alt: "Mockup design 2",
  },
  {
    src: homeImage3,
    alt: "Mockup design 3",
  },
  {
    src: homeImage4,
    alt: "Mockup file cover",
  },
];


const _services = [
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
  const _navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const [isGetInTouchVisible, setIsGetInTouchVisible] = useState(false);
  const getInTouchSectionRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false, // animate only once
    threshold: 0.3,    // start when 30% of the section is visible
  });



  const bookCollection = [
    {
      id: 1,
      title: "Be The Man",
      image: homeImage1,
      category: "Coloring Book",
      genre: "Entertainment",
    },
    {
      id: 2,
      title: "Mudfall - Earth Hunter Jr.",
      image: homeImage2,
      category: "Fantasy",
      genre: "Fiction",
    },
    {
      id: 3,
      title: "The New Derivative",
      image: homeImage3,
      category: "Business",
      genre: "Non-Fiction",
    },
    {
      id: 4,
      title: "The Adventure of Little Feet",
      image: homeImage4,
      category: "Children's",
      genre: "Children",
    },
    {
      id: 5,
      title: "Juicing for Authentic Balance",
      image: homeImage5,
      category: "Health & Wellness",
      genre: "Lifestyle",
    },
    {
      id: 6,
      title: "Mystery of the Midnight Garden",
      image: homeImage6,
      category: "Mystery",
      genre: "Fiction",
    },
    {
      id: 7,
      title: "Love in the Digital Age",
      image: homeImage7,
      category: "Romance",
      genre: "Fiction",
    },
    {
      id: 8,
      title: "Galactic Warriors",
      image: homeImage8,
      category: "Sci-Fi",
      genre: "Fiction",
    },
    {
      id: 9,
      title: "Kitchen Mastery Guide",
      image: homeImage9,
      category: "Cookbook",
      genre: "Lifestyle",
    },
    {
      id: 10,
      title: "Mindful Meditation Practices",
      image: homeImage10,
      category: "Self-Help",
      genre: "Wellness",
    },
    {
      id: 11,
      title: "Digital Marketing Mastery",
      image: homeImage11,
      category: "Business",
      genre: "Marketing",
    },
    {
      id: 12,
      title: "The Art of Photography",
      image: homeImage12,
      category: "Art",
      genre: "Creative",
    },
    {
      id: 13,
      title: "Healthy Living Guide",
      image: homeImage13,
      category: "Health",
      genre: "Lifestyle",
    },
    {
      id: 14,
      title: "Space Adventures",
      image: homeImage14,
      category: "Science Fiction",
      genre: "Fiction",
    },
    {
      id: 15,
      title: "Cryptocurrency Explained",
      image: homeImage15,
      category: "Finance",
      genre: "Education",
    },
    {
      id: 16,
      title: "Modern Architecture",
      image: homeImage15,
      category: "Architecture",
      genre: "Design",
    },
    {
      id: 17,
      title: "Yoga for Beginners",
      image: homeImage11,
      category: "Fitness",
      genre: "Health",
    },
    {
      id: 18,
      title: "Travel Photography",
      image: homeImage12,
      category: "Photography",
      genre: "Travel",
    },
  ];

  const bookCollection2 = [
    {
      id: 1,
      title: "Be The Man",
      image: homeImage1,
      category: "Coloring Book",
      genre: "Entertainment",
    },
    {
      id: 2,
      title: "Mudfall - Earth Hunter Jr.",
      image: homeImage2,
      category: "Fantasy",
      genre: "Fiction",
    },
    {
      id: 3,
      title: "Mockup Collection 1",
      image: home2Image1,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 4,
      title: "Mockup Collection 2",
      image: home2Image2,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 5,
      title: "Mockup Collection 3",
      image: home2Image3,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 6,
      title: "Mockup Collection 4",
      image: home2Image4,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 7,
      title: "Mockup Collection 5",
      image: home2Image5,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 8,
      title: "Mockup Collection 6",
      image: home2Image6,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 9,
      title: "Mockup Collection 7",
      image: home2Image7,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 10,
      title: "Mockup Collection 8",
      image: home2Image8,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 11,
      title: "Mockup Collection 9",
      image: home2Image9,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 12,
      title: "Mockup Collection 10",
      image: home2Image10,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 13,
      title: "Mockup Collection 11",
      image: home2Image11,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 14,
      title: "Mockup Collection 12",
      image: home2Image12,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 15,
      title: "Mockup Collection 13",
      image: home2Image13,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 16,
      title: "Mockup Collection 14",
      image: home2Image14,
      category: "Design",
      genre: "Creative",
    },
    {
      id: 17,
      title: "Mockup Collection 15",
      image: home2Image15,
      category: "Design",
      genre: "Creative",
    }
  ];

  const _stats = [
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



        {/* Hero Section */}
        <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Book publishing
                <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">made beautiful</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                From captivating cover designs to flawless professional formatting, we refine your manuscript into a masterpiece that commands attention in bookstores and online marketplaces.
              </p>
            </div>

            {/* Optimized Slider with CSS animation */}
            <section className="py-[-30px] px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {printGallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden shadow-md transition-all duration-300"
                      data-aos="zoom-in"
                      data-aos-delay={`${index * 200}`}
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </section>


          </div>
        </section>

        {/* Get In Touch Section */}
        <section
          ref={getInTouchSectionRef}
          className="h-[700px] flex items-center justify-center py-16 px-4"
          style={{
            background: "linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 50%, #f0e6db 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 tracking-tight">Get in touch</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                At <span className="font-semibold text-orange-600">BookCraft Studio</span>, we guide you through every stage of the publishing journey.
                Our dedicated team ensures that every detail of your book is handled with care and expertise, giving you complete peace of mind.
                When your manuscript is ready, our experienced Publishing Specialists are here to provide personalized support and guidance.
              </p>

            </div>

            {/* Image Gallery */}
            <section className=" px-4 mb-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {getInTouch.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden shadow-md transition-all duration-300"
                      data-aos="zoom-in"
                      data-aos-delay={`${index * 200}`}
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div>
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
                <span className="border-b-2 ml-[-10px] border-transparent group-hover:border-orange-600 transition-colors duration-300">
                  +92 309 5204849
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

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {circularServices.map((service) => (
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
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-8" ref={ref}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              CreativeHub at a glance:
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

              {/* Stat 1 */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-purple-200">
                  <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">
                      {inView && <CountUp end={2000} duration={2} suffix="+" />}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Creative Projects</h3>
                  <p className="text-gray-600 text-sm">Successfully launched</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-emerald-200">
                  <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">
                      {inView && <CountUp end={4.9} duration={2} decimals={1} suffix="★" />}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">User Rating</h3>
                  <p className="text-gray-600 text-sm">From 2800+ reviews</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-orange-200">
                  <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">
                      {inView && <CountUp end={95} duration={2} suffix="+" />}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Countries</h3>
                  <p className="text-gray-600 text-sm">Worldwide reach</p>
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

            {/* Centered Slideshow */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden w-[1000px] md:w-[1200px] lg:w-[1440px]">
                <div
                  className="flex space-x-6 animate-infinite-scroll"
                  style={{ width: `${bookCollection.length * 2 * 250}px` }}
                >
                  {[...bookCollection, ...bookCollection].map((book, index) => (
                    <div key={index} className="flex-shrink-0 transform">
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
              {/* Barnes & Noble */}
              <a
                href="https://www.barnesandnoble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
              >
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  BARNES & NOBLE
                </div>
                <div className="text-sm text-slate-500 text-center mt-1">BOOKSELLERS</div>
              </a>

              {/* Amazon Books */}
              <a
                href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
              >
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  Amazon
                </div>
                <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-1"></div>
              </a>

              {/* Walmart Books */}
              <a
                href="https://www.walmart.com/cp/books/3920"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
              >
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  Walmart
                  <div className="ml-2 text-amber-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Target Books */}
              <a
                href="https://www.target.com/c/books/-/N-5xsxr"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
              >
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  Target
                  <div className="ml-2 w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </a>

              {/* eBay Books */}
              <a
                href="https://www.ebay.com/b/Books/267/bn_1854946"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
              >
                <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  eBay
                </div>
                <div className="flex gap-1 justify-center mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </a>

              {/* Etsy Books */}
              <a
                href="https://www.etsy.com/c/books-movies-and-music/books"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
              >
                <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
                    E
                  </div>
                  Etsy
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* Portfolio Section - Optimized with CSS */}
        {/* <section id="portfolio" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-orange-900/20"></div>
              <div className="relative z-10">
                <div className="text-center py-8 px-8">
                  <h3 className="text-3xl font-bold text-white mb-3">Our Book Design Portfolio</h3>
                  <p className="text-orange-200 mb-8">Continuously showcasing hundreds of professional book covers</p>

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
        </section> */}
        <section
          id="portfolio"
          className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-orange-900/20"></div>
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center px-10 py-14">

                {/* Left Side - Intro & Services */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">About Me</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Hi, I’m <span className="text-orange-400 font-semibold">Abdul Rehman</span>, a professional book designer & publishing expert.
                    With years of experience helping authors bring their stories to life, I specialize in creating beautiful, market-ready books.
                  </p>

                  <h4 className="text-xl font-semibold text-orange-300 mb-4">Services I Offer</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-400">✔</span> Paperback Formatting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-400">✔</span> Hardcover Formatting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-400">✔</span> Ebook Formatting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-400">✔</span> Book Cover Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-400">✔</span> Book Publishing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-400">✔</span> Book Writing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-400">✔</span> Lead Magnet PDF Design
                    </li>
                  </ul>
                </div>

                {/* Right Side - Owner Image */}
                <div className="flex justify-center">
                  <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-orange-500/30">
                    <img
                      src="/owner.jpg" // place your owner’s image inside public folder
                      alt="Owner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>



        <section className="py-20 px-4 bg-gradient-to-r from-amber-100 to-orange-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Guarantee Badge */}
              <div className="relative">
                <div className="w-48 h-48 flex items-center justify-center relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={Satisfaction}
                    alt="Satisfaction Guarantee"
                    className="w-full h-full object-contain rounded-full"
                  />
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

        {/* Trustpilot Reviews Section */}
        <section className="py-20 px-4 bg-slate-50 mb-[-120px]">
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
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReview
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




        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4 items-end">
          {/* Email Button */}
          <div className="group relative">
            <a
              href="mailto:shahrayr@gmail.com"
              className="flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            {/* Tooltip */}
            <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
              Send us an Email
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
            </div>
          </div>

          {/* WhatsApp Button */}
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





      </div>
    </>
  );
};

export default HomePage;
