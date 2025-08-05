// import { useState, useEffect } from "react"
// import {
//   BookOpen,
//   CheckCircle,
//   Clock,
//   FileText,
//   Palette,
//   Star,
//   ArrowRight,
//   ArrowLeft,
//   Upload,
//   MessageCircle,
//   Zap,
//   Sparkles,
//   Award,
// } from "lucide-react"

// const StartProjectPage = () => {
//   const [currentStep, setCurrentStep] = useState(1)
//   const [formData, setFormData] = useState({
//     projectType: "",
//     genre: "",
//     title: "",
//     author: "",
//     description: "",
//     timeline: "",
//     budget: "",
//     additionalServices: [],
//     contactInfo: {
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     },
//   })
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//     window.scrollTo(0, 0)
//   }, [])

//   const steps = [
//     { number: 1, title: "Project Type", icon: <BookOpen className="w-5 h-5" /> },
//     { number: 2, title: "Details", icon: <FileText className="w-5 h-5" /> },
//     { number: 3, title: "Timeline & Budget", icon: <Clock className="w-5 h-5" /> },
//     { number: 4, title: "Contact Info", icon: <MessageCircle className="w-5 h-5" /> },
//   ]

//   const projectTypes = [
//     {
//       id: "cover-design",
//       title: "Cover Design",
//       description: "Eye-catching book cover that captures your story's essence",
//       price: "Starting at $299",
//       features: ["High-resolution files", "3D mockups", "Print & digital ready", "3 revision rounds"],
//       icon: <Palette className="w-8 h-8" />,
//     },
//     {
//       id: "complete-package",
//       title: "Complete Package",
//       description: "Full book design including cover, interior layout, and formatting",
//       price: "Starting at $799",
//       features: ["Cover design", "Interior layout", "Print formatting", "eBook formatting", "Unlimited revisions"],
//       icon: <BookOpen className="w-8 h-8" />,
//     },
//     {
//       id: "series-branding",
//       title: "Series Branding",
//       description: "Consistent branding across multiple books in your series",
//       price: "Starting at $1,299",
//       features: ["Series template", "Multiple covers", "Brand guidelines", "Marketing materials", "Priority support"],
//       icon: <Star className="w-8 h-8" />,
//     },
//   ]

//   const genres = [
//     "Fiction",
//     "Non-Fiction",
//     "Fantasy",
//     "Romance",
//     "Mystery/Thriller",
//     "Sci-Fi",
//     "Children's",
//     "Young Adult",
//     "Business",
//     "Self-Help",
//     "Biography",
//     "History",
//     "Other",
//   ]

//   const timelines = [
//     { value: "rush", label: "Rush (1-2 weeks)", extra: "+50% fee" },
//     { value: "standard", label: "Standard (2-3 weeks)", extra: "Most popular" },
//     { value: "extended", label: "Extended (4-6 weeks)", extra: "Best value" },
//   ]

//   const budgetRanges = [
//     { value: "300-500", label: "$300 - $500" },
//     { value: "500-1000", label: "$500 - $1,000" },
//     { value: "1000-2000", label: "$1,000 - $2,000" },
//     { value: "2000+", label: "$2,000+" },
//   ]

//   const additionalServices = [
//     { id: "author-branding", name: "Author Branding Package", price: "$199" },
//     { id: "marketing-materials", name: "Marketing Materials", price: "$149" },
//     { id: "social-media-kit", name: "Social Media Kit", price: "$99" },
//     { id: "book-trailer", name: "Book Trailer Design", price: "$299" },
//     { id: "website-banner", name: "Website Banner Set", price: "$79" },
//   ]

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }))
//   }

//   const handleContactInfoChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       contactInfo: {
//         ...prev.contactInfo,
//         [field]: value,
//       },
//     }))
//   }

