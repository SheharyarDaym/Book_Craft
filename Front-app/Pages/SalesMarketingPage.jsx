// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, DollarSign, TrendingUp, Target, Megaphone, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

// const SalesMarketingPage = () => {
//   const navigate = useNavigate()
//   const [selectedPackage, setSelectedPackage] = useState('professional')

//   const features = [
//     {
//       icon: <Target className="w-12 h-12" />,
//       title: "Strategic Marketing Planning",
//       description: "Comprehensive marketing strategies tailored to your book's genre, target audience, and publishing goals for maximum impact."
//     },
//     {
//       icon: <TrendingUp className="w-12 h-12" />,
//       title: "Sales Optimization",
//       description: "Data-driven approaches to boost your book sales across all platforms including Amazon, bookstores, and digital retailers."
//     },
//     {
//       icon: <Megaphone className="w-12 h-12" />,
//       title: "Multi-Channel Promotion",
//       description: "Coordinated marketing campaigns across social media, email, PR, and advertising channels to maximize your reach."
//     },
//     {
//       icon: <DollarSign className="w-12 h-12" />,
//       title: "Revenue Maximization",
//       description: "Pricing strategies, promotional campaigns, and sales funnel optimization to increase your book's profitability."
//     },
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "Brand Building",
//       description: "Establish your author brand and build a loyal readership that will support your current and future book releases."
//     },
//     {
//       icon: <Clock className="w-12 h-12" />,
//       title: "Launch Support",
//       description: "Complete book launch campaigns with pre-launch buzz, launch day coordination, and post-launch momentum building."
//     }
//   ]

//   const packages = [
//     {
//       id: 'basic',
//       name: 'Basic Marketing',
//       price: '$799',
//       description: 'Essential marketing for new authors',
//       features: [
//         'Marketing strategy document',
//         'Social media templates',
//         'Basic press release',
//         'Amazon optimization',
//         'Launch week support',
//         'Performance analytics'
//       ],
//       popular: false
//     },
//     {
//       id: 'professional',
//       name: 'Professional Marketing',
//       price: '$1,599',
//       description: 'Comprehensive marketing for serious authors',
//       features: [
//         'All Basic features',
//         '3-month marketing campaign',
//         'Professional book trailer',
//         'Influencer outreach',
//         'Paid advertising setup',
//         'Email marketing campaign',
//         'Media kit creation',
//         'Monthly strategy calls'
//       ],
//       popular: true
//     },
//     {
//       id: 'premium',
//       name: 'Premium Marketing',
//       price: '$2,999',
//       description: 'Full-service marketing solution',
//       features: [
//         'All Professional features',
//         '6-month marketing campaign',
//         'PR agency partnership',
//         'Book tour coordination',
//         'Advanced advertising management',
//         'Author website development',
//         'Podcast tour booking',
//         'Unlimited strategy support',
//         'Dedicated marketing manager'
//       ],
//       popular: false
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Lisa Rodriguez",
//       book: "The Entrepreneur's Journey",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "The marketing campaign exceeded all expectations! My book sales increased by 400% in the first month, and I'm now a recognized thought leader in my industry."
//     },
//     {
//       name: "Thomas Anderson",
//       book: "Digital Leadership",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "Professional, strategic, and results-driven marketing. The team helped me reach bestseller status and build a sustainable author platform."
//     }
//   ]

//   const processSteps = [
//     {
//       step: "1",
//       title: "Market Analysis",
//       description: "Comprehensive analysis of your target market, competition, and positioning opportunities"
//     },
//     {
//       step: "2",
//       title: "Strategy Development",
//       description: "Create a customized marketing strategy aligned with your goals, budget, and timeline"
//     },
//     {
//       step: "3",
//       title: "Campaign Launch",
//       description: "Execute multi-channel marketing campaigns with coordinated messaging and timing"
//     },
//     {
//       step: "4",
//       title: "Performance Monitoring",
//       description: "Track campaign performance, analyze data, and optimize strategies for better results"
//     },
//     {
//       step: "5",
//       title: "Ongoing Optimization",
//       description: "Continuous improvement and scaling of successful marketing tactics for sustained growth"
//     }
//   ]

