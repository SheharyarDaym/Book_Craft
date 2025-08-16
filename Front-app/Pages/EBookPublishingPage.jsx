import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Users, CheckCircle, Star, Phone, ArrowRight, Menu, X } from 'lucide-react';
import {
  ArrowLeft,
  Edit,
  Sparkles,
  Check,
  MessageCircle,
  Clock,
  Printer,
  Package,
  Truck,
  Globe,
  Zap,
  Shield,
  Award,
} from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-12 text-red-600">Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const BookCraftStudioLanding = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized animation class generator
  const getAnimationClass = useCallback((id, animation, delay = 0) => {
    const baseClass = "transition-all duration-1000 ease-out transform";
    const delayClass = delay ? `delay-${delay}` : '';

    if (!isVisible[id]) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} ${delayClass} opacity-0 translate-y-12`;
        case 'fade-down':
          return `${baseClass} ${delayClass} opacity-0 -translate-y-12`;
        case 'fade-right':
          return `${baseClass} ${delayClass} opacity-0 -translate-x-12`;
        case 'fade-left':
          return `${baseClass} ${delayClass} opacity-0 translate-x-12`;
        case 'zoom-in':
          return `${baseClass} ${delayClass} opacity-0 scale-90`;
        case 'zoom-out':
          return `${baseClass} ${delayClass} opacity-0 scale-110`;
        case 'flip-left':
          return `${baseClass} ${delayClass} opacity-0 rotateY-90`;
        case 'slide-up':
          return `${baseClass} ${delayClass} opacity-0 translate-y-16`;
        default:
          return `${baseClass} ${delayClass} opacity-0`;
      }
    }
    return `${baseClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  }, [isVisible]);

  useEffect(() => {
    window.scrollTo(0,0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // Empty dependency array is fine for static content

    const navigate = useNavigate()
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">

        


        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-100 via-orange-50 to-orange-100 py-24 overflow-hidden">
  <div 
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}
    aria-hidden="true"
  />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="flex-1 max-w-3xl">
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Premium digital 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">publishing</span> solutions
        </h1>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
          Transform your manuscript into a professional digital book with our comprehensive conversion, design, and distribution services. Join thousands of successful authors who trust BookCraft Studio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              type="button"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </button>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-8 mt-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
            <span>5000+ Books Published</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
            <span>48hr Turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
            <span>100% Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-shrink-0 lg:ml-16 mt-12 lg:mt-0">
        <div className="relative">
          <div className="w-80 h-[480px] bg-gray-900 rounded-3xl p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital book cover displayed on an eReader"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">The Art of Digital Publishing</h3>
                <p className="text-sm opacity-90">A comprehensive guide to modern book creation</p>
                <div className="flex items-center mt-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">4.9 (2,847 reviews)</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                BESTSELLER
              </div>
            </div>
          </div>

          <div className="absolute -left-8 top-12 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Author profile picture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -right-6 bottom-12 bg-white rounded-xl shadow-lg p-4 border">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">$50K+</div>
              <div className="text-xs text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div 
                id="features-badge"
                data-aos="fade-up"
                className={getAnimationClass('features-badge', 'fade-up') + " inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6"}
              >
                Why Choose Us
              </div>
              <h2 
                id="features-title"
                data-aos="fade-up"
                className={getAnimationClass('features-title', 'fade-up', 100) + " text-4xl lg:text-5xl font-bold text-gray-900 mb-6"}
              >
                Why BookCraft Studio leads in 
                <span className="text-orange-500"> digital publishing</span>
              </h2>
              <p 
                id="features-subtitle"
                data-aos="fade-up"
                className={getAnimationClass('features-subtitle', 'fade-up', 200) + " text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"}
              >
                We simplify your path from manuscript to published author with cutting-edge tools and personalized service. Our comprehensive platform delivers everything needed to bring your digital book vision to life.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:flex lg:flex-shrink-0 lg:mr-20 mb-12 lg:mb-0">
                <div 
                  id="features-devices"
                  data-aos="fade-right"
                  className={getAnimationClass('features-devices', 'fade-right', 300) + " relative"}
                >
                  <div className="relative">
                    <div className="w-72 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl">
                      <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <img 
                          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Digital book displayed on a tablet"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-600/90 p-8">
                          <div className="text-white h-full flex flex-col justify-between">
                            <div>
                              <h3 className="text-3xl font-bold mb-4">Hidden Depths</h3>
                              <div className="space-y-3">
                                <div className="h-2 bg-white/30 rounded-full w-full"></div>
                                <div className="h-2 bg-white/30 rounded-full w-3/4"></div>
                                <div className="h-2 bg-white/30 rounded-full w-full"></div>
                                <div className="h-2 bg-white/30 rounded-full w-5/6"></div>
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-lg">LISA J. RADCLIFF</p>
                              <div className="flex items-center mt-2">
                                <div className="flex text-yellow-300">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-current" aria-hidden="true" />
                                  ))}
                                </div>
                                <span className="ml-2 text-sm">Chapter 3 of 12</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      id="phone-device"
                      data-aos="fade-left"
                      className={getAnimationClass('phone-device', 'fade-left', 500) + " absolute -bottom-8 -right-12 w-48 h-80 bg-gray-900 rounded-3xl p-3 shadow-2xl"}
                    >
                      <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <img 
                          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Digital book displayed on a smartphone"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/90 to-purple-600/90 p-6">
                          <div className="text-center text-white h-full flex flex-col justify-between">
                            <div className="mt-8">
                              <h3 className="text-2xl font-bold">Lovely</h3>
                              <h3 className="text-2xl font-bold italic">Lady</h3>
                              <div className="mt-4 h-1 bg-white/30 rounded-full w-3/4 mx-auto"></div>
                            </div>
                            <div>
                              <p className="text-sm font-semibold">JANE SAMPLE</p>
                              <div className="flex justify-center mt-2">
                                <div className="flex text-yellow-300">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-2 w-2 fill-current" aria-hidden="true" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div 
                      id="reading-stats"
                      data-aos="zoom-in"
                      className={getAnimationClass('reading-stats', 'zoom-in', 700) + " absolute -top-4 -left-8 bg-white rounded-xl shadow-lg p-4 border"}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-500">95%</div>
                        <div className="text-xs text-gray-600">Reader Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 max-w-3xl">
                <div className="space-y-10">
                  {[
                    {
                      id: 'feature-1',
                      delay: 200,
                      title: 'Keep every penny you earn.',
                      description: 'Our transparent pricing means you retain 100% of all digital book sales revenue from major retailers.'
                    },
                    {
                      id: 'feature-2',
                      delay: 300,
                      title: 'Seamless Kindle integration plus expanded reach.',
                      description: 'Leverage Amazon\'s powerful KDP platform while simultaneously accessing BookCraft Studio\'s extensive global distribution network for maximum market penetration.'
                    },
                    {
                      id: 'feature-3',
                      delay: 400,
                      title: 'Professional format conversion.',
                      description: 'Our skilled technicians transform your manuscript into pixel-perfect digital formats optimized for Kindle, iPad, Nook, smartphones, tablets, and all popular reading devices worldwide.'
                    },
                    {
                      id: 'feature-4',
                      delay: 500,
                      title: 'Exclusive preview guarantee.',
                      description: 'BookCraft Studio is the only service providing complete ePub proofs for your thorough review before final publication.'
                    },
                    {
                      id: 'feature-5',
                      delay: 600,
                      title: 'Maximum audience reach.',
                      description: 'Publish independently and connect with millions of Amazon readers while expanding your audience through our comprehensive retail network, reaching more potential readers than any competitor.'
                    },
                    {
                      id: 'feature-6',
                      delay: 700,
                      title: 'Lightning-fast publication.',
                      description: 'Your completed book goes live across all platforms within 24-48 hours of your final approval.'
                    }
                  ].map((feature) => (
                    <div 
                      key={feature.id}
                      id={feature.id}
                      data-aos="fade-left"
                      className={getAnimationClass(feature.id, 'fade-left', feature.delay) + " flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-orange-500" aria-hidden="true" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div 
                id="start-badge"
                data-aos="fade-up"
                className={getAnimationClass('start-badge', 'fade-up') + " inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6"}
              >
                Get Started Today
              </div>
              <h2 
                id="start-title"
                data-aos="fade-up"
                className={getAnimationClass('start-title', 'fade-up', 100) + " text-4xl lg:text-5xl font-bold text-gray-900 mb-6"}
              >
                Ready to begin your 
                <span className="text-orange-500"> publishing journey?</span>
              </h2>
              <p 
                id="start-subtitle"
                data-aos="fade-up"
                className={getAnimationClass('start-subtitle', 'fade-up', 200) + " text-xl text-gray-600 max-w-3xl mx-auto"}
              >
                Join thousands of successful authors who have transformed their manuscripts into bestselling digital books.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: 'step-1',
                  delay: 200,
                  icon: BookOpen,
                  badge: '3',
                  title: 'Simple three-step process',
                  description: 'Everything you need to know to transform your manuscript into a published digital book.',
                  // link: 'Learn more.',
                  href: 'https://wa.me/923001234567',
                  image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                  alt: 'Person writing a manuscript for digital publishing'
                },
                {
                  id: 'step-2',
                  delay: 400,
                  icon: FileText,
                  badge: null,
                  title: 'Optimize your manuscript',
                  description: 'Essential guidelines and best practices for preparing your content for digital publication success.',
                  // link: 'Get started.',
                  href: 'https://wa.me/923001234567',
                  image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                  alt: 'Manuscript being prepared for digital publication'
                },
                {
                  id: 'step-3',
                  delay: 600,
                  icon: Users,
                  badge: null,
                  title: 'Expert guidance available',
                  description: 'Connect with our Publishing Consultants at 1-855-BOOKCRAFT for personalized assistance or request your custom quote online.',
                  // link: 'Contact us.',
                  href: 'https://wa.me/923001234567',
                  image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                  alt: 'Publishing consultant assisting an author'
                }
              ].map((step) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={step.id}
                    id={step.id}
                    data-aos="fade-up"
                    className={getAnimationClass(step.id, 'fade-up', step.delay) + " group"}
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={step.image}
                          alt={step.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center justify-center mb-6">
                          <div className="relative inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl">
                            <IconComponent className="h-8 w-8 text-orange-500" aria-hidden="true" />
                            {step.badge && (
                              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                                {step.badge}
                              </div>
                            )}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-center">
                          {step.description}
                        </p>
                        <div className="text-center">
                          <a 
                            href={step.href} 
                            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors group-hover:underline"
                          >
                            {step.link}
                            <ArrowRight className="ml-80 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

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

          </div>
        </section>


         <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Perfect Your
            <span className="block text-orange-200">Manuscript?</span>
          </h2>
          
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your raw manuscript into a polished, professional book that captivates readers and achieves your publishing goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
            href="https://wa.me/1234567890"
            target="_blank"
          >
            <button className="group bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
              <Edit className="w-5 h-5" />
              <span>Start Editing Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
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
      </section>
      </div>
    </ErrorBoundary>
  );
};

export default BookCraftStudioLanding;