//   const handleAdditionalServiceToggle = (serviceId) => {
//     setFormData((prev) => ({
//       ...prev,
//       additionalServices: prev.additionalServices.includes(serviceId)
//         ? prev.additionalServices.filter((id) => id !== serviceId)
//         : [...prev.additionalServices, serviceId],
//     }))
//   }

//   const nextStep = () => {
//     if (currentStep < steps.length) {
//       window.scrollTo({
//         top: 430,
//         left: 0,
//         behavior: 'smooth'
//       });
//       setCurrentStep(currentStep + 1)
//     }
//   }

//   const prevStep = () => {
//     if (currentStep > 1) {
//       window.scrollTo({
//         top: 430,
//         left: 0,
//         behavior: 'smooth'
//       });
//       setCurrentStep(currentStep - 1)
//     }
//   }

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData)
//     alert("Thank you! Your project request has been submitted. We'll get back to you within 24 hours.")
//   }

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
//             </div>
//           </div>
//         </div>
//       </nav>
                                            
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 px-4 relative overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5"></div>
//         <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div
//             className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
//               <Zap className="w-4 h-4 text-amber-400" />
//               <span className="text-slate-300 text-sm font-medium">Project Inquiry</span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//               Start Your
//               <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
//                 Dream Project
//               </span>
//             </h1>

//             <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Let's bring your book to life with stunning design that captures readers' attention and reflects your
//               story's soul.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Progress Steps */}
//       <div className="max-w-5xl mx-auto px-4 mb-12">
//         <div className="flex justify-between items-center relative">
//           <div className="absolute top-6 left-0 right-0 h-1 bg-slate-700/50 rounded-full">
//             <div
//               className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
//               style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
//             />
//           </div>
//           {steps.map((step, index) => (
//             <div key={step.number} className="flex flex-col items-center relative z-10">
//               <div
//                 className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
//                   currentStep >= step.number
//                     ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 shadow-2xl shadow-amber-500/25"
//                     : "bg-slate-800 border-2 border-slate-600 text-slate-400"
//                 }`}
//               >
//                 {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : step.icon}
//               </div>
//               <span
//                 className={`mt-3 text-sm font-medium ${
//                   currentStep >= step.number ? "text-amber-400" : "text-slate-500"
//                 }`}
//               >
//                 {step.title}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Form Content */}
//       <div className="max-w-5xl mx-auto px-4 pb-24">
//         <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl shadow-2xl p-8 md:p-12">
//           {/* Step 1: Project Type */}
//           {currentStep === 1 && (
//             <div className="space-y-8">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold text-white mb-4">Choose Your Project Type</h2>
//                 <p className="text-slate-400 text-lg">Select the service that best fits your needs</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {projectTypes.map((type) => (
//                   <div
//                     key={type.id}
//                     className={`group relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
//                       formData.projectType === type.id
//                         ? "border-amber-500 bg-amber-500/10 shadow-2xl shadow-amber-500/25"
//                         : "border-slate-600 bg-slate-800/30 hover:border-amber-400 hover:bg-slate-800/50"
//                     }`}
//                     onClick={() => handleInputChange("projectType", type.id)}
//                   >
//                     <div className="text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
//                       {type.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
//                     <p className="text-slate-400 mb-6 leading-relaxed">{type.description}</p>
//                     <div className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-6">
//                       {type.price}
//                     </div>
//                     <ul className="space-y-3">
//                       {type.features.map((feature, index) => (
//                         <li key={index} className="flex items-center text-sm text-slate-300">
//                           <CheckCircle className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Step 2: Project Details */}
//           {currentStep === 2 && (
//             <div className="space-y-8">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold text-white mb-4">Project Details</h2>
//                 <p className="text-slate-400 text-lg">Tell us about your book</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-3">Book Title</label>
//                   <input
//                     type="text"
//                     value={formData.title}
//                     onChange={(e) => handleInputChange("title", e.target.value)}
//                     className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300"
//                     placeholder="Enter your book title"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-3">Author Name</label>
//                   <input
//                     type="text"
//                     value={formData.author}
//                     onChange={(e) => handleInputChange("author", e.target.value)}
//                     className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300"
//                     placeholder="Enter author name"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-4">Genre</label>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                   {genres.map((genre) => (
//                     <button
//                       key={genre}
//                       onClick={() => handleInputChange("genre", genre)}
//                       className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
//                         formData.genre === genre
//                           ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 shadow-lg transform scale-105"
//                           : "bg-slate-700/50 text-slate-300 border border-slate-600 hover:bg-slate-700 hover:border-amber-500/50"
//                       }`}
//                     >
//                       {genre}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-3">Book Description</label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) => handleInputChange("description", e.target.value)}
//                   rows={5}
//                   className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300 resize-none"
//                   placeholder="Briefly describe your book, its themes, and any specific design ideas you have in mind..."
//                 />
//               </div>

