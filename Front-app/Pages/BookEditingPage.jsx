import { useState, useEffect } from 'react'
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Edit, FileText, Search, Zap, ArrowRight, Shield, Clock, Award } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from 'react-router-dom'

const BookEditingPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const [selectedPackage, setSelectedPackage] = useState('professional')

  const features = [
    {
      icon: <Edit className="w-12 h-12" />,
      title: "Comprehensive Editing",
      description: "Professional developmental, line, and copy editing to enhance your manuscript's clarity, flow, and impact."
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Detailed Proofreading",
      description: "Meticulous proofreading to eliminate grammar, spelling, punctuation, and formatting errors throughout your book."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Structural Analysis",
      description: "In-depth analysis of plot structure, character development, pacing, and overall narrative coherence."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast Turnaround",
      description: "Efficient editing process with clear timelines and regular progress updates to meet your publishing deadlines."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with multiple revision rounds to ensure your manuscript meets professional standards."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Flexible Scheduling",
      description: "Accommodating scheduling with rush options available for urgent projects and tight deadlines."
    }
  ]

  const packages = [
    {
      id: 'basic',
      name: 'Basic Editing',
      price: '$599',
      description: 'Essential editing for polished writing',
      features: [
        'Copy editing & proofreading',
        'Grammar & spelling correction',
        'Basic style improvements',
        'Up to 50,000 words',
        '2-3 week turnaround',
        'One revision round'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Editing',
      price: '$1,299',
      description: 'Comprehensive editing for serious authors',
      features: [
        'All Basic features',
        'Developmental editing',
        'Line editing for flow',
        'Structural feedback',
        'Up to 100,000 words',
        '3-4 week turnaround',
        'Two revision rounds',
        'Editorial report included'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Editing',
      price: '$2,499',
      description: 'Complete manuscript transformation',
      features: [
        'All Professional features',
        'Unlimited word count',
        'Character development analysis',
        'Plot structure optimization',
        'Market positioning advice',
        '4-5 week turnaround',
        'Unlimited revisions',
        'Publishing consultation',
        'Dedicated editor'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      book: "The Silent Garden",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The editing transformed my manuscript completely! The developmental feedback helped me strengthen my plot, and the line editing made my prose shine."
    },
    {
      name: "Robert Chen",
      book: "Business Innovation Strategies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional, thorough, and insightful editing. My business book is now clear, engaging, and ready for publication. Highly recommend their services."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Manuscript Submission",
      description: "Upload your manuscript and provide details about your goals, target audience, and specific concerns"
    },
    {
      step: "2",
      title: "Editor Assignment",
      description: "We match you with a professional editor who specializes in your genre and understands your vision"
    },
    {
      step: "3",
      title: "Comprehensive Review",
      description: "Your editor performs a thorough analysis covering structure, content, style, and technical accuracy"
    },
    {
      step: "4",
      title: "Detailed Editing",
      description: "Line-by-line editing with tracked changes, comments, and suggestions for improvement"
    },
    {
      step: "5",
      title: "Final Review",
      description: "Review edited manuscript, request revisions if needed, and receive your polished, publication-ready book"
    }
  ]

  const editingTypes = [
    {
      title: "Developmental Editing",
      description: "Big-picture editing focusing on structure, plot, character development, and overall narrative flow.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Line Editing",
      description: "Sentence-level editing to improve clarity, flow, style, and readability while preserving your voice.",
      icon: <Edit className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Copy Editing",
      description: "Technical editing for grammar, spelling, punctuation, and consistency throughout your manuscript.",
      icon: <Search className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Proofreading",
      description: "Final polish to catch any remaining errors before publication, ensuring a professional finish.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ]
    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" data-aos="fade-up">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80")'
    }}
  ></div>
  
  {/* Dark Gradient Overlay for dramatic contrast */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
 
  {/* Floating Edit Icons */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-bounce"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          opacity: 0.1
        }}
      >
        {i % 3 === 0 ? (
          <Edit className="w-8 h-8 text-orange-400 transform rotate-12" />
        ) : i % 3 === 1 ? (
          <FileText className="w-8 h-8 text-orange-400 transform rotate-12" />
        ) : (
          <Search className="w-8 h-8 text-orange-400 transform rotate-12" />
        )}
      </div>
    ))}
  </div>
 
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right" data-aos-delay="200">
       
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Professional book
          <span className="block text-orange-400">editing services</span>
        </h1>
       
        <p className="text-xl text-slate-200 mb-8 leading-relaxed">
          Transform your manuscript into a polished, professional book with our comprehensive editing services. From developmental editing to final proofreading.
        </p>
       
        <a
          href="https://wa.me/923001234567" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg">
            <Edit className="w-5 h-5" />
            <span>Start Editing Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
     
      <div className="relative" data-aos="fade-left" data-aos-delay="400">
        <div className="grid grid-cols-2 gap-4">
          {editingTypes.map((type, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {type.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{type.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          Expert Editorial Services
        </div>
      </div>
    </div>
  </div>
</section>







      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything your manuscript needs:
            </h2>
            <p className="text-xl text-slate-600">Comprehensive editing services for every type of book</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Why trust us to edit your book?
              </h2>
              
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  Book Studio Craft's team of editors has extensive experience with non-fiction titles such as biographies and academic journals, along with a <span className="text-orange-400 underline">range of fiction novels</span>—spanning from <span className="text-orange-400 underline">Sci-Fi</span> to <span className="text-orange-400 underline">Romances</span>. Many of them are seasoned experts who have collaborated with bestselling authors across various genres and with several publishing houses.
                </p>

                
                <p className="text-lg leading-relaxed">
                 All editors hold academic degrees in English, Communications, Education, Literature, Journalism, or other fields relevant to publishing. They rely on the industry-standard Chicago Manual of Style to guide their work, but many are also well-versed in other widely used styles such as AP and MLA. This ensures your content receives professional, in-depth editing tailored to your specific requirements.
                </p>
                
                <p className="text-lg leading-relaxed font-semibold text-white">
                  You can expect to have your edited manuscript ready in 6 to 10 business 
                  days.
                </p>
              </div>
              
              <div className="mt-8">
                <a
            href="https://wa.me/1234567890"
            target="_blank"
          >
                <button className="group bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <Award className="w-5 h-5" />
                  <span>Meet Our Editors</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Professional editor working on manuscript"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-semibold text-slate-900">Expert Editors</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-semibold text-slate-900">6-10 Business Days</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-500 rounded-full opacity-60"></div>
              <div className="absolute top-1/3 -right-6 w-6 h-6 bg-orange-400 rounded-full opacity-90"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Book Editing Process</h2>
            <p className="text-xl text-slate-600">From raw manuscript to polished book in 5 professional steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-amber-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
            <p className="text-xl text-slate-600">Success stories from edited manuscripts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">Author of "{testimonial.book}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
  )
}

export default BookEditingPage