//   const marketingServices = [
//     {
//       title: "Amazon Marketing",
//       description: "Optimize your Amazon presence with keyword research, A+ content, and advertising campaigns",
//       icon: <TrendingUp className="w-8 h-8" />,
//       color: "from-orange-500 to-red-500",
//       metrics: "Average 300% sales increase"
//     },
//     {
//       title: "Social Media Marketing",
//       description: "Build your author platform across Facebook, Instagram, Twitter, and LinkedIn",
//       icon: <Megaphone className="w-8 h-8" />,
//       color: "from-blue-500 to-indigo-500",
//       metrics: "10K+ new followers average"
//     },
//     {
//       title: "Email Marketing",
//       description: "Build and nurture your reader list with engaging email campaigns and newsletters",
//       icon: <Target className="w-8 h-8" />,
//       color: "from-green-500 to-emerald-500",
//       metrics: "25% average open rates"
//     },
//     {
//       title: "PR & Media Outreach",
//       description: "Secure media coverage, podcast interviews, and speaking opportunities",
//       icon: <DollarSign className="w-8 h-8" />,
//       color: "from-purple-500 to-violet-500",
//       metrics: "50+ media placements"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <button
//                 onClick={() => navigate('/')}
//                 className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
//               >
//                 <ArrowLeft className="w-6 h-6 text-slate-600" />
//               </button>
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-600" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
//                 <DollarSign className="w-4 h-4 text-green-600" />
//                 <span className="text-green-800 text-sm font-medium">Book Sales & Marketing Services</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//                 Book sales &
//                 <span className="block text-green-600">marketing services</span>
//               </h1>
              
//               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//                 Maximize your book's success with strategic marketing campaigns, sales optimization, and brand building that drives real results and revenue.
//               </p>
              