//               <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8 rounded-2xl">
//                 <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
//                   <Upload className="w-5 h-5 mr-2 text-amber-400" />
//                   Reference Materials
//                 </h3>
//                 <p className="text-slate-400 mb-6">
//                   Upload any reference images, existing covers, or inspiration materials
//                 </p>
//                 <div className="border-2 border-dashed border-amber-500/30 rounded-xl p-12 text-center hover:border-amber-500/50 transition-colors duration-300">
//                   <Upload className="w-16 h-16 text-amber-400 mx-auto mb-4" />
//                   <p className="text-slate-300 mb-2 text-lg">Drag and drop files here, or click to browse</p>
//                   <p className="text-sm text-slate-500">Support: JPG, PNG, PDF (Max 10MB)</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Timeline & Budget */}
//           {currentStep === 3 && (
//             <div className="space-y-8">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold text-white mb-4">Timeline & Budget</h2>
//                 <p className="text-slate-400 text-lg">When do you need your project completed?</p>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-6">Project Timeline</label>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {timelines.map((timeline) => (
//                     <div
//                       key={timeline.value}
//                       className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
//                         formData.timeline === timeline.value
//                           ? "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/25"
//                           : "border-slate-600 bg-slate-800/30 hover:border-amber-400"
//                       }`}
//                       onClick={() => handleInputChange("timeline", timeline.value)}
//                     >
//                       <div className="text-xl font-bold text-white mb-2">{timeline.label}</div>
//                       <div className="text-sm text-slate-400">{timeline.extra}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-6">Budget Range</label>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {budgetRanges.map((budget) => (
//                     <button
//                       key={budget.value}
//                       onClick={() => handleInputChange("budget", budget.value)}
//                       className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 transform hover:scale-105 ${
//                         formData.budget === budget.value
//                           ? "border-amber-500 bg-amber-500/10 text-amber-400 shadow-lg shadow-amber-500/25"
//                           : "border-slate-600 bg-slate-800/30 hover:border-amber-400 text-slate-300"
//                       }`}
//                     >
//                       <div className="text-lg font-bold">{budget.label}</div>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-6">Additional Services</label>
//                 <div className="space-y-4">
//                   {additionalServices.map((service) => (
//                     <div
//                       key={service.id}
//                       className={`flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
//                         formData.additionalServices.includes(service.id)
//                           ? "border-amber-500 bg-amber-500/10"
//                           : "border-slate-600 bg-slate-800/30 hover:border-amber-400"
//                       }`}
//                       onClick={() => handleAdditionalServiceToggle(service.id)}
//                     >
//                       <div className="flex items-center">
//                         <div
//                           className={`w-6 h-6 rounded border-2 mr-4 flex items-center justify-center ${
//                             formData.additionalServices.includes(service.id)
//                               ? "bg-amber-500 border-amber-500"
//                               : "border-slate-500"
//                           }`}
//                         >
//                           {formData.additionalServices.includes(service.id) && (
//                             <CheckCircle className="w-4 h-4 text-slate-900" />
//                           )}
//                         </div>
//                         <span className="text-white font-medium">{service.name}</span>
//                       </div>
//                       <span className="text-amber-400 font-bold text-lg">{service.price}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 4: Contact Information */}
//           {currentStep === 4 && (
//             <div className="space-y-8">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold text-white mb-4">Contact Information</h2>
//                 <p className="text-slate-400 text-lg">How can we reach you?</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-3">Full Name</label>
//                   <input
//                     type="text"
//                     value={formData.contactInfo.name}
//                     onChange={(e) => handleContactInfoChange("name", e.target.value)}
//                     className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-3">Email Address</label>
//                   <input
//                     type="email"
//                     value={formData.contactInfo.email}
//                     onChange={(e) => handleContactInfoChange("email", e.target.value)}
//                     className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300"
//                     placeholder="Enter your email address"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-3">Phone Number (Optional)</label>
//                 <input
//                   type="tel"
//                   value={formData.contactInfo.phone}
//                   onChange={(e) => handleContactInfoChange("phone", e.target.value)}
//                   className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-3">Additional Message</label>
//                 <textarea
//                   value={formData.contactInfo.message}
//                   onChange={(e) => handleContactInfoChange("message", e.target.value)}
//                   rows={5}
//                   className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300 resize-none"
//                   placeholder="Any additional information or special requests..."
//                 />
//               </div>

