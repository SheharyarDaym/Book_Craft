import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { features, sampleBooks, faqs } from '../Data/paperback';

const PaperbackFormattingPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleNavClick = (e, targetId) => {
  e.preventDefault()

  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  } else {
    if (targetId === "home") {
      window.location.href = "/"
    } else {
      window.location.href = `/#${targetId}`
    }
  }
}
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(234, 88, 12, 0.85), rgba(239, 68, 68, 0.85)), url('data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                <defs>
                  <pattern id="books" patternUnits="userSpaceOnUse" width="400" height="300">
                    <rect width="400" height="300" fill="#f8fafc"/>
                    <rect x="50" y="50" width="80" height="120" fill="#64748b" rx="4"/>
                    <rect x="140" y="40" width="80" height="130" fill="#475569" rx="4"/>
                    <rect x="230" y="60" width="80" height="110" fill="#334155" rx="4"/>
                    <rect x="100" y="190" width="200" height="4" fill="#e2e8f0" rx="2"/>
                    <circle cx="320" cy="100" r="30" fill="#f1f5f9" opacity="0.7"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#books)"/>
              </svg>
            `)}')`
                    }}
                />

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-16 h-20 bg-white/10 rounded transform rotate-12 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-12 h-16 bg-white/10 rounded transform -rotate-12 animate-pulse delay-300"></div>
                    <div className="absolute bottom-20 left-20 w-20 h-24 bg-white/10 rounded transform rotate-45 animate-pulse delay-700"></div>
                    <div className="absolute bottom-40 right-10 w-14 h-18 bg-white/10 rounded transform -rotate-45 animate-pulse delay-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-left">
                            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium mb-6">
                                ✨ Professional Book Formatting Services
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Perfect Your
                                <span className="block bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                                    Paperback
                                </span>
                                <span className="block">Manuscript</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                                Transform your raw manuscript into a professionally formatted paperback that captivates readers and meets industry publishing standards.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-12">
                                <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                    Start Your Project →
                                </button>
                                <a
                                    href="#portfolio"
                                    onClick={(e) => handleNavClick(e, "portfolio")}
                                    className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    Portfolio
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Main Book Stack */}
                                <div className="relative">
                                    {/* Book 1 (Back) */}
                                    <div className="absolute top-0 left-0 w-64 h-80 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg shadow-2xl transform rotate-6 border border-white/20">
                                        <div className="p-6 text-white">
                                            <div className="text-xs opacity-80 mb-2">LITERARY FICTION</div>
                                            <div className="font-bold text-lg mb-4">The Art of<br />Storytelling</div>
                                            <div className="absolute bottom-6 text-xs opacity-70">Professional Format</div>
                                        </div>
                                    </div>

                                    {/* Book 2 (Middle) */}
                                    <div className="absolute top-4 left-4 w-64 h-80 bg-gradient-to-br from-green-600 to-teal-700 rounded-lg shadow-2xl transform rotate-3 border border-white/20">
                                        <div className="p-6 text-white">
                                            <div className="text-xs opacity-80 mb-2">BUSINESS GUIDE</div>
                                            <div className="font-bold text-lg mb-4">Success<br />Strategies</div>
                                            <div className="absolute bottom-6 text-xs opacity-70">Premium Layout</div>
                                        </div>
                                    </div>

                                    {/* Book 3 (Front) */}
                                    <div className="relative w-64 h-80 bg-gradient-to-br from-pink-600 to-rose-700 rounded-lg shadow-2xl transform -rotate-2 border border-white/20 ml-8 mt-8">
                                        <div className="p-6 text-white">
                                            <div className="text-xs opacity-80 mb-2">POETRY</div>
                                            <div className="font-bold text-lg mb-4">Words That<br />Dance</div>
                                            <div className="absolute bottom-6 text-xs opacity-70">Custom Design</div>
                                        </div>

                                        {/* Floating Pages Effect */}
                                        <div className="absolute -top-2 -right-2 w-8 h-10 bg-white rounded shadow-lg opacity-90"></div>
                                        <div className="absolute -top-4 -right-4 w-6 h-8 bg-white rounded shadow-lg opacity-70"></div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-100 rounded-full opacity-30 animate-pulse delay-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our Paperback Formatting?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our expert designers ensure your book looks professional and meets all industry standards for print publishing.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="flex justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Samples Section */}
            <div className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Download Sample Formatted Books
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See the quality of our work with these free sample downloads showcasing different genres and formatting styles.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {sampleBooks.map((book, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                                    {/* Book Preview Mockup */}
                                    <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-300">
                                        <div className="w-48 h-64 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
                                            {/* Book Cover */}
                                            <div className={`h-48 ${index === 0 ? 'bg-gradient-to-br from-blue-600 to-purple-700' : index === 1 ? 'bg-gradient-to-br from-green-600 to-teal-700' : 'bg-gradient-to-br from-pink-600 to-rose-700'} rounded-t-lg flex flex-col justify-between p-4`}>
                                                <div>
                                                    <div className="text-white text-xs font-bold mb-2 opacity-80">
                                                        {book.genre.toUpperCase()}
                                                    </div>
                                                    <div className="text-white font-bold text-sm leading-tight">
                                                        {book.title.split(' ').slice(0, 2).join(' ')}
                                                    </div>
                                                </div>
                                                <div className="text-white text-xs opacity-70">
                                                    Professional Format
                                                </div>
                                            </div>
                                            {/* Book Spine */}
                                            <div className="h-4 bg-gray-50 border-t border-gray-200 flex items-center px-2">
                                                <div className="w-full h-px bg-gray-300"></div>
                                            </div>
                                            {/* Page Preview */}
                                            <div className="flex-1 bg-white rounded-b-lg p-2">
                                                <div className="space-y-1">
                                                    <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                                                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                                                    <div className="w-5/6 h-1 bg-gray-200 rounded"></div>
                                                    <div className="w-2/3 h-1 bg-gray-300 rounded"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Shadow Effect */}
                                        <div className="absolute inset-0 bg-black/10 rounded-lg transform translate-x-2 translate-y-2 -z-10"></div>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        SAMPLE
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                        {book.title}
                                    </h3>
                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span className="font-medium">Genre:</span>
                                            <span>{book.genre}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span className="font-medium">Pages:</span>
                                            <span>{book.pages}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span className="font-medium">Trim Size:</span>
                                            <span>{book.trimSize}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 font-semibold">
                                            <Download className="w-4 h-4" />
                                            Download PDF Sample
                                        </button>
                                        <button className="w-full border border-orange-600 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium">
                                            Preview Pages
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Get answers to common questions about our paperback formatting services
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {faq.question}
                                    </h3>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Format Your Paperback?
                    </h2>
                    <p className="text-xl mb-8">
                        Join thousands of successful authors who trust our professional formatting services
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                            Get Started Today
                        </button>
                        <a
                            href="https://wa.me/+923095204849"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
                        >
                            Contact Us
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaperbackFormattingPage;