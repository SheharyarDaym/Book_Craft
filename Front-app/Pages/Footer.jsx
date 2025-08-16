import React from 'react'
import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users } from "lucide-react"

const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

export default function Footer() {
  return (
    <div id="about">
      <footer className="bg-gray-900 text-white py-12 px-4 ">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <BookOpen className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">BookCraft Studio</span>
          </div>
          <p className="text-gray-400 mb-6">
            Crafting beautiful books that inspire and captivate readers worldwide.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio')}
            className="hover:text-white transition-colors">Portfolio</a>
            <a href="#services"
                onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors">Services</a>
            <a href="#about"
                onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">About</a>
            <a href="#contact"
                onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            © 2025 BookCraft Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}