//               {/* Project Summary */}
//               <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8 rounded-2xl">
//                 <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
//                   <Award className="w-5 h-5 mr-2 text-amber-400" />
//                   Project Summary
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//                   <div className="space-y-3">
//                     <div>
//                       <span className="text-slate-400">Project Type:</span>
//                       <div className="text-white font-medium">
//                         {formData.projectType
//                           ? projectTypes.find((t) => t.id === formData.projectType)?.title
//                           : "Not selected"}
//                       </div>
//                     </div>
//                     <div>
//                       <span className="text-slate-400">Genre:</span>
//                       <div className="text-white font-medium">{formData.genre || "Not selected"}</div>
//                     </div>
//                   </div>
//                   <div className="space-y-3">
//                     <div>
//                       <span className="text-slate-400">Timeline:</span>
//                       <div className="text-white font-medium">
//                         {formData.timeline
//                           ? timelines.find((t) => t.value === formData.timeline)?.label
//                           : "Not selected"}
//                       </div>
//                     </div>
//                     <div>
//                       <span className="text-slate-400">Budget:</span>
//                       <div className="text-white font-medium">
//                         {formData.budget
//                           ? budgetRanges.find((b) => b.value === formData.budget)?.label
//                           : "Not selected"}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {formData.additionalServices.length > 0 && (
//                   <div className="mt-6 pt-6 border-t border-amber-500/20">
//                     <span className="text-slate-400 block mb-3">Additional Services:</span>
//                     <ul className="space-y-2">
//                       {formData.additionalServices.map((serviceId) => (
//                         <li key={serviceId} className="text-white flex items-center">
//                           <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
//                           {additionalServices.find((s) => s.id === serviceId)?.name}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Navigation Buttons */}
//           <div className="flex justify-between items-center mt-16 pt-8 border-t border-slate-700/50">
//             <button
//               onClick={prevStep}
//               disabled={currentStep === 1}
//               className={`flex items-center space-x-2 px-8 py-4 rounded-full transition-all duration-300 ${
//                 currentStep === 1
//                   ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
//                   : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
//               }`}
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <span>Previous</span>
//             </button>

//             {currentStep < steps.length ? (
//               <button
//                 onClick={nextStep}
//                 className="group relative flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
//               >
//                 <span className="relative z-10">Next Step</span>
//                 <ArrowRight className="w-5 h-5 relative z-10" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             ) : (
//               <button
//                 onClick={handleSubmit}
//                 className="group relative flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
//               >
//                 <Zap className="w-5 h-5 relative z-10" />
//                 <span className="relative z-10">Submit Project</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StartProjectPage