//               <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
//                 <DollarSign className="w-5 h-5" />
//                 <span>Boost Your Sales</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
            
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 {marketingServices.map((service, index) => (
//                   <div
//                     key={index}
//                     className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
//                   >
//                     <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                       {service.icon}
//                     </div>
//                     <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
//                     <p className="text-slate-600 text-sm mb-3 leading-relaxed">{service.description}</p>
//                     <div className="text-green-600 text-xs font-semibold">{service.metrics}</div>
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                 Proven Results
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">
//               Everything your book marketing needs:
//             </h2>
//             <p className="text-xl text-slate-600">Comprehensive marketing solutions that drive sales and build your author brand</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-green-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Marketing Process</h2>
//             <p className="text-xl text-slate-600">Strategic marketing approach that delivers measurable results</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="relative mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
//                     {step.step}
//                   </div>
//                   {index < processSteps.length - 1 && (
//                     <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300"></div>
//                   )}
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
//                 <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Marketing Package</h2>
//             <p className="text-xl text-slate-600">Strategic marketing solutions designed to maximize your book's success</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
//                   pkg.popular
//                     ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl'
//                     : 'border-slate-200 bg-white hover:border-green-300 hover:shadow-lg'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
//                   <p className="text-slate-600 mb-4">{pkg.description}</p>
//                   <div className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</div>
//                   <p className="text-slate-500 text-sm">Starting price</p>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, index) => (
//                     <li key={index} className="flex items-center space-x-3">
//                       <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
//                       <span className="text-slate-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() => setSelectedPackage(pkg.id)}
//                   className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
//                     pkg.popular
//                       ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
//                       : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
//                   }`}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-green-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
//             <p className="text-xl text-slate-600">Success stories from our marketing campaigns</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex items-center space-x-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
                
//                 <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
//                   "{testimonial.text}"
//                 </blockquote>
                
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
//                     <p className="text-slate-600 text-sm">Author of "{testimonial.book}"</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
//             Ready to Maximize Your
//             <span className="block text-green-200">Book Sales?</span>
//           </h2>
          
//           <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Transform your book into a bestseller with our proven marketing strategies and sales optimization techniques.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="group bg-white text-green-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
//               <DollarSign className="w-5 h-5" />
//               <span>Start Marketing Campaign</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <TrendingUp className="w-5 h-5" />
//               <span>View Success Stories</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Floating WhatsApp Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <div className="group relative">
//           <a
//             href="https://wa.me/1234567890"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
//           >
//             <MessageCircle className="w-7 h-7" />
//           </a>
          
//           <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
//             Chat with us on WhatsApp
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SalesMarketingPage










import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, DollarSign, TrendingUp, Target, Megaphone, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

const SalesMarketingPage = () => {
  const navigate = useNavigate()
  const [selectedPackage, setSelectedPackage] = useState('professional')

  const features = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Marketing Planning",
      description: "Comprehensive marketing strategies tailored to your book's genre, target audience, and publishing goals for maximum impact."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Sales Optimization",
      description: "Data-driven approaches to boost your book sales across all platforms including Amazon, bookstores, and digital retailers."
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Multi-Channel Promotion",
      description: "Coordinated marketing campaigns across social media, email, PR, and advertising channels to maximize your reach."
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Revenue Maximization",
      description: "Pricing strategies, promotional campaigns, and sales funnel optimization to increase your book's profitability."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Brand Building",
      description: "Establish your author brand and build a loyal readership that will support your current and future book releases."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Launch Support",
      description: "Complete book launch campaigns with pre-launch buzz, launch day coordination, and post-launch momentum building."
    }
  ]

  const packages = [
    {
      id: 'basic',
      name: 'Basic Marketing',
      price: '$799',
      description: 'Essential marketing for new authors',
      features: [
        'Marketing strategy document',
        'Social media templates',
        'Basic press release',
        'Amazon optimization',
        'Launch week support',
        'Performance analytics'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Marketing',
      price: '$1,599',
      description: 'Comprehensive marketing for serious authors',
      features: [
        'All Basic features',
        '3-month marketing campaign',
        'Professional book trailer',
        'Influencer outreach',
        'Paid advertising setup',
        'Email marketing campaign',
        'Media kit creation',
        'Monthly strategy calls'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Marketing',
      price: '$2,999',
      description: 'Full-service marketing solution',
      features: [
        'All Professional features',
        '6-month marketing campaign',
        'PR agency partnership',
        'Book tour coordination',
        'Advanced advertising management',
        'Author website development',
        'Podcast tour booking',
        'Unlimited strategy support',
        'Dedicated marketing manager'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Lisa Rodriguez",
      book: "The Entrepreneur's Journey",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The marketing campaign exceeded all expectations! My book sales increased by 400% in the first month, and I'm now a recognized thought leader in my industry."
    },
    {
      name: "Thomas Anderson",
      book: "Digital Leadership",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional, strategic, and results-driven marketing. The team helped me reach bestseller status and build a sustainable author platform."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Market Analysis",
      description: "Comprehensive analysis of your target market, competition, and positioning opportunities"
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create a customized marketing strategy aligned with your goals, budget, and timeline"
    },
    {
      step: "3",
      title: "Campaign Launch",
      description: "Execute multi-channel marketing campaigns with coordinated messaging and timing"
    },
    {
      step: "4",
      title: "Performance Monitoring",
      description: "Track campaign performance, analyze data, and optimize strategies for better results"
    },
    {
      step: "5",
      title: "Ongoing Optimization",
      description: "Continuous improvement and scaling of successful marketing tactics for sustained growth"
    }
  ]

  const marketingServices = [
    {
      title: "Amazon Marketing",
      description: "Optimize your Amazon presence with keyword research, A+ content, and advertising campaigns",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      metrics: "Average 300% sales increase"
    },
    {
      title: "Social Media Marketing",
      description: "Build your author platform across Facebook, Instagram, Twitter, and LinkedIn",
      icon: <Megaphone className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      metrics: "10K+ new followers average"
    },
    {
      title: "Email Marketing",
      description: "Build and nurture your reader list with engaging email campaigns and newsletters",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      metrics: "25% average open rates"
    },
    {
      title: "PR & Media Outreach",
      description: "Secure media coverage, podcast interviews, and speaking opportunities",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      metrics: "50+ media placements"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
        
        {/* Floating Marketing Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.1
              }}
            >
              {i % 4 === 0 ? (
                <TrendingUp className="w-8 h-8 text-green-400 transform rotate-12" />
              ) : i % 4 === 1 ? (
                <Target className="w-8 h-8 text-green-400 transform rotate-12" />
              ) : i % 4 === 2 ? (
                <Megaphone className="w-8 h-8 text-green-400 transform rotate-12" />
              ) : (
                <DollarSign className="w-8 h-8 text-green-400 transform rotate-12" />
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-green-800 text-sm font-medium">Book Sales & Marketing Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Book sales &
                <span className="block text-green-600">marketing services</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Maximize your book's success with strategic marketing campaigns, sales optimization, and brand building that drives real results and revenue.
              </p>
              
              <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <DollarSign className="w-5 h-5" />
                <span>Boost Your Sales</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <div className="grid grid-cols-2 gap-4">
                {marketingServices.map((service, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">{service.description}</p>
                    <div className="text-green-600 text-xs font-semibold">{service.metrics}</div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Proven Results
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
              Everything your book marketing needs:
            </h2>
            <p className="text-xl text-slate-600">Comprehensive marketing solutions that drive sales and build your author brand</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Marketing Process</h2>
            <p className="text-xl text-slate-600">Strategic marketing approach that delivers measurable results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Marketing Package</h2>
            <p className="text-xl text-slate-600">Strategic marketing solutions designed to maximize your book's success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-green-300 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <p className="text-slate-500 text-sm">Starting price</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
            <p className="text-xl text-slate-600">Success stories from our marketing campaigns</p>
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Maximize Your
            <span className="block text-green-200">Book Sales?</span>
          </h2>
          
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your book into a bestseller with our proven marketing strategies and sales optimization techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-green-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
              <DollarSign className="w-5 h-5" />
              <span>Start Marketing Campaign</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-3">
              <TrendingUp className="w-5 h-5" />
              <span>View Success Stories</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="group relative">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
          
          <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesMarketingPage